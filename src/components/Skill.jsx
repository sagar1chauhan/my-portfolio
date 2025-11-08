import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "React.js",
    "Java",
    "Spring Boot",
    "HTML",
    "CSS",
    "JavaScript",
    "Git & GitHub",
    "VS Code",
    "Computer Networks",
    "DBMS",
    "Operating System",
    "DSA",
  ];

  // Animation settings
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, when: "beforeChildren", staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-blue-400 mb-8">Technical Skills</h2>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#3B82F6", // Tailwind's blue-500
                color: "#ffffff",
                boxShadow: "0 0 20px rgba(59,130,246,0.7)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="px-5 py-2 bg-blue-500/20 border border-blue-400 rounded-lg text-lg font-medium cursor-pointer hover:shadow-lg hover:border-blue-300 transition-all duration-200"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
