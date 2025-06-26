import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { from_name, from_email, message } = req.body;

  if (!from_name || !from_email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Configure transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vijayendramurthy671@gmail.com',
      pass: 'pvbf chhv iaxx oyzm', // Use an app password, not your Gmail password
    },
  });

  try {
    await transporter.sendMail({
      from: `"${from_name}" <${from_email}>`,
      to: 'vijayendramuthy671@gmail.com', // Recipient
      subject: 'New Contact Form Submission',
      text: message,
      html: `<p><strong>Name:</strong> ${from_name}</p>
             <p><strong>Email:</strong> ${from_email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Failed to send email:', error);
    return res.status(500).json({ message: 'Failed to send email', error: error.toString() });
  }
}