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

type ScriptResult = {
  ok?: boolean;
  error?: string;
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

  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
  const sharedSecret = process.env.CONTACT_FORM_SECRET;

  if (!scriptUrl || !sharedSecret) {
    console.error(
      'Contact email requires GOOGLE_APPS_SCRIPT_URL and CONTACT_FORM_SECRET.',
    );
    return Response.json(
      {
        error:
          'Email delivery is temporarily unavailable. Please email us directly.',
      },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        course,
        message,
        secret: sharedSecret,
      }),
      redirect: 'follow',
      signal: AbortSignal.timeout(15_000),
    });
    const result = (await response.json()) as ScriptResult;

    if (!response.ok || !result.ok) {
      console.error(
        'Google Apps Script rejected a contact enquiry.',
        result.error,
      );
      return Response.json(
        { error: 'We could not send your enquiry. Please try again shortly.' },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error('Google Apps Script contact delivery failed.', error);
    return Response.json(
      { error: 'We could not send your enquiry. Please try again shortly.' },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
