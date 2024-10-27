import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-900 h-screen flex items-center">
      {/* Dark background for full height and centering */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-10">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0">
         
          {/* Adjusted to have the image left */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiKZwhw_gm2y9gDbO77w-8w-kUMMNY2LaDw&s" // Your image URL
            alt="Developer at work"
            className="rounded-lg border-4 border-cyan-500 shadow-lg transition-transform duration-300 transform hover:scale-105 mx-auto w-4/5 md:w-3/4 lg:w-2/3" // Adjusted width for better responsiveness
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 text-left px-4">
          <h1 className="text-5xl font-bold mb-6 text-white">About Me</h1>
          <p className="text-lg text-gray-300 mb-8">
            I am a web developer passionate about creating interactive, modern
            websites with a focus on user experience and functionality.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            I love exploring new technologies and applying them in my projects
            to enhance user experience and functionality. My goal is to
            continuously improve my skills and create visually appealing and
            highly functional web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
