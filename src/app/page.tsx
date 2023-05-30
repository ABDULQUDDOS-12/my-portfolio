import Header from "../../Components/Header";
import Hero from "../../Components/Hero";
import React from "react";
export default function Home() {
  return (
   <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
  
    <head>
      <title>
        My Portfolio
      </title>
    </head>
    <Header/>
    {/* Header */}
     <section id="hero" className="snap-center">
      <Hero/>
     </section>
    {/* Hero */}

    {/* About */}

    {/* Experience */}

    {/* Skills */}

    {/* projects */}

    {/* Contact me */}
   </div>
  )
}
