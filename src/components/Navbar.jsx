import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 bg-gray-900 text-white fixed top-0 w-full shadow-md">
    <h1 className="text-xl font-bold text-blue-400">Sagar Chouhan</h1>
    <ul className="flex gap-6">
      <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
      <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
      <li><Link to="/skills" className="hover:text-blue-400">Skills</Link></li>
      <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
      <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
