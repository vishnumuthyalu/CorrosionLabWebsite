import { Atom, Wrench, Building, Heart, Zap, Microscope } from 'lucide-react'
import '../styles/Research.css'

const Research = () => {
  const researchAreas = [
    {
      icon: <Zap size={48} />,
      title: 'Environmentally Assisted Cracking',
      description: 'Investigation of stress corrosion cracking mechanisms in various environments and material systems, with focus on nuclear and industrial applications.',
      applications: ['Nuclear Power Plants', 'Petrochemical Industries', 'Aerospace Components'],
      techniques: ['Electrochemical Testing', 'Mechanical Loading', 'Microscopy Analysis']
    },
    {
      icon: <Atom size={48} />,
      title: 'Atmospheric Corrosion',
      description: 'Study of material degradation in outdoor environments, including the effects of climate, pollutants, and protective coatings on corrosion rates.',
      applications: ['Infrastructure', 'Automotive Industry', 'Marine Environments'],
      techniques: ['Environmental Exposure Testing', 'Surface Analysis', 'Coating Evaluation']
    },
    {
      icon: <Microscope size={48} />,
      title: 'Localized Corrosion',
      description: 'Research on pitting, crevice corrosion, and galvanic corrosion mechanisms, with emphasis on predictive modeling and prevention strategies.',
      applications: ['Oil & Gas Pipelines', 'Marine Structures', 'Chemical Processing'],
      techniques: ['Electrochemical Impedance', 'Scanning Probe Microscopy', 'Finite Element Modeling']
    },
    {
      icon: <Building size={48} />,
      title: 'Corrosion in Reinforced Concrete',
      description: 'Analysis of rebar corrosion in concrete structures, development of inhibitor systems, and evaluation of repair and protection methods.',
      applications: ['Bridges', 'Buildings', 'Infrastructure'],
      techniques: ['Half-cell Potential', 'Concrete Resistivity', 'Inhibitor Testing']
    },
    {
      icon: <Heart size={48} />,
      title: 'Stent Corrosion Fatigue',
      description: 'Research on biomedical applications and corrosion-fatigue interactions in medical devices, focusing on material biocompatibility.',
      applications: ['Cardiovascular Stents', 'Orthopedic Implants', 'Surgical Instruments'],
      techniques: ['Biocompatibility Testing', 'Fatigue Analysis', 'Surface Characterization']
    },
    {
      icon: <Wrench size={48} />,
      title: 'Oil and Gas Industry Applications',
      description: 'Studying material degradation in harsh petroleum environments and developing corrosion control strategies for energy infrastructure.',
      applications: ['Drilling Equipment', 'Pipelines', 'Offshore Platforms'],
      techniques: ['H2S Corrosion Testing', 'High-Pressure Environments', 'Inhibitor Development']
    }
  ]

  const currentProjects = [
    {
      title: 'Effects of Triazine-Based H2S Scavengers Byproducts on the Film Composition and Cracking of Carbon Steel in Oilfield Applications',
      description: 'Investigation of how H2S scavenger byproducts affect the protective film formation and cracking susceptibility of carbon steel in oil and gas environments.',
      funding: 'Industry Partnership',
      status: 'Active'
    },
    {
      title: 'Three Dimensional Fracture Mechanics Capability for Structures Operating in High Temperature Thermal Environments',
      description: 'Development of advanced fracture mechanics models for high-temperature applications in nuclear and aerospace industries.',
      funding: 'DOE',
      status: 'Active'
    },
    {
      title: 'Probability Risk Assessment for Stress Corrosion Cracking in Nuclear Facilities',
      description: 'Comprehensive risk assessment methodology for predicting and preventing stress corrosion cracking in nuclear power plant components.',
      funding: 'US NRC',
      status: 'Active'
    },
    {
      title: 'Effect of Passive Film Composition on the Electrochemical Behavior and Cracking of Corrosion Resistant Alloys Utilizing Surface Enhanced Raman Spectroscopy',
      description: 'Advanced spectroscopic analysis of passive films on corrosion-resistant alloys to understand their protective mechanisms.',
      funding: 'ONR',
      status: 'Active'
    }
  ]

  const capabilities = [
    {
      category: 'Electrochemical Testing',
      equipment: [
        'Potentiostat/Galvanostat Systems',
        'Electrochemical Impedance Spectroscopy (EIS)',
        'Cyclic Voltammetry',
        'Linear Polarization Resistance',
        'Tafel Analysis'
      ]
    },
    {
      category: 'Mechanical Testing',
      equipment: [
        'Stress Corrosion Cracking Test Rigs',
        'Fatigue Testing Machines',
        'Tensile Testing Equipment',
        'Hardness Testing',
        'Impact Testing'
      ]
    },
    {
      category: 'Spectroscopy & Analysis',
      equipment: [
        'Surface Enhanced Raman Spectroscopy (SERS)',
        'X-ray Photoelectron Spectroscopy (XPS)',
        'Fourier Transform Infrared (FTIR)',
        'Energy Dispersive X-ray Spectroscopy (EDS)',
        'Auger Electron Spectroscopy'
      ]
    },
    {
      category: 'Microstructural Characterization',
      equipment: [
        'Scanning Electron Microscopy (SEM)',
        'Transmission Electron Microscopy (TEM)',
        'Optical Microscopy',
        'Atomic Force Microscopy (AFM)',
        'Confocal Microscopy'
      ]
    }
  ]

  return (
    <div className="research-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Research</h1>
            <p>
              Advancing the understanding of material degradation mechanisms and developing 
              innovative solutions for corrosion control across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Research Goal */}
      <section className="section">
        <div className="container">
          <div className="goal-section">
            <h2>Corrosion Laboratory Goal</h2>
            <p className="goal-statement">
              Identify and characterize the scientific mechanisms specific to our principal
              areas of research. We are interested in studying the degradation of materials for different
              applications including oil and gas industry, nuclear facilities, reinforced concrete,
              stent corrosion fatigue and other forms of corrosion.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Research Areas</h2>
          <div className="research-areas-grid">
            {researchAreas.map((area, index) => (
              <div key={index} className="research-area-card">
                <div className="area-icon">{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                
                <div className="area-details">
                  <div className="detail-section">
                    <h4>Applications</h4>
                    <ul>
                      {area.applications.map((app, idx) => (
                        <li key={idx}>{app}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Key Techniques</h4>
                    <ul>
                      {area.techniques.map((tech, idx) => (
                        <li key={idx}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Current Research Projects</h2>
          <div className="projects-grid">
            {currentProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <span className={`status-badge ${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                  <span className="funding-badge">{project.funding}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Capabilities */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Research Capabilities</h2>
          <p className="capabilities-intro">
            Our laboratory is equipped with state-of-the-art instrumentation and facilities
            for comprehensive corrosion research. We offer electrochemical, mechanical,
            spectroscopy, and microstructural testing capabilities for a wide range of
            corrosion-related topics.
          </p>
          
          <div className="capabilities-grid">
            {capabilities.map((capability, index) => (
              <div key={index} className="capability-card">
                <h3>{capability.category}</h3>
                <ul>
                  {capability.equipment.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Applications */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Research Applications</h2>
          <div className="applications-grid">
            <div className="application-item">
              <h3>Stress Corrosion Cracking</h3>
              <p>Advanced testing and analysis of environmentally assisted cracking in critical infrastructure components.</p>
            </div>
            <div className="application-item">
              <h3>Atmospheric Corrosion</h3>
              <p>Long-term exposure studies and predictive modeling for material performance in outdoor environments.</p>
            </div>
            <div className="application-item">
              <h3>Passivation</h3>
              <p>Investigation of passive film formation and stability on corrosion-resistant alloys.</p>
            </div>
            <div className="application-item">
              <h3>Coating Adhesion</h3>
              <p>Durability assessment and performance evaluation of protective coating systems.</p>
            </div>
            <div className="application-item">
              <h3>Pitting Corrosion</h3>
              <p>Mechanistic studies and prevention strategies for localized corrosion attack.</p>
            </div>
            <div className="application-item">
              <h3>Galvanic Corrosion</h3>
              <p>Multi-material compatibility studies and galvanic couple performance analysis.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Research
