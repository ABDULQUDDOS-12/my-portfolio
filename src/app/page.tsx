import Header from "../../Components/Header";
import Hero from "../../Components/Hero";
import React from "react";
import About from "../../Components/About";
// import WorkExperience from "../../Components/WorkExperience";
import ContactMe from "../../Components/ContactMe";
import Skills from "../../Components/Skills";
import Projects from "../../Components/Projects";
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
     <section id="hero" className="snap-start">
      <Hero/>
     </section>
    {/* Hero */}

    {/* About */}
<section id="about" className="snap-center">
  <About/>
</section>
    {/* Experience */}
{/* <section id="experience" className="snap-center">
<WorkExperience/>
</section> */}
    {/* Skills */}
<section id="skills" className="snap-start">
<Skills/>
</section>
    {/* projects */}
<section id="projects" className="snap-start">
  <Projects/>
</section>
    {/* Contact me */}
   <section id="contact" >
    <ContactMe/>
   </section>
   </div>
  )
}
