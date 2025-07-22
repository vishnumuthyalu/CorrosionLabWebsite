import { Calendar, Award, Users, BookOpen, ExternalLink } from 'lucide-react'

const News = () => {
  const newsItems = [
    {
      date: '2017-12-01',
      category: 'Partnership',
      title: 'UTSA partners with SwRI on corrosion and energy projects',
      excerpt: 'The University of Texas at San Antonio (UTSA) and Southwest Research Institute (SwRI) have announced two new research projects, which will receive a total of $250,000 in funding.',
      content: `The University of Texas at San Antonio (UTSA) and Southwest Research Institute (SwRI) have announced two new research projects, which will receive a total of $250,000 in funding. The first project will research a new technique to mitigate cracking and corrosion in piping and related equipment used by the oil and gas industry. The second will investigate the development of a traffic management system that will be powered using sustainable thermal energy.`,
      icon: <Users size={24} />,
      link: 'http://www.utsa.edu/today/2017/12/story/UTSA-SwRIprojects.html'
    },
    {
      date: '2017-08-01',
      category: 'Funding',
      title: 'Nuclear Regulatory Commission awards UTSA $849,351 to support faculty and student development',
      excerpt: 'The U.S. Nuclear Regulatory Commission (NRC) has awarded The University of Texas at San Antonio (UTSA) two grants totaling $849,351.',
      content: `The U.S. Nuclear Regulatory Commission (NRC) has awarded The University of Texas at San Antonio (UTSA) two grants totaling $849,351. The funding will support the creation of new faculty development and graduate fellowship initiatives focused on nuclear safety research and education in the UTSA College of Engineering (COE).`,
      icon: <Award size={24} />,
      link: 'https://www.utsa.edu/today/2017/08/story/NRC-grant.html'
    },
    {
      date: '2017-11-01',
      category: 'Research',
      title: 'New Research Project Aims to Mitigate Corrosion in Oil, Gas Equipment',
      excerpt: 'The Southwest Research Institute (SwRI) and The University of Texas at San Antonio (UTSA) recently announced a project to research a new technique to mitigate cracking and corrosion in piping and related oil and gas industry equipment.',
      content: `The Southwest Research Institute (SwRI) (San Antonio, Texas) and The University of Texas at San Antonio (UTSA) (San Antonio, Texas) recently announced a project to research a new technique to mitigate cracking and corrosion in piping and related oil and gas industry equipment.The project will receive $125,000 in funding through the school's Connecting through Research Partnerships (Connect) program, sponsored by the office of the vice president for research at UTSA and SwRI.`,
      icon: <BookOpen size={24} />,
      link: 'http://www.materialsperformance.com/news/2017/11/new-research-project-aims-to-mitigate-corrosion-in-oil-gas-equipment'
    },
    {
      date: '2017-01-01',
      category: 'Research',
      title: 'Researchers Develop Corrosion and Traffic Solutions',
      excerpt: 'Two new research projects: a new method for mitigating cracking and corrosion in piping used by the oil and gas sectors, and a traffic management system that can be both powered by sustainable thermal energy.',
      content: `Two new research projects: a new method for mitigating cracking and corrosion in piping used by the oil and gas sectors, and a traffic management system that can be both powered by sustainable thermal energy and be implemented in areas with less access to traffic signage. The projects will be conducted through the Connecting through Research Partnerships (Connect) Program, with each receiving $125,000 in funding.`,
      icon: <BookOpen size={24} />,
      link: 'https://www.paintsquare.com/news/?fuseaction=view&id=17653'
    },
    {
      date: '2017-01-01',
      category: 'Partnership',
      title: 'SwRI, UTSA Jointly invest in corrosion, Energy projects',
      excerpt: 'Southwest Research Institute (SwRI) and The University of Texas at San Antonio (UTSA) announced two new research projects through the Connecting through Research Partnerships (Connect) Program.',
      content: `Southwest Research Institute (SwRI) and The University of Texas at San Antonio (UTSA) announced two new research projects through the Connecting through Research Partnerships (Connect) Program. Each project will receive $125,000 in funding. One project will research a new technique to mitigate cracking and corrosion in piping and related equipment used by the oil and gas industry and the other will investigate the development of a traffic management system that will be powered using sustainable thermal energy.`,
      icon: <Users size={24} />,
      link: 'https://www.swri.org/press-release/swri-utsa-jointly-invest-corrosion-energy-projects'
    },
    {
      date: '2016-08-01',
      category: 'Award',
      title: 'NACE International Awards $30,000 to Support Corrosion Research',
      excerpt: 'NACE international is pleased to announce it is awarding a seed grant of $30,000 for a research project by Brendy C. Rincon Troconis of The University of Texas at San Antonio\'s (UTSA) Department of Mechanical Engineering.',
      content: `Houston, Texas – NACE international is pleased to announce it is awarding a seed grant of $30,000 for a research project by Brendy C. Rincon Troconis of The University of Texas at San Antonio's (UTSA) Department of Mechanical Engineering. Troconis' proposal, "Effect of Passive Film Composition on the Electrochemical Behavior and Cracking of Corrosion Resistant Alloys Utilizing Surface Enhanced Raman Spectroscopy," seeks to resolve issues caused by the unique conditions of downhole applications in oil wells.`,
      icon: <Award size={24} />,
      link: 'https://www.nace.org/Newsroom/Press-Releases/NACE-International-Awards-$30,000-to-Support-Corrosion-Research/'
    },
    {
      date: '2016-08-01',
      category: 'Faculty',
      title: 'New group of professors comes to UTSA from prestigious institutions',
      excerpt: 'Brendy Rincon Troconis, assistant professor of mechanical engineering, will head UTSA\'s Corrosion Research Laboratory and brings nearly a decade of experience researching corrosion in aerospace, automobile, reinforced concrete, and oil and gas applications.',
      content: `Brendy Rincon Troconis, assistant professor of mechanical engineering, will head UTSA's Corrosion Research Laboratory and brings nearly a decade of experience researching corrosion in aerospace, automobile, reinforced concrete, and oil and gas applications. She was thrilled to learn her department's mission perfectly aligns with her personal mission and she feels that she will be able to achieve all her goals at UTSA. In fact, she's already gotten off to a great start by receiving a $30,000 seed grant from NACE International for a research project she will conduct at UTSA.`,
      icon: <Users size={24} />,
      link: 'https://www.utsa.edu/today/2016/08/newfaculty.html'
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
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="read-more-link">
                          Read Full Article <ExternalLink size={16} />
                        </a>
                      )}
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

        .events-list {
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

        .read-more-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 500;
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          border: 2px solid var(--primary-color);
          border-radius: var(--border-radius);
          transition: var(--transition);
        }

        .read-more-link:hover {
          background: var(--primary-color);
          color: white;
          transform: translateY(-2px);
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

          .event-item {
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
