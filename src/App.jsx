import React from "react";
import Searchtabs from "./components/Searchtabs";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="bg-black min-h-full  ">
      <Hero />
      <Searchtabs />
    </div>
  );
};

export default App;
