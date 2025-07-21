import { Microscope, Zap, Wrench, FlaskConical, Computer, BookOpen } from 'lucide-react'

const Resources = () => {
  const equipmentCategories = [
    {
      icon: <Zap size={32} />,
      title: 'Electrochemical Testing',
      description: 'Advanced electrochemical instrumentation for corrosion analysis',
      equipment: [
        'Potentiostat/Galvanostat Systems',
        'Electrochemical Impedance Spectroscopy (EIS)',
        'Cyclic Voltammetry Equipment',
        'Linear Polarization Resistance',
        'Tafel Analysis Systems',
        'Reference Electrodes (SCE, Ag/AgCl)',
        'Working Electrodes (Various Materials)',
        'Environmental Chambers'
      ]
    },
    {
      icon: <Wrench size={32} />,
      title: 'Mechanical Testing',
      description: 'Comprehensive mechanical testing for material characterization',
      equipment: [
        'Universal Testing Machines',
        'Stress Corrosion Cracking Test Rigs',
        'Fatigue Testing Equipment',
        'Tensile Testing Systems',
        'Hardness Testing (Vickers, Rockwell)',
        'Impact Testing Equipment',
        'Creep Testing Apparatus',
        'Environmental Loading Systems'
      ]
    },
    {
      icon: <FlaskConical size={32} />,
      title: 'Spectroscopy & Analysis',
      description: 'State-of-the-art analytical instrumentation',
      equipment: [
        'Surface Enhanced Raman Spectroscopy (SERS)',
        'X-ray Photoelectron Spectroscopy (XPS)',
        'Fourier Transform Infrared (FTIR)',
        'Energy Dispersive X-ray Spectroscopy (EDS)',
        'Auger Electron Spectroscopy',
        'UV-Vis Spectrophotometry',
        'Atomic Absorption Spectroscopy',
        'Ion Chromatography'
      ]
    },
    {
      icon: <Microscope size={32} />,
      title: 'Microstructural Characterization',
      description: 'Advanced microscopy and imaging capabilities',
      equipment: [
        'Scanning Electron Microscopy (SEM)',
        'Transmission Electron Microscopy (TEM)',
        'Optical Microscopy',
        'Atomic Force Microscopy (AFM)',
        'Confocal Microscopy',
        'Stereomicroscopy',
        'Digital Image Analysis',
        'Sample Preparation Equipment'
      ]
    }
  ]

  const testingCapabilities = [
    {
      category: 'Stress Corrosion Cracking',
      methods: [
        'Constant Load Testing (CLT)',
        'Slow Strain Rate Testing (SSRT)',
        'C-Ring Testing',
        'U-Bend Testing',
        'Fracture Mechanics Testing'
      ],
      applications: 'Nuclear, aerospace, and petrochemical industries'
    },
    {
      category: 'Atmospheric Corrosion',
      methods: [
        'Outdoor Exposure Testing',
        'Accelerated Weathering',
        'Salt Spray Testing',
        'Cyclic Corrosion Testing',
        'Environmental Monitoring'
      ],
      applications: 'Infrastructure, automotive, and marine environments'
    },
    {
      category: 'Passivation Studies',
      methods: [
        'Potentiodynamic Polarization',
        'Potentiostatic Testing',
        'Critical Pitting Temperature',
        'Passive Film Analysis',
        'Surface Characterization'
      ],
      applications: 'Stainless steels, titanium alloys, and specialty alloys'
    },
    {
      category: 'Coating Evaluation',
      methods: [
        'Adhesion Testing',
        'Pull-off Testing',
        'Cross-cut Testing',
        'Impedance Spectroscopy',
        'Salt Spray Exposure'
      ],
      applications: 'Protective coatings, paints, and surface treatments'
    },
    {
      category: 'Pitting Corrosion',
      methods: [
        'Potentiodynamic Testing',
        'Pit Depth Measurement',
        'Critical Pitting Potential',
        'Repassivation Studies',
        '3D Surface Analysis'
      ],
      applications: 'Marine, chemical processing, and oil & gas industries'
    },
    {
      category: 'Galvanic Corrosion',
      methods: [
        'Galvanic Couple Testing',
        'Mixed Potential Theory',
        'Current Distribution Analysis',
        'Compatibility Studies',
        'Environmental Effects'
      ],
      applications: 'Multi-material systems and dissimilar metal joints'
    }
  ]

  const softwareTools = [
    {
      name: 'Electrochemical Analysis Software',
      description: 'Advanced data analysis and interpretation tools for electrochemical measurements',
      capabilities: ['EIS Data Fitting', 'Polarization Curve Analysis', 'Kinetic Parameter Extraction']
    },
    {
      name: 'Finite Element Modeling',
      description: 'Computational modeling for corrosion prediction and stress analysis',
      capabilities: ['COMSOL Multiphysics', 'ANSYS', 'Custom Corrosion Models']
    },
    {
      name: 'Image Analysis Software',
      description: 'Quantitative analysis of microstructural features and corrosion damage',
      capabilities: ['ImageJ/FIJI', 'Microscopy Software', 'Statistical Analysis']
    },
    {
      name: 'Data Management Systems',
      description: 'Comprehensive data storage and analysis platforms',
      capabilities: ['Laboratory Information Management', 'Statistical Analysis', 'Report Generation']
    }
  ]

  const collaborations = [
    {
      organization: 'University of Virginia',
      department: 'Center for Electrochemical Science and Engineering',
      focus: 'Advanced electrochemical techniques and corrosion mechanisms'
    },
    {
      organization: 'The Ohio State University',
      department: 'Fontana Corrosion Center',
      focus: 'Fundamental corrosion science and engineering'
    },
    {
      organization: 'U.S. Naval Research Laboratory',
      department: 'Materials Science and Technology',
      focus: 'Aerospace applications and fatigue-corrosion interactions'
    },
    {
      organization: 'National Laboratories',
      department: 'Various DOE and DOD Facilities',
      focus: 'Nuclear and energy applications'
    }
  ]

  return (
    <div className="resources-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Research Resources</h1>
            <p>
              State-of-the-art facilities and equipment for comprehensive 
              corrosion research and materials characterization.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container">
          <div className="overview-content">
            <h2>Research Capabilities</h2>
            <p>
              Our laboratory is equipped with state-of-the-art instrumentation and facilities
              for comprehensive corrosion research. We offer electrochemical, mechanical,
              spectroscopy, and microstructural testing capabilities for a wide range of
              corrosion-related topics, including Stress Corrosion Cracking, Atmospheric
              Corrosion, Passivation, Coating Adhesion, Pitting, and many others.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Laboratory Equipment</h2>
          <div className="equipment-grid">
            {equipmentCategories.map((category, index) => (
              <div key={index} className="equipment-card">
                <div className="equipment-icon">{category.icon}</div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <div className="equipment-list">
                  <h4>Available Equipment</h4>
                  <ul>
                    {category.equipment.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Capabilities */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Testing Capabilities</h2>
          <div className="testing-grid">
            {testingCapabilities.map((capability, index) => (
              <div key={index} className="testing-card">
                <h3>{capability.category}</h3>
                <div className="methods-section">
                  <h4>Testing Methods</h4>
                  <ul>
                    {capability.methods.map((method, idx) => (
                      <li key={idx}>{method}</li>
                    ))}
                  </ul>
                </div>
                <div className="applications-section">
                  <h4>Applications</h4>
                  <p>{capability.applications}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software & Computational Tools */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Software & Computational Tools</h2>
          <div className="software-grid">
            {softwareTools.map((tool, index) => (
              <div key={index} className="software-card">
                <div className="software-icon">
                  <Computer size={32} />
                </div>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
                <div className="capabilities-list">
                  <h4>Capabilities</h4>
                  <ul>
                    {tool.capabilities.map((capability, idx) => (
                      <li key={idx}>{capability}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Collaborations */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Research Collaborations</h2>
          <p className="collaborations-intro">
            We maintain active collaborations with leading research institutions and 
            national laboratories to advance corrosion science and engineering.
          </p>
          <div className="collaborations-grid">
            {collaborations.map((collab, index) => (
              <div key={index} className="collaboration-card">
                <h3>{collab.organization}</h3>
                <h4>{collab.department}</h4>
                <p>{collab.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Laboratory Facilities</h2>
          <div className="facilities-content">
            <div className="facility-info">
              <h3>Location</h3>
              <p>
                <strong>BioScience and Engineering Building (BSE 0.216A)</strong><br />
                UTSA Main Campus<br />
                San Antonio, Texas
              </p>
              
              <h3>Specialized Areas</h3>
              <ul>
                <li>Electrochemical Testing Laboratory</li>
                <li>Mechanical Testing Facility</li>
                <li>Sample Preparation Area</li>
                <li>Environmental Exposure Chambers</li>
                <li>Data Analysis Workstations</li>
                <li>Chemical Storage and Handling</li>
              </ul>

              <h3>Safety Features</h3>
              <ul>
                <li>Fume Hoods and Ventilation Systems</li>
                <li>Emergency Shower and Eyewash Stations</li>
                <li>Chemical Safety Storage</li>
                <li>Fire Suppression Systems</li>
                <li>Personal Protective Equipment</li>
              </ul>
            </div>
            
            <div className="facility-image">
              <img src="/equipment_1.png" alt="Laboratory Facility" />
              <div className="image-caption">
                Main laboratory workspace with electrochemical testing equipment
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .overview-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .overview-content h2 {
          margin-bottom: 1.5rem;
          color: var(--primary-color);
        }

        .overview-content p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .section-title {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--primary-color);
        }

        .equipment-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .equipment-card {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-light);
          transition: var(--transition);
          border-top: 4px solid var(--primary-color);
        }

        .equipment-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-medium);
        }

        .equipment-icon {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .equipment-card h3 {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .equipment-card p {
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
        }

        .equipment-list h4 {
          color: var(--secondary-color);
          margin-bottom: 1rem;
          font-size: 1rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }

        .equipment-list ul {
          list-style: none;
          padding: 0;
        }

        .equipment-list li {
          padding: 0.5rem 0;
          color: var(--text-secondary);
          position: relative;
          padding-left: 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .equipment-list li:last-child {
          border-bottom: none;
        }

        .equipment-list li::before {
          content: '✓';
          color: var(--primary-color);
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        .testing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .testing-card {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-light);
          border-left: 4px solid var(--accent-color);
          transition: var(--transition);
        }

        .testing-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-medium);
        }

        .testing-card h3 {
          color: var(--primary-color);
          margin-bottom: 1.5rem;
        }

        .methods-section, .applications-section {
          margin-bottom: 1.5rem;
        }

        .methods-section h4, .applications-section h4 {
          color: var(--secondary-color);
          margin-bottom: 0.75rem;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .methods-section ul {
          list-style: none;
          padding: 0;
        }

        .methods-section li {
          padding: 0.25rem 0;
          color: var(--text-secondary);
          position: relative;
          padding-left: 1rem;
        }

        .methods-section li::before {
          content: '▸';
          color: var(--accent-color);
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        .applications-section p {
          color: var(--text-secondary);
          font-style: italic;
          margin: 0;
        }

        .software-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .software-card {
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          color: white;
          padding: 2rem;
          border-radius: var(--border-radius);
          transition: var(--transition);
          position: relative;
          overflow: hidden;
        }

        .software-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100px;
          height: 100px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: var(--transition);
        }

        .software-card:hover::before {
          transform: scale(2);
        }

        .software-card:hover {
          transform: translateY(-5px);
        }

        .software-icon {
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }

        .software-card h3 {
          color: white;
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }

        .software-card p {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .capabilities-list {
          position: relative;
          z-index: 1;
        }

        .capabilities-list h4 {
          color: white;
          margin-bottom: 0.75rem;
          font-size: 0.9rem;
        }

        .capabilities-list ul {
          list-style: none;
          padding: 0;
        }

        .capabilities-list li {
          padding: 0.25rem 0;
          color: rgba(255, 255, 255, 0.9);
          position: relative;
          padding-left: 1rem;
        }

        .capabilities-list li::before {
          content: '•';
          color: white;
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        .collaborations-intro {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 3rem;
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .collaborations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .collaboration-card {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-light);
          border: 1px solid var(--border-color);
          transition: var(--transition);
        }

        .collaboration-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-medium);
        }

        .collaboration-card h3 {
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .collaboration-card h4 {
          color: var(--accent-color);
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        .collaboration-card p {
          color: var(--text-secondary);
          margin: 0;
        }

        .facilities-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .facility-info h3 {
          color: var(--primary-color);
          margin: 2rem 0 1rem 0;
        }

        .facility-info h3:first-child {
          margin-top: 0;
        }

        .facility-info ul {
          list-style: none;
          padding: 0;
        }

        .facility-info li {
          padding: 0.5rem 0;
          color: var(--text-secondary);
          position: relative;
          padding-left: 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .facility-info li:last-child {
          border-bottom: none;
        }

        .facility-info li::before {
          content: '▸';
          color: var(--primary-color);
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        .facility-image {
          position: relative;
        }

        .facility-image img {
          width: 100%;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-medium);
        }

        .image-caption {
          text-align: center;
          margin-top: 1rem;
          color: var(--text-secondary);
          font-style: italic;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .equipment-grid,
          .testing-grid,
          .software-grid,
          .collaborations-grid {
            grid-template-columns: 1fr;
          }

          .facilities-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Resources
