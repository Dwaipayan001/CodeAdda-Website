const CONTACT_EMAIL = 'hellocodeadda@gmail.com';
const ALLOWED_COURSES = new Set([
  'Python Foundations',
  'AI & Machine Learning',
  'Agentic AI Lab',
  'Data Science Studio',
  'Not sure yet / General enquiry',
]);

function doPost(event) {
  try {
    const payload = JSON.parse(event.postData.contents);
    const expectedSecret = PropertiesService.getScriptProperties().getProperty(
      'CONTACT_FORM_SECRET',
    );

    if (!expectedSecret || payload.secret !== expectedSecret) {
      return jsonResponse({ ok: false, error: 'Unauthorized request.' });
    }

    const name = clean(payload.name, 100);
    const email = clean(payload.email, 254);
    const course = clean(payload.course, 100);
    const message = clean(payload.message, 3000);

    if (
      !name ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !ALLOWED_COURSES.has(course)
    ) {
      return jsonResponse({ ok: false, error: 'Invalid enquiry.' });
    }

    if (MailApp.getRemainingDailyQuota() < 1) {
      return jsonResponse({ ok: false, error: 'Daily email limit reached.' });
    }

    const body = [
      `Name: ${name}`,
      `Reply email: ${email}`,
      `Course: ${course}`,
      '',
      'Message:',
      message || 'No additional message provided.',
    ].join('\n');

    MailApp.sendEmail({
      to: CONTACT_EMAIL,
      replyTo: email,
      name: 'CodeAdda Website',
      subject: `Course enquiry: ${course}`,
      body,
    });

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse({ ok: false, error: 'Unable to send enquiry.' });
  }
}

function clean(value, limit) {
  return typeof value === 'string' ? value.trim().slice(0, limit) : '';
}

function jsonResponse(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
