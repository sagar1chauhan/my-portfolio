import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Health Hub",
      desc: "AI-powered healthcare platform that diagnoses diseases based on symptoms and connects users with trusted doctors.",
    },
    {
      name: "Edu Task Flow",
      desc: "E-learning platform that tracks course progress, helps collaboration among students, and shows completion status.",
    },
    {
      name: "WorldAltos",
      desc: "React app to explore global country data using REST API with dark/light mode and search features.",
      link: "https://worldatlos.netlify.app"
    },
    {
      name: "E-Commerce Website",
      desc: "Responsive shopping website built with HTML, CSS, and JavaScript — clean UI and interactive cart functionality.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div key={p.name} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg border border-blue-100">
              <h3 className="text-2xl font-semibold text-blue-500 mb-2">{p.name}</h3>
              <p className="text-gray-600">{p.desc}</p>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline mt-2 inline-block">
                  View Live
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
