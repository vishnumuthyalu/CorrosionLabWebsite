import '../styles/Research.css'

const Research = () => {
  return (
    <div className="research-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Research</h1>
            <p>
              We are interested in studying the degradation of materials for different
              applications including, oil and gas industry, nuclear facilities, reinforced concrete,
              stent corrosion fatigue and other forms of corrosion. Our long-term goal is to
              identify and characterize the scientific mechanisms specific to our principal
              areas of research.
            </p>
          </div>
        </div>
      </section>

      {/* Current Research Projects */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Current Research Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Effects of Triazine-Based H2S Scavengers Byproducts on the Film Composition and Cracking of Carbon Steel in Oilfield Applications</h3>
              <p>Investigation of how H2S scavenger byproducts affect the protective film formation and cracking susceptibility of carbon steel in oil and gas environments.</p>
            </div>
            <div className="project-card">
              <h3>Three Dimensional Fracture Mechanics Capability for Structures operating in High Temperature Thermal Environments</h3>
              <p>Development of advanced fracture mechanics models for high-temperature applications in nuclear and aerospace industries.</p>
            </div>
            <div className="project-card">
              <h3>Probability Risk Assessment for Stress Corrosion Cracking in Nuclear Facilities</h3>
              <p>Comprehensive risk assessment methodology for predicting and preventing stress corrosion cracking in nuclear power plant components.</p>
            </div>
            <div className="project-card">
              <h3>Effect of Passive Film Composition on the Electrochemical Behavior and Cracking of Corrosion Resistant Alloys Utilizing Surface Enhanced Raman Spectroscopy</h3>
              <p>Advanced spectroscopic analysis of passive films on corrosion-resistant alloys to understand their protective mechanisms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corrosion Laboratory Goal */}
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

export default Research
