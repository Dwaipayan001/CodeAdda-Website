# Google Apps Script contact-form setup

The website sends contact enquiries to a Google Apps Script web app. The web
app sends the email to `hellocodeadda@gmail.com` through the Google account
that owns the script.

## 1. Create the script

1. Sign in to the Google account that owns `hellocodeadda@gmail.com`.
2. Open <https://script.google.com> and create a new project.
3. Replace the contents of `Code.gs` with the repository file at
   `google-apps-script/Code.gs`.

## 2. Add the shared secret

1. In Apps Script, open **Project Settings**.
2. Under **Script properties**, add a property named
   `CONTACT_FORM_SECRET`.
3. Give it a long random value (at least 32 characters). Do not put this value
   in GitHub.

## 3. Deploy the web app

1. Select **Deploy → New deployment**.
2. Choose **Web app**.
3. Set **Execute as** to **Me**.
4. Set **Who has access** to **Anyone**.
5. Deploy, approve the requested mail permission, and copy the URL ending in
   `/exec`.

## 4. Configure Vercel

Add both values in **Vercel → Project Settings → Environment Variables**:

```text
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/.../exec
CONTACT_FORM_SECRET=the_same_random_value_from_script_properties
```

Apply them to Production and Preview, then redeploy the project.

When `Code.gs` changes later, create a new Apps Script deployment version (or
edit the existing deployment) before testing the website again.
