"use client";
import AboutPage from "./Components/About";
import ContactPage from "./Components/Contact";
import { Button } from "@/components/ui/button";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 min-h-screen" id="home">
        <main className="container mx-auto py-20 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-left px-4">
            <h1 className="text-5xl font-bold text-white mb-6 text-center md:text-left">
              Welcome to <span className="text-cyan-400"> AFAQ UL ISLAM </span>{" "}
              Portfolio
            </h1>
            <p className="text-lg text-gray-300 mb-8 text-center md:text-left">
              I'm a passionate Frontend Developer creating modern, responsive
              web applications using the latest technologies.
            </p>
            <div>
              <Button variant="destructive">Download CV</Button>
            </div>
          </div>

          <div className="w-full md:w-1/3 mt-10 md:mt-0 flex justify-center md:ml-10 lg:ml-20">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiKZwhw_gm2y9gDbO77w-8w-kUMMNY2LaDw&s"
              alt="Developer at work"
              className="rounded-lg border-4 border-cyan-500 shadow-lg transition-transform duration-300 transform hover:scale-105 w-3/4 md:w-full" // Image styles remain unchanged
            />
          </div>
        </main>
      </div>

      <div id="about">
        <AboutPage />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
    </>
  );
};

export default HomePage;
