import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa"; // Install react-icons if not installed

const Team = () => {
    const teamMembers = [
        {
            name: "Shubh Lodaliya",
            title: "Founder & CEO",
            image: "/shubh.jpg", // Static image from the public folder
            instagram: "https://www.instagram.com/s_lodaliya/?igsh=YmowaXVyejRycm8%3D", // Instagram URL
            linkedin: "https://www.linkedin.com/in/lodaliya-shubh-811162252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", // LinkedIn URL
        },
        {
            name: "Meet Moradiya",
            title: "COO",
            image: "/meet.jpg", // Static image from the public folder
            instagram: "https://www.instagram.com/meet_1_moradiya?igsh=MWtoZ3F6M2E2Nmg1eg==", // Instagram URL
            linkedin: "https://linkedin.com/in/meet", // LinkedIn URL
        },
    ];

    return (
        <section className="bg-gray-800 text-white py-16">
            <div className="text-center mb-20">
                <h3 className="text-gray-400 uppercase text-lg mb-2">Our Team</h3>
                <h2 className="text-4xl md:text-6xl font-bold">Awesome team members</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-12 px-4">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="rounded-lg p-4 text-center max-w-xs relative group shadow-xl"
                    >
                        <div className="rounded-lg overflow-hidden relative">
                            {/* Image */}
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-80 object-cover object-center transition-transform duration-300 group-hover:scale-110 rounded-lg shadow-lg border-4 border-gray-300"
                            />


                            {/* Gradient overlay with hover effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-300 group-hover:from-black group-hover:via-black/50 group-hover:to-black/10"></div>

                            {/* Overlay with icons */}
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-start pl-5 justify-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a
                                    href={member.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white text-2xl hover:text-pink-500"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white text-2xl hover:text-blue-500"
                                >
                                    <FaLinkedin />
                                </a>
                            </div>

                        </div>
                        <h4 className="text-2xl font-bold mt-6">{member.name}</h4>
                        <p className="text-gray-400 text-sm">{member.title}</p>
                    </div>

                ))}
            </div>
        </section>
    );
};

export default Team;
