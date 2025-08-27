import { ArrowRight, Users, Award, BookOpen, Target, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../styles/Home.css'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % researchAreas.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + researchAreas.length) % researchAreas.length)
  }

  const stats = [
    { icon: <Users size={32} />, value: 'tbd', label: 'Researchers' },
    { icon: <BookOpen size={32} />, value: 'tbd', label: 'Publications' },
    { icon: <Award size={32} />, value: 'tbd', label: 'Awards' },
    { icon: <Target size={32} />, value: 'tbd', label: 'Research Areas' }
  ]

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

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>UTSA Corrosion Research Laboratory</h1>
            <p>
              Advancing Corrosion Science and Engineering to increase material durability, infrastructure sustainability, and safety
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
                The UTSA Corrosion Research Laboratory was founded on august 2016 by Prof. Brendy C. Rincon Troconis in the Department of Mechanical Engineering (now Department of Mechanical, Aerospace, and Industrial Engineering) at The University of Texas at San Antonio (UT San Antonio). We study how materials degrade in demanding environments to make infrastructure more sustainable and resilient. Our work spans industries such as energy, aerospace, transportation, automotive, oil and gas, and nuclear. With expertise in atmospheric, localized, galvanic, rebar, and microbiologically influenced corrosion, as well as coatings and environmentally assisted cracking, we identify and characterize degradation mechanisms, while also developing innovative solutions to control corrosion and extend the life of critical systems.
              </p>
              <p>
                Our main research laboratory is located in the BioScience and Engineering building (BSE 0.216A) at UT San Antonio's main campus. We welcome new project ideas, collaborators, and student volunteers, so please don't hesitate to contact us.
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
          </div>
          
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
                    <div className="research-icon-large">{researchAreas[currentSlide].icon}</div>
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
                <img src="/professor_rincon_headshot.jpg" alt="Dr. Brendy Rincon Troconis" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Gallery */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Our Laboratory</h2>
            <p>Explore our state-of-the-art facilities and research equipment</p>
          </div>
          <div className="laboratory-image">
            <img src="/equipment_1.png" alt="Laboratory Equipment" />
          </div>
          <div className="text-center mt-4">
            <Link to="/capabilities" className="btn btn-primary">
              Explore Our Capabilities <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
