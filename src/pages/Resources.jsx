import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import '../styles/Resources.css'

const Resources = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const testingTechniques = [
    'Slow Strain Rate Tensile (SSRT) testing.',
    'Four Point Bend test.',
    'Cyclic polarization/potentiodynamic polarization.',
    'Electrochemical Impedance Spectroscopy.',
    'Pitting resistance.',
    'Multi-electrode array testing.',
    'Barnacle cell (hydrogen concentration determination).',
    'Thermal Desorption Spectroscopy (hydrogen concentration, hydrogen diffusion, and hydrogen binding energy analysis)',
    'In-situ Raman Spectroscopy.',
    'Blister test (coating adhesion calculation).',
    'Conventional Adhesion Testing (pull-off and peel testing)',
    'Potentiostatic and galvanostatic oxide growth.',
    'Potential Mapping using Scanning Electrode Microscopy and Atomic Force Microscopy.',
    'Microstructural characterization utilizing SEM/EDS.'
  ]

  const equipmentList = [
    {
      image: '/in-situ-pic.jpg',
      name: 'In-situ Surface Enhanced Raman Spectroscopy System',
      description: 'Hyperflux PRO Plus 785 Tornado Spectral with RFP-540H-785 Hastelloy C276 raman probe. This technique is utilized to characterized surface films in-situ.'
    },
    {
      image: '/q-fog-pic.jpg',
      name: 'Q-Fog Cyclic Corrosion Tester',
      description: 'Model CRH/1100-HSC. This chamber is used to perform accelerated corrosion testing following standards such as ASTM B117, GMW 14872, and others.'
    },
    {
      image: '/gamry-potential-pic.jpg',
      name: 'Gamry Potentiostats/Galvanostats',
      description: '(Reference 600+, Interface 1010, Interface 1000). Research grade potentiostats are available to perform electrochemical techniques such as, potentiodynamic polarization, cyclic polarization, cyclic voltammetry, and electrochemical impedance spectroscopy among others.'
    },
    {
      image: '/infrared-camera.png',
      name: 'Infrared Camera',
      description: 'This camera is utilized to spatially resolve the temperature readings on specimens.'
    },
    {
      image: '/servo-electric-pic.jpg',
      name: 'Servo-electric loading frame Instron 5985 (250kN)',
      description: 'This frame can be used for fatigue and tensile experiments, including slow strain rate tensile testing.'
    },
    {
      image: '/servo-hydraulic-pic.jpg',
      name: 'Servo-hydraulic loading frame MTS 809 axial/torsion (22 kip)',
      description: 'This frame is mainly used for high fidelity fracture mechanics experiments, including fatigue, corrosion fatigue and stress corrosion cracking.'
    },
    {
      image: '/scribner-pic.png',
      name: 'Scribner Multichannel Microelectrode Potentiostat 910 MMA',
      description: 'With 100 channel capacity and electrochemical impedance spectroscopy, this potentiostat can be used to perform electrochemical techniques and obtain spatial resolution of the electrochemical behavior of materials.'
    },
    {
      image: '/lk-technologies.jpg',
      name: 'LK TECHNOLOGIES TDS1000',
      description: 'This Thermal Desorption Spectrometer System is utilized in hydrogen embrittlement related studies for the calculation of hydrogen concentration, diffusivity and binding energy.'
    },
    {
      image: '/spot-heater.jpg',
      name: 'Model 4085 Infrared Spot Heater',
      description: 'Spot heater SpotIR 4085. It contains a single 750W halogen bulb and a reflector for focusing the thermal hot spot onto targets of 0.5 inch.'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % equipmentList.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + equipmentList.length) % equipmentList.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        prevSlide()
      } else if (event.key === 'ArrowRight') {
        nextSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="resources-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Resources</h1>
          </div>
        </div>
      </section>

      {/* Research Capabilities */}
      <section className="section">
        <div className="container">
          <div className="overview-content">
            <h2>Research Capabilities</h2>
            <p>
              Electrochemical/Mechanical/Spectroscopy/Microstructural testing for a wide range
              of corrosion related topics, such as Stress Corrosion Cracking, Atmospheric
              Corrosion, Passivation, Coating Adhesion, Pitting, and others.
            </p>
          </div>
        </div>
      </section>

      {/* Testing Techniques */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">These techniques include,</h2>
          <div className="techniques-list">
            <ul>
              {testingTechniques.map((technique, index) => (
                <li key={index}>{technique}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Research Equipment */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Research Equipment:</h2>
          <div className="equipment-slider">
            <div className="slider-container">
              <button 
                className="slider-btn prev-btn" 
                onClick={prevSlide}
                aria-label="Previous equipment"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="slider-content">
                <div className="equipment-slide">
                  <div className="equipment-image">
                    <img 
                      src={equipmentList[currentSlide].image} 
                      alt={equipmentList[currentSlide].name} 
                    />
                  </div>
                  <div className="equipment-info">
                    <h3>{equipmentList[currentSlide].name}</h3>
                    <p>{equipmentList[currentSlide].description}</p>
                  </div>
                </div>
              </div>
              
              <button 
                className="slider-btn next-btn" 
                onClick={nextSlide}
                aria-label="Next equipment"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="slider-dots">
              {equipmentList.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to equipment ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="slider-counter">
              {currentSlide + 1} of {equipmentList.length}
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Goal */}
      <section className="section section-alt">
        <div className="container">
          <div className="goal-content">
            <h2>CORROSION LABORATORY GOAL:</h2>
            <p>
              Identify and characterize the scientific mechanisms specific to our principal
              areas of research
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources
