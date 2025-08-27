import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import '../styles/Resources.css'

const Capabilities = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTechniqueSlide, setCurrentTechniqueSlide] = useState(0)

  // Laboratory techniques that can be performed
  const techniques = [
    { title: "Slow Strain Rate Tensile (SSRT)" },
    { title: "Accelerated Corrosion (CCT and CRH QFog and top bench AES chambers)" },
    { title: "Four Point Bend" },
    { title: "Constant Mechanical Load/Atmospheric Corrosion (Custom made)" },
    { title: "Cyclic polarization/potentiodynamic polarization" },
    { title: "Linear Polarization Resistance" },
    { title: "Electrochemical Impedance Spectroscopy" },
    { title: "Corrosion Morphology Characterization (developed at UTSA in collaboration with SwRI)" },
    { title: "Pitting resistance" },
    { title: "Multi-electrode array" },
    { title: "Barnacle cell (hydrogen concentration determination)" },
    { title: "Thermal Desorption Spectroscopy (hydrogen concentration, hydrogen diffusion, and hydrogen binding energy analysis)" },
    { title: "In-situ Raman Spectroscopy" },
    { title: "Computationally Informed Blister testing (coating adhesion)" },
    { title: "Conventional Adhesion Testing (pull-off and peel tests)" },
    { title: "Scanning Electrode Microscopy and Atomic Force Microscopy" },
    { title: "Electrical Resistance" },
    { title: "Mortar and Concrete Porosity"}
  ]

  const capabilities = [
    {
      name: "CRH 1100 Q-FOG Cyclic Corrosion Tester",
      description: "Q-FOG CRH cyclic corrosion chamber can perform traditional salt spray, Prohesion, and most cyclic automotive tests. It features fully-adjustable relative humidity and precise control over ramp times. Custom-made load frames are available to perform testing under constant load.",
      images: [
        "/equipment_1.png", // First image path
        "/equipment_1.png"  // Second image path (optional)
      ]
    },
    {
      name: "Capability Name 2", 
      description: "Description of this capability will go here. You can add detailed information about the equipment, techniques, and applications.",
      images: [
        "/equipment_1.png"  // Single image
      ]
    },
    {
      name: "Capability Name 3",
      description: "Description of this capability will go here. You can add detailed information about the equipment, techniques, and applications.", 
      images: [
        "/equipment_1.png",
        "/equipment_1.png"
      ]
    },
    {
      name: "Capability Name 4",
      description: "Description of this capability will go here. You can add detailed information about the equipment, techniques, and applications.",
      images: [
        "/equipment_1.png"
      ]
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % capabilities.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + capabilities.length) % capabilities.length)
  }

  // Techniques slideshow navigation (showing 3 at a time)
  const nextTechnique = () => {
    setCurrentTechniqueSlide((prev) => {
      const maxSlide = Math.ceil(techniques.length / 3) - 1
      return (prev + 1) % (maxSlide + 1)
    })
  }

  const prevTechnique = () => {
    setCurrentTechniqueSlide((prev) => {
      const maxSlide = Math.ceil(techniques.length / 3) - 1
      return (prev - 1 + maxSlide + 1) % (maxSlide + 1)
    })
  }

  // Get current set of 3 techniques to display
  const getCurrentTechniques = () => {
    const startIndex = currentTechniqueSlide * 3
    return techniques.slice(startIndex, startIndex + 3)
  }

  return (
    <div className="capabilities-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Capabilities</h1>
            <p>
              State-of-the-art facilities and advanced techniques for comprehensive 
              corrosion research and materials characterization.
            </p>
          </div>
        </div>
      </section>

      {/* Laboratory Techniques */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Laboratory Techniques</h2>
          <div className="techniques-slideshow">
            <div className="slideshow-container">
              <button 
                className="slide-btn prev-btn" 
                onClick={prevTechnique}
                aria-label="Previous techniques"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="slide-content">
                <div className="techniques-grid">
                  {getCurrentTechniques().map((technique, index) => (
                    <div key={index} className="technique-card">
                      <div className="technique-content">
                        <h3>{technique.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                className="slide-btn next-btn" 
                onClick={nextTechnique}
                aria-label="Next techniques"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="slide-indicators">
              {Array.from({ length: Math.ceil(techniques.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentTechniqueSlide ? 'active' : ''}`}
                  onClick={() => setCurrentTechniqueSlide(index)}
                  aria-label={`Go to technique set ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="slide-counter">
              <span>{currentTechniqueSlide + 1} / {Math.ceil(techniques.length / 3)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Capabilities Slideshow */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Research Equipment</h2>
          <div className="capabilities-slideshow">
            <div className="slideshow-container">
              <button 
                className="slide-btn prev-btn" 
                onClick={prevSlide}
                aria-label="Previous capability"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="slide-content">
                <div className="capability-slide">
                  <div className="capability-card">
                    <div className="capability-header">
                      <h2>{capabilities[currentSlide].name}</h2>
                    </div>
                    
                    <div className="capability-body">
                      <div className="capability-images">
                        {capabilities[currentSlide].images.map((image, index) => (
                          <div key={index} className="image-container">
                            <img 
                              src={image} 
                              alt={`${capabilities[currentSlide].name} ${index + 1}`}
                              className="capability-image"
                            />
                          </div>
                        ))}
                      </div>
                      
                      <div className="capability-description">
                        <p>{capabilities[currentSlide].description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button 
                className="slide-btn next-btn" 
                onClick={nextSlide}
                aria-label="Next capability"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="slide-indicators">
              {capabilities.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to capability ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="slide-counter">
              <span>{currentSlide + 1} / {capabilities.length}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Capabilities
