import nodemailer from "nodemailer";
import { google } from "googleapis";

const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
const USER_EMAIL = process.env.GMAIL_USER;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export default async function handler(req, res) {
  console.log("=== API /api/send-email called ===");
  console.log("Request method:", req.method);
  console.log("Request body:", req.body);

  console.log("GMAIL_CLIENT_ID:", process.env.GMAIL_CLIENT_ID);
  console.log("GMAIL_CLIENT_SECRET:", process.env.GMAIL_CLIENT_SECRET);
  console.log("GMAIL_REFRESH_TOKEN:", process.env.GMAIL_REFRESH_TOKEN);
  console.log("GMAIL_USER:", process.env.GMAIL_USER);
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const { name, email, message, subject } = req.body;
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: USER_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });
    await transporter.sendMail({
      from: `"${name}" <${USER_EMAIL}>`,
      to: USER_EMAIL,
      subject: subject || "New Contact Form Message",
      text: `From: ${name} (${email})\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h3>New Contact Form Message</h3>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || "New Contact Form Message"}</p>
          <hr>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ message: "Error sending email" });
  }
}
