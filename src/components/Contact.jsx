import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const contacts = [
    {
      icon: <FaEnvelope className="text-blue-400 text-2xl mr-3" />,
      label: "Email",
      link: "mailto:sagarchouhan7609@gmail.com",
      text: "sagarchouhan7609@gmail.com",
    },
    {
      icon: <FaGithub className="text-blue-400 text-2xl mr-3" />,
      label: "GitHub",
      link: "https://github.com/sagar1chauhan",
      text: "github.com/sagar1chauhan",
    },
    {
      icon: <FaLinkedin className="text-blue-400 text-2xl mr-3" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/sagar172/",
      text: "linkedin.com/in/sagar172",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 text-white flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold text-blue-400 mb-8">Contact</h2>
      <p className="text-lg text-gray-300 mb-10 text-center">
        Let’s connect for opportunities or collaborations!
      </p>

      <div className="space-y-6 w-full max-w-md">
        {contacts.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-start bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            {item.icon}
            <p className="text-lg">
              <span className="font-semibold">{item.label}:</span>{" "}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {item.text}
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
