// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { firstName, email, phone, message, service } = body;

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.MAIL_USER,
//       to: process.env.MAIL_USER,
//       subject: "New Strategy Call Request",
//       html: `
//         <h2>New Inquiry Received</h2>
//         <p><strong>Name:</strong> ${firstName}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Service:</strong> ${service}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.log("Email error:", error);
//     return new Response(JSON.stringify({ success: false }), { status: 500 });
//   }
// }

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

    // -------------------------
    // 1️⃣ Send email to YOU (admin)
    // -------------------------
    const adminMail = {
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

    await transporter.sendMail(adminMail);

    // -------------------------
    // 2️⃣ Auto-Reply Email to Client
    // -------------------------
    const autoReply = {
      from: process.env.MAIL_USER,
      to: email, // send to the client
      subject: "Thank You — We’ve Received Your Inquiry",
      html: `
        <p>Hi <strong>${firstName}</strong>,</p>

        <p>Thank you for reaching out to <strong>Upliftr</strong>.</p>

        <p>
          We’ve received your inquiry and our team is already reviewing your details. 
          One of our strategists will get in touch with you shortly to understand your 
          requirements and guide you through the next steps.
        </p>

        <p>
          If you need immediate assistance, feel free to reply to this email or contact us directly on WhatsApp.
        </p>

        <p>Looking forward to connecting with you.</p>

        <p>
          <strong>Best Regards,<br/>
          Upliftr Media Team</strong>
        </p>
      `,
    };

    await transporter.sendMail(autoReply);

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.log("Email error:", error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
