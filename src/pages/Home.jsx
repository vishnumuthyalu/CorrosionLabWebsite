import { ArrowRight, Users, Award, BookOpen, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
  const stats = [
    { icon: <Users size={32} />, value: '15+', label: 'Researchers' },
    { icon: <BookOpen size={32} />, value: '100+', label: 'Publications' },
    { icon: <Award size={32} />, value: '10+', label: 'Awards' },
    { icon: <Target size={32} />, value: '5', label: 'Research Areas' }
  ]

  const researchAreas = [
    {
      title: 'Oil and Gas Industry',
      description: 'Studying material degradation in harsh petroleum environments and developing corrosion control strategies.',
      icon: '🛢️'
    },
    {
      title: 'Nuclear Facilities',
      description: 'Investigating stress corrosion cracking and material behavior in nuclear environments.',
      icon: '⚛️'
    },
    {
      title: 'Reinforced Concrete',
      description: 'Analyzing corrosion in concrete structures and developing protective measures.',
      icon: '🏗️'
    },
    {
      title: 'Stent Corrosion Fatigue',
      description: 'Research on biomedical applications and corrosion-fatigue interactions in medical devices.',
      icon: '🫀'
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>UTSA Corrosion Research Laboratory</h1>
            <p>
              We are interested in studying the degradation of materials for different
              applications including oil and gas industry, nuclear facilities, reinforced concrete,
              stent corrosion fatigue and other forms of corrosion. Our long-term goal is to
              identify and characterize the scientific mechanisms specific to our principal
              areas of research.
            </p>
            <div className="hero-buttons">
              <Link to="/research" className="btn btn-primary">
                Explore Research <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Welcome to the UTSA Corrosion Research Laboratory</h2>
              <p>
                The UTSA Corrosion Research Laboratory is led by Prof. Brendy C. Rincon
                Troconis in the Department of Mechanical Engineering at The University of Texas at San
                Antonio (UTSA). Our research focuses on material degradation, specifically on
                environmentally assisted cracking, atmospheric corrosion, corrosion in harsh
                environments, localized corrosion, and corrosion in reinforced concrete.
              </p>
              <p>
                Our research laboratory is located in the BioScience and Engineering building
                (BSE 0.216A) at UTSA's main campus. We welcome new project ideas, collaborators,
                and student volunteers, so please don't hesitate to contact us.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us <ArrowRight size={20} />
              </Link>
            </div>
            <div className="about-image">
              <img src="/team_picture1.jpg" alt="Laboratory Team" />
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Our Research Areas</h2>
            <p>Exploring material degradation across diverse applications and environments</p>
          </div>
          <div className="research-grid">
            {researchAreas.map((area, index) => (
              <div key={index} className="research-card">
                <div className="research-icon">{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/research" className="btn btn-primary">
              View All Research <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Principal Investigator Highlight */}
      <section className="section section-alt">
        <div className="container">
          <div className="pi-highlight">
            <div className="pi-content">
              <h2>Led by Dr. Brendy Rincon Troconis</h2>
              <h3>Principal Investigator & Associate Professor</h3>
              <p>
                Dr. Brendy Rincon Troconis is an Associate Professor in the Department of
                Mechanical, Aerospace, and Industrial Engineering at UTSA. She is the founder of the 
                UTSA Corrosion Research Laboratory and an expert in aqueous corrosion, with research 
                spanning atmospheric, localized, galvanic, and microbiologically induced corrosion.
              </p>
              <div className="pi-achievements">
                <div className="achievement">
                  <Award size={24} />
                  <span>2023 AMPP Early-Career Award</span>
                </div>
                <div className="achievement">
                  <Award size={24} />
                  <span>2021 Gulf Research Program Early-Career Research Fellow</span>
                </div>
              </div>
              <Link to="/staff" className="btn btn-primary">
                Meet Our Team <ArrowRight size={20} />
              </Link>
            </div>
            <div className="pi-image">
              <div className="image-placeholder">
                <img src="/api/placeholder/400/400" alt="Dr. Brendy Rincon Troconis" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Gallery */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Our Team & Laboratory</h2>
            <p>Meet our dedicated researchers and explore our state-of-the-art facilities</p>
          </div>
          <div className="team-gallery">
            <div className="gallery-item">
              <img src="/team_picture1.jpg" alt="Corrosion Lab Team" />
              <div className="gallery-overlay">
                <h4>Research Team</h4>
                <p>Our dedicated team of researchers</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/team_picture2.jpg" alt="Laboratory Collaboration" />
              <div className="gallery-overlay">
                <h4>Collaborative Work</h4>
                <p>Working together on cutting-edge research</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/equipment_1.png" alt="Laboratory Equipment" />
              <div className="gallery-overlay">
                <h4>Advanced Equipment</h4>
                <p>State-of-the-art research facilities</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/staff" className="btn btn-primary">
              Meet Our Team <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Join Our Research Mission</h2>
            <p>
              We welcome new project ideas, collaborators, and student volunteers. 
              Let's work together to advance corrosion science and engineering.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get In Touch <ArrowRight size={20} />
              </Link>
              <Link to="/news" className="btn btn-secondary">
                Latest News
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
