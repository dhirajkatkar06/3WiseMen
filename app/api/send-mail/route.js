import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, email, phone, message, service } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: "New Strategy Call Request",
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.log("Email error:", error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
