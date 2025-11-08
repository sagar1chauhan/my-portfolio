import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import "./index.css";

function App() {
  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
    
      <Navbar />
      <Hero />
   
    </div>
  );
}

export default App;
