import React from "react";
import Projects from "@/components/Projects"; // Import Projects component

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <Projects /> {/* Displaying Projects Section */}
    </div>
  );
};

export default Home;
