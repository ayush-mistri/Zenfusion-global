import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectType: "",
    mobile: "",
    projectDetails: "",
  });

  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const baseURL = process.env.NODE_ENV === "production"
  ? "https://zenfusion-global-123.vercel.app/api/send-email" // ✅ Corrected URL
  : "http://localhost:5000/api/send-email";

    console.log(baseURL);

    try {
      const response = await fetch(baseURL, {
        method: "POST",
        headers: {  
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          projectType: "",
          mobile: "",
          projectDetails: "",
        });
      } else {
        setStatus(`Failed to send message: ${result.message}`);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    
    <div className="bg-gray-800 text-white py-16 px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h4 className="text-sm text-gray-400 uppercase mb-4">Getting Touch</h4>
          <h1 className="text-4xl font-bold mb-6">
            Do you have a query in your mind?
          </h1>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-orange-500 mr-4">📞</span>
              <span>+91 87808 22334</span>
            </div>
            <div className="flex items-center">
              <span className="text-orange-500 mr-4">✉️</span>
              <span>
                admin.consultant@aimersglobal.in <br />
                Contact@aimersglobal.in
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-orange-500 mr-4">📍</span>
              <span>
                Surat, Gujarat 395004 <br />
                GJ, INDIA
              </span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2  p-8 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-l mb-2" htmlFor="fullName">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-400 focus:outline-none focus:border-blue-600"

                  required
                />
              </div>
              <div>
                <label className="block text-l mb-2" htmlFor="email">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-400 focus:outline-none focus:border-blue-600"

                  required
                />
              </div>
              <div>
                <label className="block text-l mb-2" htmlFor="projectType">
                  Project Type*
                </label>
                <input
                  type="text"
                  id="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-400 focus:outline-none focus:border-blue-600"
                  required
                />
              </div>
              <div>
                <label className="block text-l mb-2" htmlFor="mobile">
                  Mobile*
                </label>
                <input
                  type="text"
                  id="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-400 focus:outline-none focus:border-blue-600"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-l mb-2" htmlFor="projectDetails">
                Write Project Details*
              </label>
              <textarea
                id="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-400 focus:outline-none focus:border-blue-600"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-6 w-60 h-15 bg-blue-600 py-2 rounded-md text-white font-semibold hover:bg-blue-700 transition"
            >
              Send Message →
            </button>
          </form>
          {status && (
            <p className="mt-4 text-sm text-center text-gray-400">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
