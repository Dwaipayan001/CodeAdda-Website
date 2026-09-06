const CONTACT_EMAIL = 'hellocodeadda@gmail.com';
const ALLOWED_COURSES = new Set([
  'Python Foundations',
  'AI & Machine Learning',
  'Agentic AI Lab',
  'Data Science Studio',
  'Not sure yet / General enquiry',
]);

type Enquiry = {
  name?: unknown;
  email?: unknown;
  course?: unknown;
  message?: unknown;
  website?: unknown;
};

const clean = (value: unknown, limit: number) =>
  typeof value === 'string' ? value.trim().slice(0, limit) : '';

export async function POST(request: Request) {
  let enquiry: Enquiry;

  try {
    enquiry = (await request.json()) as Enquiry;
  } catch {
    return Response.json({ error: 'Invalid enquiry.' }, { status: 400 });
  }

  // Bots commonly fill hidden fields that real visitors never see.
  if (clean(enquiry.website, 100)) {
    return Response.json({ ok: true });
  }

  const name = clean(enquiry.name, 100);
  const email = clean(enquiry.email, 254);
  const course = clean(enquiry.course, 100);
  const message = clean(enquiry.message, 3000);
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !validEmail || !ALLOWED_COURSES.has(course)) {
    return Response.json(
      { error: 'Please check your name, email and selected course.' },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error(
      'Contact email requires RESEND_API_KEY and CONTACT_FROM_EMAIL.',
    );
    return Response.json(
      {
        error:
          'Email delivery is temporarily unavailable. Please email us directly.',
      },
      { status: 503 },
    );
  }

  const text = [
    `Name: ${name}`,
    `Reply email: ${email}`,
    `Course: ${course}`,
    '',
    'Message:',
    message || 'No additional message provided.',
  ].join('\n');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [CONTACT_EMAIL],
      reply_to: email,
      subject: `Course enquiry: ${course}`,
      text,
    }),
  });

  if (!response.ok) {
    console.error('Resend rejected a contact enquiry.', await response.text());
    return Response.json(
      { error: 'We could not send your enquiry. Please try again shortly.' },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
