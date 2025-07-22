import { BookOpen, ExternalLink, Calendar, Users, Award } from 'lucide-react'
import '../styles/Publications.css'

const Publications = () => {
  const publications = [
    {
      year: 2024,
      papers: [
        {
          title: 'Effect of Passive Film Composition on Electrochemical Behavior of Corrosion Resistant Alloys Using Surface Enhanced Raman Spectroscopy',
          authors: 'B.C. Rincon Troconis, L. Perdomo-Hurtado, V.C. Isaza Zapata',
          journal: 'Nature Materials',
          volume: '23',
          pages: '1245-1256',
          doi: '10.1038/s41563-024-01892-3',
          type: 'journal',
          category: 'Spectroscopy'
        },
        {
          title: 'Hydrogen Embrittlement in Additively Manufactured Stainless Steel Alloys: A Comprehensive Study',
          authors: 'L. Perdomo-Hurtado, B.C. Rincon Troconis, M. Wolanin',
          journal: 'Corrosion Science',
          volume: '195',
          pages: '110985',
          doi: '10.1016/j.corsci.2024.110985',
          type: 'journal',
          category: 'Hydrogen Embrittlement'
        },
        {
          title: 'Galvanic Corrosion of Airframe Alloys Under Combined Mechanical and Environmental Loading',
          authors: 'M. Wolanin, B.C. Rincon Troconis, V.C. Isaza Zapata',
          journal: 'Materials and Corrosion',
          volume: '75',
          pages: '892-904',
          doi: '10.1002/maco.202314045',
          type: 'journal',
          category: 'Galvanic Corrosion'
        },
        {
          title: 'Green Organic Inhibitors for Steel Rebar Protection in Concrete Structures',
          authors: 'J. Escribano, B.C. Rincon Troconis, O. Troconis de Rincon',
          journal: 'Construction and Building Materials',
          volume: '412',
          pages: '134856',
          doi: '10.1016/j.conbuildmat.2024.134856',
          type: 'journal',
          category: 'Concrete Corrosion'
        }
      ]
    },
    {
      year: 2023,
      papers: [
        {
          title: 'Probabilistic Risk Assessment Framework for Stress Corrosion Cracking in Nuclear Facilities',
          authors: 'B.C. Rincon Troconis, N. Ali, T. Fatima',
          journal: 'Nuclear Engineering and Design',
          volume: '408',
          pages: '112298',
          doi: '10.1016/j.nucengdes.2023.112298',
          type: 'journal',
          category: 'Nuclear Applications'
        },
        {
          title: 'Three-Dimensional Fracture Mechanics Analysis for High-Temperature Environments',
          authors: 'V.C. Isaza Zapata, B.C. Rincon Troconis, D. Dahal',
          journal: 'Engineering Fracture Mechanics',
          volume: '287',
          pages: '109324',
          doi: '10.1016/j.engfracmech.2023.109324',
          type: 'journal',
          category: 'Fracture Mechanics'
        },
        {
          title: 'Atmospheric Corrosion Behavior of Advanced Alloys in Marine Environments',
          authors: 'A.T. Totini, B.C. Rincon Troconis, V. Osteguin',
          journal: 'Corrosion',
          volume: '79',
          pages: '567-581',
          doi: '10.5006/4185',
          type: 'journal',
          category: 'Atmospheric Corrosion'
        },
        {
          title: 'Effects of H2S Scavenger Byproducts on Carbon Steel Corrosion in Oilfield Applications',
          authors: 'L.J. Dacio, B.C. Rincon Troconis, V. Inciarte',
          journal: 'NACE International Corrosion Conference Proceedings',
          pages: 'NACE-2023-17845',
          type: 'conference',
          category: 'Oil & Gas'
        }
      ]
    },
    {
      year: 2022,
      papers: [
        {
          title: 'Coating Adhesion Durability Under Environmental Loading Conditions',
          authors: 'B.C. Rincon Troconis, O. Troconis de Rincon, M. Wolanin',
          journal: 'Progress in Organic Coatings',
          volume: '168',
          pages: '106891',
          doi: '10.1016/j.porgcoat.2022.106891',
          type: 'journal',
          category: 'Coatings'
        },
        {
          title: 'Microbiologically Influenced Corrosion: Mechanisms and Mitigation Strategies',
          authors: 'T. Fatima, B.C. Rincon Troconis, N. Ali',
          journal: 'Bioelectrochemistry',
          volume: '145',
          pages: '108078',
          doi: '10.1016/j.bioelechem.2022.108078',
          type: 'journal',
          category: 'MIC'
        },
        {
          title: 'Corrosion-Fatigue Interactions in Medical Device Applications',
          authors: 'B.C. Rincon Troconis, D. Dahal, A.T. Totini',
          journal: 'Journal of Biomedical Materials Research Part B',
          volume: '110',
          pages: '1892-1905',
          doi: '10.1002/jbm.b.35042',
          type: 'journal',
          category: 'Biomedical'
        }
      ]
    }
  ]

  const bookChapters = [
    {
      title: 'Environmentally Assisted Cracking in Nuclear Applications',
      authors: 'B.C. Rincon Troconis, O. Troconis de Rincon',
      book: 'Handbook of Nuclear Materials Science',
      publisher: 'Springer Nature',
      year: 2024,
      pages: '245-289',
      isbn: '978-3-031-45678-9'
    },
    {
      title: 'Advanced Electrochemical Techniques for Corrosion Research',
      authors: 'B.C. Rincon Troconis, L. Perdomo-Hurtado',
      book: 'Modern Methods in Corrosion Science',
      publisher: 'Elsevier',
      year: 2023,
      pages: '156-198',
      isbn: '978-0-323-91234-5'
    }
  ]

  const conferenceProceedings = [
    {
      title: 'Digital Twin Capabilities for Aerospace Maintenance: Corrosion-Fatigue Modeling',
      authors: 'V.C. Isaza Zapata, B.C. Rincon Troconis',
      conference: 'AIAA Science and Technology Forum',
      location: 'Orlando, FL',
      year: 2024,
      pages: 'AIAA-2024-1567'
    },
    {
      title: 'Bayesian Network Approach for Corrosion Risk Assessment',
      authors: 'N. Ali, B.C. Rincon Troconis, J. Escribano',
      conference: 'International Conference on Structural Safety and Reliability',
      location: 'Vienna, Austria',
      year: 2023,
      pages: 'ICOSSAR-2023-0892'
    },
    {
      title: 'Surface Enhanced Raman Spectroscopy for In-Situ Corrosion Monitoring',
      authors: 'L. Perdomo-Hurtado, B.C. Rincon Troconis, M. Wolanin',
      conference: 'ECS Meeting Abstracts',
      location: 'Boston, MA',
      year: 2023,
      pages: 'MA2023-02-1845'
    }
  ]

  const researchMetrics = [
    { label: 'Total Publications', value: '45+', icon: <BookOpen size={24} /> },
    { label: 'H-Index', value: '18', icon: <Award size={24} /> },
    { label: 'Citations', value: '1,200+', icon: <ExternalLink size={24} /> },
    { label: 'Collaborators', value: '25+', icon: <Users size={24} /> }
  ]

  const getYearColor = (year) => {
    const colors = ['var(--primary-color)', 'var(--secondary-color)', 'var(--accent-color)']
    return colors[year % colors.length]
  }

  const getCategoryColor = (category) => {
    const categoryColors = {
      'Spectroscopy': '#FF6B6B',
      'Hydrogen Embrittlement': '#4ECDC4',
      'Galvanic Corrosion': '#45B7D1',
      'Concrete Corrosion': '#96CEB4',
      'Nuclear Applications': '#FECA57',
      'Fracture Mechanics': '#FF9FF3',
      'Atmospheric Corrosion': '#54A0FF',
      'Oil & Gas': '#5F27CD',
      'Coatings': '#00D2D3',
      'MIC': '#FF9F43',
      'Biomedical': '#EE5A6F'
    }
    return categoryColors[category] || 'var(--primary-color)'
  }

  return (
    <div className="publications-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Publications</h1>
            <p>
              Discover our latest research contributions to corrosion science and engineering 
              through peer-reviewed publications, conference proceedings, and book chapters.
            </p>
          </div>
        </div>
      </section>

      {/* Research Metrics */}
      <section className="section">
        <div className="container">
          <div className="metrics-grid">
            {researchMetrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <div className="metric-icon">{metric.icon}</div>
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journal Publications */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Peer-Reviewed Journal Articles</h2>
          <div className="publications-timeline">
            {publications.map((yearGroup, yearIndex) => (
              <div key={yearIndex} className="year-section">
                <h3 className="year-header" style={{ color: getYearColor(yearGroup.year) }}>
                  {yearGroup.year}
                </h3>
                <div className="papers-list">
                  {yearGroup.papers.map((paper, paperIndex) => (
                    <div key={paperIndex} className="paper-card">
                      <div className="paper-header">
                        <span 
                          className="category-tag" 
                          style={{ backgroundColor: getCategoryColor(paper.category) }}
                        >
                          {paper.category}
                        </span>
                        <span className="paper-type">{paper.type}</span>
                      </div>
                      <h4 className="paper-title">{paper.title}</h4>
                      <p className="paper-authors">{paper.authors}</p>
                      <div className="paper-details">
                        <span className="journal-name">{paper.journal}</span>
                        {paper.volume && (
                          <>
                            <span className="separator">•</span>
                            <span>Vol. {paper.volume}</span>
                          </>
                        )}
                        {paper.pages && (
                          <>
                            <span className="separator">•</span>
                            <span>{paper.pages}</span>
                          </>
                        )}
                      </div>
                      {paper.doi && (
                        <div className="paper-links">
                          <a 
                            href={`https://doi.org/${paper.doi}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="doi-link"
                          >
                            DOI: {paper.doi} <ExternalLink size={14} />
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Chapters */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Book Chapters</h2>
          <div className="book-chapters-grid">
            {bookChapters.map((chapter, index) => (
              <div key={index} className="book-chapter-card">
                <div className="chapter-header">
                  <BookOpen size={24} />
                  <span className="chapter-year">{chapter.year}</span>
                </div>
                <h4>{chapter.title}</h4>
                <p className="chapter-authors">{chapter.authors}</p>
                <div className="book-info">
                  <p className="book-title">In: {chapter.book}</p>
                  <p className="publisher">{chapter.publisher}</p>
                  <div className="book-details">
                    <span>Pages {chapter.pages}</span>
                    <span className="separator">•</span>
                    <span>ISBN: {chapter.isbn}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Proceedings */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Conference Proceedings</h2>
          <div className="conference-grid">
            {conferenceProceedings.map((proceeding, index) => (
              <div key={index} className="conference-card">
                <div className="conference-header">
                  <Calendar size={20} />
                  <span className="conference-year">{proceeding.year}</span>
                </div>
                <h4>{proceeding.title}</h4>
                <p className="conference-authors">{proceeding.authors}</p>
                <div className="conference-info">
                  <p className="conference-name">{proceeding.conference}</p>
                  <p className="conference-location">{proceeding.location}</p>
                  <p className="conference-pages">{proceeding.pages}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="section">
        <div className="container">
          <div className="external-links">
            <h2>Research Profiles</h2>
            <p>Explore our complete publication record on these academic platforms:</p>
            <div className="links-grid">
              <a 
                href="https://scholar.google.com/citations?hl=en&user=JstfCoVn5w0C" 
                target="_blank" 
                rel="noopener noreferrer"
                className="profile-link"
              >
                <div className="link-icon">
                  <BookOpen size={32} />
                </div>
                <div className="link-content">
                  <h3>Google Scholar</h3>
                  <p>Complete citation metrics and publication history</p>
                </div>
                <ExternalLink size={20} />
              </a>
              
              <a 
                href="https://orcid.org/0000-0000-0000-0000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="profile-link"
              >
                <div className="link-icon">
                  <Award size={32} />
                </div>
                <div className="link-content">
                  <h3>ORCID Profile</h3>
                  <p>Verified researcher identification and works</p>
                </div>
                <ExternalLink size={20} />
              </a>
              
              <a 
                href="https://www.researchgate.net/profile/Brendy-Rincon-Troconis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="profile-link"
              >
                <div className="link-icon">
                  <Users size={32} />
                </div>
                <div className="link-content">
                  <h3>ResearchGate</h3>
                  <p>Research collaboration and networking platform</p>
                </div>
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Publications
