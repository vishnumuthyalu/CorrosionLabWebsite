import { BookOpen, ExternalLink, Calendar, Users, Award } from 'lucide-react'

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

      <style jsx>{`
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .metric-card {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-light);
          text-align: center;
          transition: var(--transition);
        }

        .metric-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-medium);
        }

        .metric-icon {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .metric-value {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .metric-label {
          color: var(--text-secondary);
          font-weight: 500;
        }

        .section-title {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--primary-color);
        }

        .publications-timeline {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .year-section {
          position: relative;
        }

        .year-header {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 2rem;
          position: sticky;
          top: 100px;
          background: var(--background-light);
          padding: 1rem 0;
          z-index: 10;
        }

        .papers-list {
          display: grid;
          gap: 1.5rem;
        }

        .paper-card {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-light);
          border-left: 4px solid var(--primary-color);
          transition: var(--transition);
        }

        .paper-card:hover {
          transform: translateX(5px);
          box-shadow: var(--shadow-medium);
        }

        .paper-header {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          align-items: center;
        }

        .category-tag {
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .paper-type {
          padding: 0.25rem 0.75rem;
          background: var(--background-light);
          color: var(--text-secondary);
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 500;
          border: 1px solid var(--border-color);
        }

        .paper-title {
          color: var(--primary-color);
          margin-bottom: 0.75rem;
          line-height: 1.4;
          font-size: 1.1rem;
        }

        .paper-authors {
          color: var(--text-secondary);
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .paper-details {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          align-items: center;
          margin-bottom: 1rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .journal-name {
          font-style: italic;
          font-weight: 600;
          color: var(--secondary-color);
        }

        .separator {
          color: var(--border-color);
        }

        .paper-links {
          margin-top: 1rem;
        }

        .doi-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary-color);
          text-decoration: none;
          font-size: 0.875rem;
          padding: 0.5rem 1rem;
          background: var(--background-light);
          border-radius: var(--border-radius);
          transition: var(--transition);
        }

        .doi-link:hover {
          background: var(--primary-color);
          color: white;
        }

        .book-chapters-grid,
        .conference-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .book-chapter-card,
        .conference-card {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-light);
          transition: var(--transition);
        }

        .book-chapter-card:hover,
        .conference-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-medium);
        }

        .chapter-header,
        .conference-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          color: var(--primary-color);
        }

        .chapter-year,
        .conference-year {
          background: var(--primary-color);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .book-chapter-card h4,
        .conference-card h4 {
          color: var(--primary-color);
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .chapter-authors,
        .conference-authors {
          color: var(--text-secondary);
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .book-info,
        .conference-info {
          border-top: 1px solid var(--border-color);
          padding-top: 1rem;
        }

        .book-title,
        .conference-name {
          font-weight: 600;
          color: var(--secondary-color);
          margin-bottom: 0.5rem;
        }

        .publisher,
        .conference-location,
        .conference-pages {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
        }

        .book-details {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }

        .external-links {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .external-links h2 {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .external-links p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .profile-link {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 2rem;
          background: white;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-light);
          text-decoration: none;
          color: inherit;
          transition: var(--transition);
        }

        .profile-link:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-medium);
        }

        .link-icon {
          color: var(--primary-color);
          flex-shrink: 0;
        }

        .link-content {
          flex: 1;
          text-align: left;
        }

        .link-content h3 {
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .link-content p {
          color: var(--text-secondary);
          margin: 0;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .book-chapters-grid,
          .conference-grid,
          .links-grid {
            grid-template-columns: 1fr;
          }

          .paper-details {
            flex-direction: column;
            align-items: flex-start;
          }

          .profile-link {
            flex-direction: column;
            text-align: center;
          }

          .link-content {
            text-align: center;
          }
        }
      `}</style>
    </div>
  )
}

export default Publications
