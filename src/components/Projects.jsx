import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Sewzella",
      link: "https://sewzella.com",
      desc: [
        "Developed responsive React.js interfaces.",
        "Integrated authentication, appointment booking, order management, and profile APIs.",
        "Improved UI responsiveness and overall user experience."
      ]
    },
    {
      name: "Closh",
      link: "https://closh.in",
      desc: [
        "Developed e-commerce frontend features including product listing, cart, authentication, invoices, and order management.",
        "Implemented admin panel enhancements and resolved production issues."
      ]
    },
    {
      name: "Udaan Bill Book",
      link: "https://udaanbillbook.com",
      desc: [
        "Developed responsive billing and inventory management screens.",
        "Integrated backend APIs for invoices, GST, customer, and product management."
      ]
    },
    {
      name: "Styling With Muskan",
      link: "https://stylingwithmuskan.in",
      desc: [
        "Built responsive fashion website interfaces.",
        "Integrated dynamic content using REST APIs.",
        "Improved mobile responsiveness and cross-browser compatibility."
      ]
    },
    {
      name: "Health Hub",
      desc: [
        "AI-powered healthcare platform that diagnoses diseases based on symptoms and connects users with trusted doctors."
      ]
    },
    {
      name: "Edu Task Flow",
      desc: [
        "E-learning platform that tracks course progress, helps collaboration among students, and shows completion status."
      ]
    },
    {
      name: "WorldAltos",
      desc: [
        "React app to explore global country data using REST API with dark/light mode and search features."
      ],
      link: "https://worldatlos.netlify.app"
    },
    {
      name: "E-Commerce Website",
      desc: [
        "Responsive shopping website built with HTML, CSS, and JavaScript — clean UI and interactive cart functionality."
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">Projects</h2>
        <p className="text-gray-600 mb-8 font-medium">React.js Developer at Appzzeto (6 Months Experience)</p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {projects.map((p) => (
            <div key={p.name} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg border border-blue-100 flex flex-col">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">{p.name}</h3>
              <ul className="list-disc list-outside ml-4 text-gray-600 space-y-1 flex-grow text-sm mb-4">
                {p.desc.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-medium hover:underline mt-auto inline-block">
                  View Live &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
