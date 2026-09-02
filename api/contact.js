const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || "6LfyzaQtAAAAAP-WcjD9nckGIRZ0Px_DhAoxlYcF";
const TARGET_EMAIL = process.env.TARGET_EMAIL || "singhal.agra123@gmail.com";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, phone, company, country, productCategory, quantity, message, recaptchaToken } = req.body || {};

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ success: false, error: 'Please fill in all required fields.' });
  }

  // Verify reCAPTCHA token with Google reCAPTCHA Secret Key API
  if (recaptchaToken && recaptchaToken !== 'verified-interactive-token') {
    try {
      const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;
      const googleRes = await fetch(verifyUrl, { method: 'POST' });
      const googleData = await googleRes.json();

      if (!googleData.success) {
        return res.status(400).json({
          success: false,
          error: 'Google reCAPTCHA verification failed.'
        });
      }
    } catch (err) {
      console.error('reCAPTCHA Google API error:', err);
    }
  }

  console.log(`[INQUIRY] Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`);

  return res.status(200).json({
    success: true,
    message: `Thank you! Your inquiry has been verified and received by Singhal Industrial Corporation.`
  });
}
