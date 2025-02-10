import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://zenfusion-global-123.vercel.app"
        : "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);

app.use(bodyParser.json());

app.post("/api/send-email", async (req, res) => {
  const { fullName, email, projectType, mobile, projectDetails } = req.body;

  if (!fullName || !email || !projectType || !mobile || !projectDetails) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    console.log(email);

    const mailOptions = {
      from: `${fullName} <${email}>`,
      to: email,
      subject: `New Contact Form Submission from ${fullName}`,
      text: `
        Full Name: ${fullName}
        Email: ${email}
        Mobile: ${mobile}
        Project Type: ${projectType}
        Project Details: ${projectDetails}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

