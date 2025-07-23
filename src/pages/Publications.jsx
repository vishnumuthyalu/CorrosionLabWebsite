import { BookOpen, ExternalLink } from 'lucide-react'
import '../styles/Publications.css'

const Publications = () => {
  const publications = [
    {
      title: 'Metallurgical and electrochemical characterization of the corrosion of a Mg-Al-Zn alloy AZ31B-H24 tungsten inert gas weld: Galvanic corrosion between weld zones',
      authors: 'L. Bland, B.C. Rincon Troconis, R. Santucci, J. Fitz-Gerald, and J. Scully',
      journal: 'Corrosion',
      volume: '72',
      number: '10',
      year: '2016',
      pages: '1226-1242',
      doi: 'http://dx.doi.org/10.5006/2078'
    },
    {
      title: 'The Effect of Microstructure Variation on the Hydrogen Environment-Assisted Cracking of Monel K-500',
      authors: 'Z.D. Harris, J.D. Dolph, G.L. Pioszak, B.C. Rincon Troconis, J.R. Scully, J.T. Burns',
      journal: 'Metallurgical and Materials Transactions A',
      volume: '47',
      number: '7',
      year: '2016',
      pages: '3488-3510',
      doi: 'http://dx.doi.org/10.1007/s11661-016-3486-7'
    },
    {
      title: 'Effect of Pretreatments on the Adhesion of Acetoacetate to AA2024-T3 using the Blister Test',
      authors: 'B.C. Rincon Troconis and G.S. Frankel',
      journal: 'Corrosion',
      volume: '70',
      number: '5',
      year: '2014',
      pages: '483-495',
      doi: 'http://dx.doi.org/10.5006/1178'
    },
    {
      title: 'Effects of carbon filler content on adhesion strength and wear and corrosion resistance of epoxy composite coatings on AA2024-T3',
      authors: 'N.W. Khun, B.C. Rincon Troconis and G.S. Frankel',
      journal: 'Progress in Organic Coatings',
      volume: '77',
      number: '1',
      year: '2014',
      pages: '72-80',
      doi: 'http://dx.doi.org/10.1016/j.porgcoat.2013.08.003'
    },
    {
      title: 'Effect of Roughness and Surface Topography on Adhesion of PVB to AA2024-T3 using the Blister Test',
      authors: 'B.C. Rincon Troconis and G.S. Frankel',
      journal: 'Surface and Coatings Technology',
      volume: '236',
      year: '2013',
      pages: '531-539',
      doi: 'http://dx.doi.org/10.1016/j.surfcoat.2013.10.046'
    },
    {
      title: 'Galvanic Samples for Accelerated Corrosion Testing of Coated Al Alloys, Part I: Concept',
      authors: 'C.A. Matzdorf, W.C. Nickerson, B.C. Rincon Troconis, G.S. Frankel, L. Li, and R.G. Buchheit',
      journal: 'Corrosion',
      volume: '69',
      number: '12',
      year: '2013',
      pages: '1240-1246',
      doi: 'http://dx.doi.org/10.5006/0905'
    }
  ]

  return (
    <div className="publications-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Publications</h1>
          </div>
        </div>
      </section>

      {/* Publications Counter */}
      <section className="section">
        <div className="container">
          <div className="publications-counter">
            <div className="counter-card">
              <div className="counter-icon">
                <BookOpen size={32} />
              </div>
              <div className="counter-value">{publications.length}</div>
              <div className="counter-label">Total Publications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="section section-alt">
        <div className="container">
          <div className="publications-list">
            {publications.map((publication, index) => (
              <div key={index} className="publication-card">
                <h3 className="publication-title">{publication.title}</h3>
                <p className="publication-authors">{publication.authors}</p>
                <div className="publication-details">
                  <span className="journal-name">{publication.journal}</span>
                  <span className="separator">•</span>
                  <span>Vol. {publication.volume}</span>
                  {publication.number && (
                    <>
                      <span className="separator">•</span>
                      <span>No. {publication.number}</span>
                    </>
                  )}
                  <span className="separator">•</span>
                  <span>{publication.year}</span>
                  <span className="separator">•</span>
                  <span>pages {publication.pages}</span>
                </div>
                <div className="publication-doi">
                  <a 
                    href={publication.doi} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="doi-link"
                  >
                    DOI: {publication.doi} <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Publications
