import { useState } from 'react'
import { ChevronDown, ChevronUp, Calendar, ExternalLink } from 'lucide-react'
import '../styles/Research.css'

const Research = () => {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [showAllPublications, setShowAllPublications] = useState(false)

  const researchProjects = [
    {
      title: "Atmospheric Corrosion",
      description: "Atmospheric Pitting Corrosion of Austenitic Stainless Steel 316L"
    },
    {
      title: "Rebar Corrosion",
      description: "Hybrid Corrosion Control Methods for Reinforced Concrete Elements."
    },
    {
      title: "Microbiologically Influenced Corrosion",
      description: "Assessing the Temporal Succession of Microfouling Communities on Copper-Nickel and Titanium Metals Deployed in Marine Environments"
    },
    {
      title: "Stress Corrosion Cracking",
      description: "Stress-Affected Corrosion Kinetics on Airframe Materials"
    },
    {
      title: "Hydrogen Embrittlement",
      description: "Enhancing Material's Resistance to Hydrogen Embrittlement through Microstructural Engineering"
    },
    {
      title: "Corrosion Fatigue",
      description: "Through-Hole-Fastener Install Fatigue Stress Factors"
    },
    {
      title: "Green Corrosion Inhibition",
      description: "Hybrid Corrosion Control Methods for Reinforced Concrete Elements."
    },
    {
      title: "Coating's Durability",
      description: "Systematic Study of the Effect of Surface Preparation and Electrodeposition Process Parameters on the Corrosion Resistance of Zramic Coated Steel. Evaluation of Coatings for Fire Retardant Applications"
    },
    {
      title: "Coating Adhesion",
      description: "Computationally Informed Blister test"
    },
    {
      title: "Accelerated Corrosion Testing Development",
      description: "Developing an Accelerated Procedure to Evaluate Magnesium Oxychloride Based Panels"
    }
  ]

  const publications = [
    {
      year: "2025",
      title: "Algorithm for the Quantitative Characterization of Galvanic Corrosion Morphology from Optical Micrographs",
      authors: "L. Perdomo-Hurtado*, V. Osteguin*, H. Kareem Abdelaziz*, J. Dante, and B.C. Rincon Troconis+",
      journal: "CORROSION",
      details: "1 April 2025; 81 (4): 325–337",
      doi: null
    },
    {
      year: "2023",
      title: "Organic Compounds as Corrosion Inhibitors for Reinforced Concrete: A Review",
      authors: "Leonardo X. Alvarez, Oladis Troconis de Rincón, Jorge Escribano*, Brendy C. Rincon Troconis+",
      journal: "Corrosion Reviews",
      details: "Vol. 41, issue 6. Published on September 5th 2023",
      doi: "https://doi.org/10.1515/corrrev-2023-0017"
    },
    {
      year: "2023",
      title: "Characterizing the adhesion between thin films and rigid substrates using DIC-informed inverse finite elements and the blister test",
      authors: "Drishya Dahal*, Juan-Sebastian Rincon-Tabares*, David Y. Risk-Mora*, Brendy C. Rincon Troconis+, and David Restrepo+",
      journal: "ASME. Journal of Applied Mechanics",
      details: "Vol. 90, issue 11. Published on August 3rd 2023",
      doi: "https://doi.org/10.1115/1.4062907"
    },
    {
      year: "2023",
      title: "Corrosion-Resistant Stainless-Steel Strands for Prestressed Bridge Piles in Marine Atmospheric Environments",
      authors: "Brendy C. Rincon Troconis+, Stephen R. Sharp, H. Celik Ozyildirim, Charles R. Demarest, Jacob Wright, Luis Perdomo-Hurtado*, and John R. Scully",
      journal: "CORROSION",
      details: "Vol. 79, No 7, 2023, pages 732-750. Published on May 31st 2023",
      doi: null
    },
    {
      year: "2023",
      title: "Artificial Neural Network Model to Estimate the Long-term Carbonation Depth of Concrete Exposed to Natural Environments",
      authors: "Arsalan Majlesi*, Hamid Khodadadi Koodiani*, Oladis Troconis de Rincon**, Arturo Montoya, Valentina Millano, Andres Torres Acosta, and Brendy C. Rincon Troconis+",
      journal: "Journal of Building Engineering",
      details: "Vol. 74C. Published on April 20th 2023",
      doi: "https://doi.org/10.1016/j.jobe.2023.106545"
    },
    {
      year: "2023",
      title: "Evaluating BPT as a Green Corrosion Inhibitor in a Synthetic Pore Solution to Protect Steel Rebars",
      authors: "Loreto Dacio*, Oladis Troconis de Rincon**, Leonardo Alvarez, Homero Castaneda, Leonardo Quesada Roman, and Brendy Rincon Troconis+",
      journal: "Corrosion",
      details: "Vol. 79, No 4, 2023, pages 405–418. Published on December 27th 2023",
      doi: "https://doi.org/10.5006/4207"
    },
    {
      year: "2022",
      title: "Effect of microstructure on the pitting susceptibility of a martensitic-ferritic stainless steel: A corrosion-metallurgical study",
      authors: "Ricardo N. Carvalho, Brendy C. Rincon Troconis+, Greger Pioszak, Vinicio Ynciarte*, John R. Scully",
      journal: "Corrosion Science",
      details: "Vol 202, 2022, page 110277. Published on March 31st 2022",
      doi: "https://doi.org/10.1016/j.corsci.2022.110277"
    },
    {
      year: "2020",
      title: "Investigation of the Fuel Utilization Factor in PEM Fuel Cell Considering the Effect of Relative Humidity at the Cathode",
      authors: "M. Baghban Yousefkhani, H. Ghadamian, K. Daneshvar**,+, N Alizadeh, and B.C. Rincon Troconis",
      journal: "Energies",
      details: "Vol. 13, 2020, page 6117. Published on November 22nd 2020",
      doi: "10.3390/en13226117"
    },
    {
      year: "2018",
      title: "Time-dependent Enhanced Corrosion of Ti6Al4V in the Presence of H2O2 and Albumin",
      authors: "Y. Zhang, O. Addison+, F. Yu, B.C. Rincon Troconis, J.R. Scully, A.J. Davenport",
      journal: "Scientific Reports",
      details: "Vol. 8, 2018, No 1, page 3185. Published on February 16th 2018",
      doi: "10.1038/s41598-018-21332-x"
    },
    {
      year: "2017",
      title: "Effects of Heat to Heat Hydrogen Interaction Variations on Monel K-500 Hydrogen Embrittlement",
      authors: "B.C. Rincon Troconis, H. Ha, Z.D. Harris, J.T. Burns, J.R. Scully+",
      journal: "Materials Science & Engineering: A",
      details: "Vol. 703, 2017, pages 533-550. Published on July 11th 2017",
      doi: "https://doi.org/10.1016/j.msea.2017.07.019"
    },
    {
      year: "2016",
      title: "Metallurgical and electrochemical characterization of the corrosion of a Mg-Al-Zn alloy AZ31B-H24 tungsten inert gas weld: Galvanic corrosion between weld zones",
      authors: "L. Bland, B.C. Rincon Troconis, R. Santucci, J. Fitz-Gerald, and J. Scully",
      journal: "Corrosion",
      details: "Vol. 72, No 10, 2016, pages 1226-1242",
      doi: "http://dx.doi.org/10.5006/2078"
    },
    {
      year: "2016",
      title: "The Effect of Microstructure Variation on the Hydrogen Environment-Assisted Cracking of Monel K-500",
      authors: "Z.D. Harris, J.D. Dolph, G.L. Pioszak, B.C. Rincon Troconis, J.R. Scully, J.T. Burns",
      journal: "Metallurgical and Materials Transactions A",
      details: "Vol. 47, No. 7, 2016, pages 3488-3510",
      doi: "https://link.springer.com/article/10.1007/s11661-016-3486-7"
    },
    {
      year: "2014",
      title: "Effect of Pretreatments on the Adhesion of Acetoacetate to AA2024-T3 using the Blister Test",
      authors: "B.C. Rincon Troconis and G.S. Frankel",
      journal: "Corrosion",
      details: "Vol. 70, No 5, 2014, pages 483-495",
      doi: "http://dx.doi.org/10.5006/1178"
    },
    {
      year: "2014",
      title: "Effects of carbon nanotube content on adhesion strength and wear and corrosion resistance of epoxy composite coatings on AA2024-T3",
      authors: "N.W. Khun, B.C. Rincon Troconis and G.S. Frankel",
      journal: "Progress in Organic Coatings",
      details: "Vol. 77, No. 1, 2014, pages 72-80",
      doi: "http://dx.doi.org/10.1016/j.porgcoat.2013.08.003"
    },
    {
      year: "2013",
      title: "Effect of Roughness and Surface Topography on Adhesion of PVB to AA2024-T3 using the Blister Test",
      authors: "B.C. Rincon Troconis and G.S. Frankel",
      journal: "Surface and Coatings Technology",
      details: "Vol. 236, 2013, pages 531-539",
      doi: "http://dx.doi.org/10.1016/j.surfcoat.2013.10.046"
    },
    {
      year: "2013",
      title: "Galvanic Test Panels for Accelerated Corrosion Testing of Coated Al Alloys: Part I- Concept",
      authors: "C.A. Matzdorf, W.C. Nickerson, B.C. Rincon Troconis, G.S. Frankel, L. Li, and R.G. Buchheit",
      journal: "Corrosion",
      details: "Vol. 69, No 12, 2013, pages 1240-1246",
      doi: "http://dx.doi.org/10.5006/0905"
    }
  ]

  const displayedProjects = showAllProjects ? researchProjects : researchProjects.slice(0, 4)
  const displayedPublications = showAllPublications ? publications : publications.slice(0, 4)

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

      {/* Current Research Areas and Projects */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Current Research Areas and Projects</h2>
          <div className="projects-grid">
            {displayedProjects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <button 
              className="btn btn-primary"
              onClick={() => setShowAllProjects(!showAllProjects)}
            >
              {showAllProjects ? (
                <>
                  Show Less <ChevronUp size={20} />
                </>
              ) : (
                <>
                  See More <ChevronDown size={20} />
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Most Recent Publications */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Most Recent Publications</h2>
          <div className="publications-timeline">
            {displayedPublications.map((pub, index) => (
              <div key={index} className="publication-item">
                <div className="publication-year">
                  <div className="year-badge">
                    <Calendar size={16} />
                    <span>{pub.year}</span>
                  </div>
                </div>
                <div className="publication-content">
                  <div className="publication-card">
                    <h3>{pub.title}</h3>
                    <p className="authors">{pub.authors}</p>
                    <div className="publication-meta">
                      <span className="journal">{pub.journal}</span>
                      <span className="details">{pub.details}</span>
                    </div>
                    {pub.doi && (
                      <a 
                        href={pub.doi} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="doi-link"
                      >
                        View Publication <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <button 
              className="btn btn-primary"
              onClick={() => setShowAllPublications(!showAllPublications)}
            >
              {showAllPublications ? (
                <>
                  Show Less <ChevronUp size={20} />
                </>
              ) : (
                <>
                  See More Publications <ChevronDown size={20} />
                </>
              )}
            </button>
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
