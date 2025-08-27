import { MapPin, Target, Award, Users, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import '../styles/About.css'

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % researchAreas.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + researchAreas.length) % researchAreas.length)
  }

  const researchAreas = [
    {
      title: 'Atmospheric Corrosion',
    
    },
    {
      title: 'Rebar Corrosion',
    },
    {
      title: 'Microbiologically Influenced Corrosion',
    },
    {
      title: 'Stress Corrosion Cracking',
    },
    {
      title: 'Hydrogen Embrittlement',
    },
    {
      title: 'Corrosion Fatigue',
    },
    {
      title: 'Green Corrosion Inhibition',
    },
    {
      title: 'Coating’s Durability',
    },
    {
      title: 'Coating Adhesion',
    },
    {
      title: 'Accelerated Corrosion Testing Development',
    }
  ]

 

  const capabilities = [
    'ACCELERATED TESTING CHAMBERS',
    'ELECTROCHEMICAL TESTING EQUIPMENT ',
    'PHYSICO-MECHANICAL PROPERTIES OF CONCRETE/MORTAR',
    'CORROSION MORPHOLOGY CHARACTERIZATION INSTRUMENTS',
    'COATING PREPARATION SYSTEMS',
    'COATING TESTING',
    'SPECTROMETRY SYSTEMS AND ACCESSORIES',
    'MECHANICAL LOAD FRAMES'
  ]

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>About Our Laboratory</h1>
            <p>
              Advancing Corrosion Science and Engineering to increase material durability, infrastructure sustainability, and safety
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="section">
        <div className="container">
          <div className="about-content-grid">
            <div className="main-content">
              <h2>Welcome to the UTSA Corrosion Research Laboratory</h2>
              <div className="content-image">
                <img src="/equipment_1.png" alt="Laboratory Overview" />
              </div>
              
              <p>
                The UTSA Corrosion Research Laboratory was founded on august 2016 by Prof. Brendy C. Rincon Troconis in the 
                Department of Mechanical Engineering (now Department of Mechanical, Aerospace, and Industrial Engineering) 
                at The University of Texas at San Antonio (UT San Antonio). We study how materials degrade in demanding 
                environments to make infrastructure more sustainable and resilient. Our work spans industries such as energy, 
                aerospace, transportation, automotive, oil and gas, and nuclear. With expertise in atmospheric, localized, galvanic, 
                rebar, and microbiologically influenced corrosion, as well as coatings and environmentally assisted cracking, 
                we identify and characterize degradation mechanisms, while also developing innovative solutions to control corrosion and extend 
                the life of critical systems.
              </p>

              <p>
                Our main research laboratory is located in the BioScience and Engineering building (BSE 0.216A) at UT San Antonio's main campus. 
                We welcome new project ideas, collaborators, and student volunteers, 
                so please don't hesitate to contact us.
              </p>

              <h3>Our Mission</h3>
              <p>
                We are dedicated to advancing the understanding of material degradation and developing innovative solutions 
                for corrosion control across industries. Through a multidisciplinary approach—integrating materials science, 
                electrochemistry, chemistry, and solid mechanics—we work with collaborators to address real-world challenges in infrastructure 
                sustainability and safety, supporting the development of safer and longer-lasting systems.
              </p>
            </div>

            <div className="sidebar">
              <div className="info-card">
                <div className="info-header">
                  <MapPin size={24} />
                  <h3>Location</h3>
                </div>
                <p>BioScience and Engineering Building</p>
                <p>Room BSE 0.216A</p>
                <p>UTSA Main Campus</p>
                <p>San Antonio, Texas</p>
              </div>

              <div className="info-card">
                <h3>Quick Facts</h3>
                <ul>
                  <li>Founded: 2016</li>
                  <li>Department: Mechanical, Aerospace, and Industrial Engineering</li>
                  <li>Research Areas: tbd</li>
                  <li>Active Projects: tbd</li>
                  <li>Graduate Students: tbd</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Capabilities */}
      <section className="section">
        <div className="container">
          <div className="capabilities-section">
            <div className="capabilities-content">
              <h2>Research Capabilities</h2>
              <p>
                Our laboratory is equipped with state-of-the-art instrumentation and facilities
                for comprehensive corrosion research. We offer electrochemical, mechanical,
                spectroscopy, and microstructural testing capabilities for a wide range of
                corrosion-related topics.
              </p>
              
              <div className="capabilities-grid">
                {capabilities.map((capability, index) => (
                  <div key={index} className="capability-item">
                    <div className="capability-bullet"></div>
                    <span>{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center mb-4">Research Areas</h2>
          
          <div className="research-slideshow">
            <div className="slideshow-container">
              <button 
                className="slide-btn prev-btn" 
                onClick={prevSlide}
                aria-label="Previous research area"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="slide-content">
                <div className="research-slide">
                  <div className="research-card-large">
                    <h3>{researchAreas[currentSlide].title}</h3>
                    <p>{researchAreas[currentSlide].description}</p>
                  </div>
                </div>
              </div>
              
              <button 
                className="slide-btn next-btn" 
                onClick={nextSlide}
                aria-label="Next research area"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="slide-indicators">
              {researchAreas.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
