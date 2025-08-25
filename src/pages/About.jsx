import { MapPin, Target, Award, Users } from 'lucide-react'
import '../styles/About.css'

const About = () => {
  const goals = [
    {
      icon: <Target size={32} />,
      title: 'Research Excellence',
      description: 'Identify and characterize the scientific mechanisms specific to our principal areas of research'
    },
    {
      icon: <Users size={32} />,
      title: 'Collaboration',
      description: 'Foster partnerships with industry, academia, and government agencies for impactful research'
    },
    {
      icon: <Award size={32} />,
      title: 'Innovation',
      description: 'Develop cutting-edge solutions for corrosion control and material protection'
    }
  ]

  const capabilities = [
    'Electrochemical Testing',
    'Mechanical Testing',
    'Spectroscopy Analysis',
    'Microstructural Characterization',
    'Stress Corrosion Cracking Studies',
    'Atmospheric Corrosion Testing',
    'Passivation Analysis',
    'Coating Adhesion Testing',
    'Pitting Corrosion Research',
    'Environmental Testing'
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

      {/* Goals Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Our Goals</h2>
            <p>Driving innovation in corrosion science and engineering</p>
          </div>
          <div className="goals-grid">
            {goals.map((goal, index) => (
              <div key={index} className="goal-card">
                <div className="goal-icon">{goal.icon}</div>
                <h3>{goal.title}</h3>
                <p>{goal.description}</p>
              </div>
            ))}
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
          <div className="focus-areas">
            <div className="focus-area">
              <h3>Environmentally Assisted Cracking</h3>
              <p>
                Investigation of stress corrosion cracking mechanisms in various environments
                and material systems, with focus on nuclear and industrial applications.
              </p>
            </div>
            
            <div className="focus-area">
              <h3>Atmospheric Corrosion</h3>
              <p>
                Study of material degradation in outdoor environments, including the effects
                of climate, pollutants, and protective coatings on corrosion rates.
              </p>
            </div>
            
            <div className="focus-area">
              <h3>Localized Corrosion</h3>
              <p>
                Research on pitting, crevice corrosion, and galvanic corrosion mechanisms,
                with emphasis on predictive modeling and prevention strategies.
              </p>
            </div>
            
            <div className="focus-area">
              <h3>Corrosion in Reinforced Concrete</h3>
              <p>
                Analysis of rebar corrosion in concrete structures, development of inhibitor
                systems, and evaluation of repair and protection methods.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
