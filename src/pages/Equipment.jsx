import { useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import '../styles/Equipment.css'

const Equipment = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()

  const capabilities = [
    {
      name: "CRH 1100 Q-FOG Cyclic Corrosion Tester",
      description: "Q-FOG CRH cyclic corrosion chamber can perform traditional salt spray, Prohesion, and most cyclic automotive tests. It features fully-adjustable relative humidity and precise control over ramp times. Custom-made load frames are available to perform testing under constant load.",
      images: [
        "/equipment_pics/crh1101.jpg",
        "/equipment_pics/crh1100_2.png"
      ]
    },
    {
      name: "Associated Environmental Chamber", 
      description: "Temperature & Humidity Environmental benchtop test chamber LHE 1.5 series",
      images: [
        "/equipment_pics/associated_env_chamber.png"
      ]
    },
    {
      name: "Single Channel Potentiostats/Galvanostats",
      description: "Gamry Potentiostats/Galvanostats (Reference 600+, Interface 1010, Interface 1000). Research grade potentiostats are available to perform electrochemical techniques such as, potentiodynamic polarization, cyclic polarization, cyclic voltammetry, and electrochemical impedance spectroscopy among others. In addition, different electrochemical cells are available for testing in different environments ", 
      images: [
        "/equipment_pics/single_channel_1.jpg",
        "/equipment_pics/single_channel_2.jpg",
        "/equipment_pics/single_channel_3.jpg",
        "/equipment_pics/single_channel_4.jpg"
      ]
    },
    {
      name: "Multichannel Microelectrode Array",
      description: "The Scribner Associates Model 900/910 Multichannel Microelectrode Analyzer (MMA) is designed for use with microelectrode arrays with up to 100 electrodes. Applications include corrosion science, inhibitor and coating performance studies; current distribution and electrode interaction effects; as well as combinatorial electrochemistry and high-throughput materials evaluation. Experiments include potentiostatic, voltage scanning (e.g., CV), step-stair, as well as electrochemical impedance spectroscopy. The instrument is arranged in 10 groups of 10 channels each. Each working electrode channel is connected to a ZRA for inter- and intra-electrode current measurement",
      images: [
        "/equipment_pics/multichannel_micro_array.png"
      ]
    },
    {
      name: "Droplet cell for Electrochemical Testing under Controlled Atmospheric Environment",
      description: "It consists in a three-electrode electrochemical cell (Figure 5). A plastic syringe with luer lock was used for the combined electrode (reference and counter electrode). At the end of the syringe pre pulled glass pipette of 5 µm with a silanized tip was inserted through the luer lock. Both, the syringe and glass pipette are filled with 4M KCl. The tip of the silanized micropipette is filled with a gel consisting of 2 wt% agar dissolved in saturated KCl solution. An Ag/AgCl electrode is used as reference electrode and a Pt wire as counter electrode. The RH is controlled via glycerin solution while the temperature is controlled using a heat tape and controller.",
      images: [
        "/equipment_pics/droplet_cell_1.jpg",
        "/equipment_pics/droplet_cell_2.jpg",
        "/equipment_pics/droplet_cell_3.jpg"
      ]
    },
    {
      name: "Scanning Kelvin Probe Force Microscopy and Scanning Electrochemical Microscopy",
      description: "Modules for Scanning Kelvin Probe Force Microscopy (SKPFM) and Scanning Electrochemical Microscopy (SECM) are currently available in a Bruker ICON Atomic Force Microscope ",
      images: [
        "/equipment_pics/scanning_kelvin_1.jpg",
        "/equipment_pics/scanning_kelvin_2.jpg"
      ]
    },
    {
      name: "PHYSICO-MECHANICAL PROPERTIES OF CONCRETE/MORTAR",
      description: "To characterize the physical-mechanical properties of mortar and concrete specimens, the compressive strength, electrical resistivity, and capillary porosity can be characterized in the UTSA Corrosion Laboratory",
      images: [
        "/equipment_pics/concrete_mortar_1.png",
        "/equipment_pics/concrete_mortar_2.png",
        "/equipment_pics/concrete_mortar_3.png"
      ]
    },
    {
      name: "Contour GT-K 3D Optical Profilemeter",
      description: "The ContourGT-K 3D Optical Microscope (Figure 8) versatile bench-top optical surface-profiling systems that can measure a wide variety of surfaces and samples, from optical-quality glass to automotive parts.It measures surface topography with high accuracy (1 nm - 10mm).The ContourGT-K OMM supports Vertical Scanning Interferometry (VSI) and Phase-Shifting Interferometry (PSI) measurements",
      images: [
        "/equipment_pics/contour_gtk.jpg"
      ]
    },
    {
      name: "Olympus Microscope BX53",
      description: "The LED illuminator for the BX53 is equivalent to or better than a 100 W halogen lamp, delivering brightness that's appropriate for teaching or contrast methods. The BX53 microscope (Figure 9) can be customized for different observation methods, such as phase contrast and fluorescence, with modular components. A phyton algorithm was developed in collaboration with SwRI for the identification and characterization of corrosion features in images.",
      images: [
        "/equipment_pics/bx53_1.jpg",
        "/equipment_pics/bx53_2.jpg"
      ]
    },
    {
      name: "COATING PREPARATION SYSTEMS",
      description: "Different systems are available for the synthesis of coatings ",
      images: [
        "/equipment_pics/coating_prep.jpg"
      ]
    },
    {
      name: "Coating Application via Anodizing and Electrodeposition ",
      description: "Anodizing and Electrodeposition systems for coating application.",
      images: [
        "/equipment_pics/coating_application.jpg"
      ]
    },
    {
      name: "Blister Test (BT) System with Digital Image Correlation (DIC)",
      description: "The syringe pump system pressurizes the coupon, resulting in the formation of a blister. Throughout this process, the DIC system captures blister images.",
      images: [
        "/equipment_pics/blister_test.png"
      ]
    },
    {
      name: "Pull-off Adhesion Tester ",
      description: "",
      images: [
        "/equipment_pics/adhesion_tester_1.png",
        "/equipment_pics/adhesion_tester_2.jpg"
      ]
    },
    {
      name: "Engraver IS400",
      description: "Engraver used to create controlled depth and width incisions into coatings to test coating damage effects.",
      images: [
        "/equipment_pics/engraver_is400.jpg"
      ]
    },
    {
      name: "Thermal Desorption Spectrometer TDS 1000 SYSTEM",
      description: "This is a fully integrated surface science system tool (Figure 15) that enables the researcher to obtain quantitative information on chemical species which desorb from a sample when heated.  Typical temperature ranges are room temperature to 900C.   Mass range typically 1-200 AMU. The key element is a Thermal Desorption Spectroscopy (TDS) probe that detects the desorbing mass signal from the sample and uses a specially shielded mass spectrometer and control software to obtain high sensitivity data of mass signal versus sample temperature. ",
      images: [
        "/equipment_pics/thermal_desort_spectrometer_tds_1000.jpg"
      ]
    },
    {
      name: "Raman Probe",
      description: "The RFP-540 Hellma Axiom Analytical Raman probe is a process immersion probe that has been designed to provide a high level of reliable service under a wide range of conditions. The wetted materials of the probe are: probe body - Hastelloy C-276, windows - sapphire, seal - Waspaloy and seal coating - gold. Illuminating light of 785 nm from a Tornado Hyperflux PRO plus 785 spectral system is conducted through an RFP-540 Hellma Axiom Analytical Raman probe by a 105 μm excitation fiber-optic cable. The laser beam diverged from the end of the fiber is collected and collimated by means of a 3 mm lens and directed through the bandpass filter to the input aperture of a rhomboid prism, which displaces the laser beam along the probe axis. Once the laser beam reaches the end of the probe, it is directed by the objective lens through a sapphire window onto the sample at 5mm of working distance from the outer surface of the window. The scattered Raman signal coming off from the sample is collected by the objective lens and transmitted along the probe axis to a long pass filter where it is finally collected by means of a lens and directed on a 300 μm collection fiber to the spectrometer.",
      images: [
        "/equipment_pics/in_situ_rfp.jpg"
      ]
    },
    {
      name: "Micro-selective In-situ Surface Enhanced Raman Spectroscopy",
      description: "Renishaw Raman System with Microscope. A micro-capillar electrochemical cell is also available to be used with this Raman system.",
      images: [
        "/equipment_pics/raman_system.jpg"
      ]
    },
    {
      name: "Mechanical Load Frames",
      description: "Electrical and servo-hydraulic frames are available for testing related to Environmentally Assisted Cracking and Mechanical Strength of mortar specimens, including 50 kN (11kip) MTS Series 370 Servo hydraulic Load Frame, Instron 5985 (250kN), and servo-hydraulic loading frame MTS 809 axial/torsion (22 kip). In addition, a DCPD system is also available for crack growth rate measurements",
      images: [
        "/equipment_pics/mech_load_framer_1.jpg",
        "/equipment_pics/mech_load_framer.jpg"
      ]
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % capabilities.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + capabilities.length) % capabilities.length)
  }

  const goBack = () => {
    navigate('/capabilities')
  }

  return (
    <div className="equipment-page">
      {/* Header with Back Button */}
      <section className="equipment-header">
        <div className="container">
          <button onClick={goBack} className="back-button">
            <ArrowLeft size={20} />
            Back to Capabilities
          </button>
          <div className="equipment-hero">
            <h1>Research Equipment</h1>
            <p>
              Explore our state-of-the-art laboratory equipment and advanced instrumentation 
              for comprehensive corrosion research and materials characterization.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Slideshow */}
      <section className="equipment-content">
        <div className="equipment-slideshow">
          <div className="slideshow-container">
            <button 
              className="slide-btn prev-btn" 
              onClick={prevSlide}
              aria-label="Previous equipment"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="equipment-item">
              <div className="equipment-card">
                <div className="equipment-header">
                  <h2>{capabilities[currentSlide].name}</h2>
                </div>
                
                <div className="equipment-body">
                  <div className="equipment-content-wrapper">
                    <div className="equipment-images-section">
                      <div className="equipment-images">
                        {capabilities[currentSlide].images.map((image, imgIndex) => (
                          <div key={imgIndex} className="image-wrapper">
                            <img 
                              src={image} 
                              alt={`${capabilities[currentSlide].name} ${imgIndex + 1}`}
                              className="equipment-image"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="equipment-description-section">
                      <div className="equipment-description">
                        <p>{capabilities[currentSlide].description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              className="slide-btn next-btn" 
              onClick={nextSlide}
              aria-label="Next equipment"
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
                aria-label={`Go to equipment ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="slide-counter">
            <span>{currentSlide + 1} / {capabilities.length}</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Equipment
