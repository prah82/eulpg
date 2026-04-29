import nodemailer from "nodemailer";

export const sendMailController = async (req, res) => {
  try {
    const { name, email, phone, city, course, message } = req.body;

    // Required field validation
    if (!name || !email || !phone || !course) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    // Phone validation (accepts: 9876543210, +919876543210, +91 98765 43210, 98765-43210)
    const normalizedPhone = String(phone).replace(/[\s-]/g, "");
    const phoneRegex = /^(?:\+91)?[6-9]\d{9}$/;
    if (!phoneRegex.test(normalizedPhone)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid Indian mobile number",
      });
    }

    // Ensure environment values exist
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.ADMIN_EMAIL) {
      return res.status(500).json({
        success: false,
        message: "Email configuration is missing on server",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Website Enquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `New Course Enquiry - ${course}`,
      html: `
        <h2>New Course Enquiry</h2>
        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse;">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${normalizedPhone}</td></tr>
          <tr><td><strong>City</strong></td><td>${city || "Not provided"}</td></tr>
          <tr><td><strong>Course</strong></td><td>${course}</td></tr>
          <tr><td><strong>Message</strong></td><td>${message || "No message"}</td></tr>
        </table>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Mail sent successfully",
    });
  } catch (error) {
    console.error("Mail Error:", error);

    return res.status(500).json({
      success: false,
      message: "Mail sending failed",
      error: error.message,
    });
  }
};
