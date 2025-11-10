import React, { useState } from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile1.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  const [isRotated, setIsRotated] = useState(false);

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-900 text-white px-6 md:px-16"
    >
      {/* Left: Profile Picture */}
      <motion.div
        className="relative mb-10 md:mb-0 md:mr-16 flex justify-center"
        whileHover={{ scale: 1.05 }}
        animate={{ rotateY: isRotated ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onClick={() => setIsRotated(!isRotated)}
      >
        <motion.img
          src={profilePic}
          alt="Sagar Chouhan"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-blue-400 shadow-lg cursor-pointer select-none"
          whileHover={{ boxShadow: "0 0 25px rgba(59,130,246,0.8)" }}
        />
      </motion.div>

      {/* Right: Hero Text */}
  <motion.div whileHover={{ scale: 1.1 }}      
    className="text-center md:text-left max-w-xl"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-blue-400 mb-4">
          Hi, I’m <span className="text-white">Sagar Chouhan</span> 👋
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          A passionate <b>Full Stack Developer</b> skilled in React.js, Java, and Spring Boot.  
          I love turning ideas into functional, elegant web applications.
        </p>
    
  <Link
    to="/projects"
    className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300"
  >
    View My Projects 🚀
  </Link>
</motion.div>
    </section>
  );
};

export default Hero;
