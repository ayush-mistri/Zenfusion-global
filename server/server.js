import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === "production"
    ? "https://zenfusion-global-123.com" // Replace with your frontend's deployed URL
    : "http://localhost:5173", // React app origin
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

dotenv.config();
app.use(bodyParser.json());

// POST route to handle email sending
app.post("/send-email", async (req, res) => {
  const { fullName, email, projectType, mobile, projectDetails } = req.body;

  // Validate input fields
  if (!fullName || !email || !projectType || !mobile || !projectDetails) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Environment variable for email
        pass: process.env.EMAIL_PASSWORD, // Environment variable for app password
      },
    });
    

    // Email content
    const mailOptions = {
      from: `${fullName} <${email}>`, // Display user's email as sender
      to: "22cs007@charusat.edu.in", // Replace with the intended recipient
      subject: `New Contact Form Submission from ${fullName}`,
      text: `
        You have received a new message from the contact form:

        - Full Name: ${fullName}
        - Email: ${email}
        - Mobile: ${mobile}
        - Project Type: ${projectType}
        - Project Details: ${projectDetails}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
  
});
