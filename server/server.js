const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
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
        user: "ayushmistri0203@gmail.com", // Replace with your email
        pass: "rzrhpqjrpvgqdijb",   // Replace with your app password
      },
    });

    // Email content
    const mailOptions = {
      from: `${fullName} <${email}>`, // Display user's email as sender
      to: "shubhlodaliya@gmail.com", // Replace with the intended recipient
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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
