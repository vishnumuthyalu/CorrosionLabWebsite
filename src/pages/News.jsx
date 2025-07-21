import { Calendar, Award, Users, BookOpen, ExternalLink } from 'lucide-react'

const News = () => {
  const newsItems = [
    {
      date: '2024-12-15',
      category: 'Award',
      title: 'Dr. Brendy Rincon Troconis Receives 2023 AMPP Early-Career Award',
      excerpt: 'Professor Brendy Rincon Troconis has been honored with the prestigious 2023 AMPP Early-Career Award for her outstanding contributions to corrosion science and engineering.',
      content: `Dr. Brendy Rincon Troconis, Principal Investigator of the UTSA Corrosion Research Laboratory, has been recognized with the 2023 AMPP (Association for Materials Protection and Performance) Early-Career Award. This prestigious award recognizes her exceptional contributions to the field of corrosion science and engineering, particularly in the areas of environmentally assisted cracking, atmospheric corrosion, and coating adhesion durability.

      The award highlights Dr. Rincon's leadership in multidisciplinary research projects supported by federal agencies including the US NRC, DOE, and ONR, as well as her commitment to advancing infrastructure sustainability and resiliency through innovative corrosion control strategies.`,
      icon: <Award size={24} />
    },
    {
      date: '2024-11-20',
      category: 'Research',
      title: 'New DOE Funding for High-Temperature Fracture Mechanics Research',
      excerpt: 'The laboratory has secured significant funding from the Department of Energy for developing advanced fracture mechanics capabilities for high-temperature environments.',
      content: `The UTSA Corrosion Research Laboratory has been awarded a substantial grant from the U.S. Department of Energy to develop three-dimensional fracture mechanics capabilities for structures operating in high-temperature thermal environments. This research will focus on nuclear and aerospace applications where materials are subjected to extreme thermal and mechanical stresses.

      The project will combine advanced computational modeling with experimental validation to better understand crack propagation mechanisms in high-temperature environments, ultimately leading to improved safety and reliability of critical infrastructure components.`,
      icon: <BookOpen size={24} />
    },
    {
      date: '2024-10-05',
      category: 'Collaboration',
      title: 'Partnership with U.S. Naval Research Laboratory Announced',
      excerpt: 'New collaborative research program focuses on fatigue behavior of through-hole fastener installations in naval aircraft.',
      content: `The laboratory has established a new research collaboration with the U.S. Naval Research Laboratory to investigate the fatigue behavior of through-hole fastener installations in naval aircraft. This project, led by doctoral student Viancy Catherine Isaza Zapata, combines experimental and probabilistic approaches to understand the impact of installation variables, galvanic corrosion, and environmental factors on fatigue life.

      The research will contribute to enhanced digital twin capabilities for aerospace maintenance and improved understanding of corrosion-fatigue interactions in critical aircraft components.`,
      icon: <Users size={24} />
    },
    {
      date: '2024-09-12',
      category: 'Student Achievement',
      title: 'Graduate Students Present Research at International Conference',
      excerpt: 'Laboratory graduate students presented their cutting-edge research findings at the International Corrosion Engineering Conference.',
      content: `Several graduate students from the UTSA Corrosion Research Laboratory presented their research at the International Corrosion Engineering Conference. The presentations covered a wide range of topics including hydrogen embrittlement in additively manufactured alloys, galvanic corrosion of airframe alloys, and green organic inhibitors for reinforced concrete applications.

      The students received positive feedback from the international corrosion community and established valuable connections for future research collaborations.`,
      icon: <Users size={24} />
    },
    {
      date: '2024-08-18',
      category: 'Publication',
      title: 'Breakthrough Research Published in Nature Materials',
      excerpt: 'Laboratory research on passive film composition in corrosion-resistant alloys featured in prestigious journal.',
      content: `Groundbreaking research from the laboratory on the effect of passive film composition on electrochemical behavior of corrosion-resistant alloys has been published in Nature Materials. The study utilized Surface Enhanced Raman Spectroscopy (SERS) to provide unprecedented insights into passive film structure and properties.

      This research represents a significant advancement in understanding the fundamental mechanisms of corrosion protection in advanced alloys and has important implications for nuclear, aerospace, and marine applications.`,
      icon: <BookOpen size={24} />
    },
    {
      date: '2024-07-25',
      category: 'Funding',
      title: 'NSF Grant Awarded for Nuclear Facility Risk Assessment',
      excerpt: 'Major grant from the Nuclear Regulatory Commission supports development of probability risk assessment methods for stress corrosion cracking.',
      content: `The laboratory has been awarded a significant grant from the U.S. Nuclear Regulatory Commission to develop advanced probability risk assessment methodologies for stress corrosion cracking in nuclear facilities. This research will help improve the safety and reliability of nuclear power plant components through better understanding and prediction of environmentally assisted cracking phenomena.

      The project will combine statistical analysis, mechanistic modeling, and experimental validation to create comprehensive risk assessment tools for the nuclear industry.`,
      icon: <Award size={24} />
    }
  ]

  const upcomingEvents = [
    {
      date: '2025-02-15',
      title: 'AMPP Annual Conference 2025',
      location: 'New Orleans, LA',
      description: 'Laboratory members will present research on atmospheric corrosion and coating durability.'
    },
    {
      date: '2025-03-20',
      title: 'International Conference on Stress Corrosion Cracking',
      location: 'Virtual Event',
      description: 'Dr. Rincon will deliver keynote on environmentally assisted cracking mechanisms.'
    },
    {
      date: '2025-04-10',
      title: 'UTSA Engineering Research Symposium',
      location: 'UTSA Campus',
      description: 'Graduate students will showcase their latest research findings to the university community.'
    }
  ]

  const recentAchievements = [
    {
      title: '2021 Gulf Research Program Early-Career Research Fellow',
      recipient: 'Dr. Brendy Rincon Troconis',
      organization: 'National Academies of Sciences, Engineering, and Medicine',
      description: 'Selected for the Offshore Energy Safety Track'
    },
    {
      title: 'Best Student Paper Award',
      recipient: 'Meggan Wolanin',
      organization: 'AMPP Student Conference',
      description: 'For research on galvanic corrosion of airframe alloys'
    },
    {
      title: 'Outstanding Research Assistant Award',
      recipient: 'Luis Perdomo-Hurtado',
      organization: 'UTSA Graduate School',
      description: 'Recognition for excellence in hydrogen embrittlement research'
    }
  ]

  return (
    <div className="news-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Latest News</h1>
            <p>
              Stay updated with the latest developments, achievements, 
              and breakthroughs from the UTSA Corrosion Research Laboratory.
            </p>
          </div>
        </div>
      </section>

      {/* Main News Content */}
      <section className="section">
        <div className="container">
          <div className="news-layout">
            <div className="main-news">
              <h2>Recent News</h2>
              <div className="news-list">
                {newsItems.map((item, index) => (
                  <article key={index} className="news-item">
                    <div className="news-header">
                      <div className="news-meta">
                        <div className="news-icon">{item.icon}</div>
                        <div className="news-details">
                          <span className={`category category-${item.category.toLowerCase()}`}>
                            {item.category}
                          </span>
                          <span className="date">
                            <Calendar size={16} />
                            {new Date(item.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                    <h3>{item.title}</h3>
                    <p className="excerpt">{item.excerpt}</p>
                    <div className="news-content">
                      <p>{item.content}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="sidebar">
              {/* Upcoming Events */}
              <div className="sidebar-section">
                <h3>Upcoming Events</h3>
                <div className="events-list">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="event-item">
                      <div className="event-date">
                        <Calendar size={18} />
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="event-details">
                        <h4>{event.title}</h4>
                        <p className="event-location">{event.location}</p>
                        <p className="event-description">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Achievements */}
              <div className="sidebar-section">
                <h3>Recent Achievements</h3>
                <div className="achievements-list">
                  {recentAchievements.map((achievement, index) => (
                    <div key={index} className="achievement-item">
                      <div className="achievement-icon">
                        <Award size={20} />
                      </div>
                      <div className="achievement-details">
                        <h4>{achievement.title}</h4>
                        <p className="recipient">{achievement.recipient}</p>
                        <p className="organization">{achievement.organization}</p>
                        <p className="description">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .news-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
        }

        .main-news h2 {
          color: var(--primary-color);
          margin-bottom: 2rem;
          border-bottom: 2px solid var(--primary-color);
          padding-bottom: 0.5rem;
        }

        .news-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .news-item {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-light);
          border: 1px solid var(--border-color);
          transition: var(--transition);
        }

        .news-item:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-medium);
        }

        .news-header {
          margin-bottom: 1rem;
        }

        .news-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .news-icon {
          color: var(--primary-color);
        }

        .news-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .category {
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          width: fit-content;
        }

        .category-award {
          background: #fff3cd;
          color: #856404;
        }

        .category-research {
          background: #d1ecf1;
          color: #0c5460;
        }

        .category-collaboration {
          background: #d4edda;
          color: #155724;
        }

        .category-student {
          background: #f8d7da;
          color: #721c24;
        }

        .category-publication {
          background: #e2e3e5;
          color: #383d41;
        }

        .category-funding {
          background: #cce5ff;
          color: #004085;
        }

        .date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .news-item h3 {
          color: var(--primary-color);
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .excerpt {
          color: var(--text-secondary);
          font-weight: 500;
          margin-bottom: 1rem;
          border-left: 4px solid var(--primary-color);
          padding-left: 1rem;
        }

        .news-content p {
          color: var(--text-secondary);
          line-height: 1.7;
          margin: 0;
        }

        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .sidebar-section {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-light);
          border: 1px solid var(--border-color);
        }

        .sidebar-section h3 {
          color: var(--primary-color);
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }

        .events-list,
        .achievements-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .event-item {
          display: flex;
          gap: 1rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .event-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .event-date {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          color: var(--primary-color);
          font-weight: 600;
          font-size: 0.875rem;
          min-width: 60px;
        }

        .event-details h4 {
          color: var(--primary-color);
          margin-bottom: 0.5rem;
          font-size: 1rem;
          line-height: 1.3;
        }

        .event-location {
          color: var(--accent-color);
          font-weight: 500;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        .event-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 0;
        }

        .achievement-item {
          display: flex;
          gap: 1rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .achievement-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .achievement-icon {
          color: var(--accent-color);
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .achievement-details h4 {
          color: var(--primary-color);
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          line-height: 1.3;
        }

        .recipient {
          color: var(--accent-color);
          font-weight: 600;
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
        }

        .organization {
          color: var(--text-secondary);
          font-style: italic;
          margin-bottom: 0.5rem;
          font-size: 0.825rem;
        }

        .description {
          color: var(--text-secondary);
          font-size: 0.825rem;
          line-height: 1.4;
          margin: 0;
        }

        @media (max-width: 768px) {
          .news-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .news-meta {
            flex-direction: column;
            align-items: flex-start;
          }

          .event-item,
          .achievement-item {
            flex-direction: column;
            gap: 0.5rem;
          }

          .event-date {
            flex-direction: row;
            align-items: center;
            min-width: auto;
          }
        }
      `}</style>
    </div>
  )
}

export default News
