import { Award, Trophy, GraduationCap, Users, Calendar } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      year: '2018',
      type: 'Internship',
      title: 'Stephanie Garcia Internship at Andeavor',
      description: 'Stephanie Garcia will be working at Andeavor through Vesta as an intern during the summer of 2018.',
      recipient: 'Stephanie Garcia',
      icon: <Users size={24} />
    },
    {
      year: '2018',
      type: 'Research Presentation',
      title: 'Sandia National Lab Research Presentation',
      description: 'Zach Huber was invited to present his research at Sandia National Lab in spring 2018.',
      recipient: 'Zach Huber',
      icon: <GraduationCap size={24} />
    },
    {
      year: '2018',
      type: 'Scholarship',
      title: 'Office of Undergraduate Research (OUR) Scholarship',
      description: 'Victor Palos received the Office of Undergraduate Research (OUR) Scholarship for spring 2018.',
      recipient: 'Victor Palos',
      icon: <Award size={24} />
    },
    {
      year: '2018',
      type: 'Internship',
      title: 'TOYOTA Internship',
      description: 'Sean Nolen completed an internship at TOYOTA during the fall of 2017 and will be working there as an intern again during the summer of 2018.',
      recipient: 'Sean Nolen',
      icon: <Users size={24} />
    },
    {
      year: '2017',
      type: 'Grant',
      title: 'Nuclear Regulatory Commission Faculty Development Grant',
      description: 'The Corrosion Research Laboratory received a Nuclear Regulatory Commission Faculty Development Grant in 2017.',
      recipient: 'Corrosion Research Laboratory',
      icon: <Trophy size={24} />
    },
    {
      year: '2017',
      type: 'Scholarship',
      title: 'Office of Undergraduate Research (OUR) Scholarship',
      description: 'Sean Nolen received the Office of Undergraduate Research (OUR) Scholarship for summer 2017.',
      recipient: 'Sean Nolen',
      icon: <Award size={24} />
    },
    {
      year: '2017',
      type: 'Grant',
      title: 'NACE Research Seed Grant',
      description: 'The Corrosion Research Laboratory received the NACE Research Seed Grant 2017.',
      recipient: 'Corrosion Research Laboratory',
      icon: <Trophy size={24} />
    },
    {
      year: '2017',
      type: 'Travel Award',
      title: 'UTSA COE Travel Award',
      description: 'Dr. Rincon was the recipient of the UTSA COE Travel Award 2017.',
      recipient: 'Dr. Brendy Rincon',
      icon: <Award size={24} />
    },
    {
      year: '2016',
      type: 'Travel Grant',
      title: 'NSF ASSIST Travel Grant',
      description: 'Dr. Rincon received the NSF ASSIST Travel grant for the Early-Faculty Development Symposium at the 28th Annual HENAAC Conference 2016.',
      recipient: 'Dr. Brendy Rincon',
      icon: <Award size={24} />
    },
    {
      year: '2016',
      type: 'Grant',
      title: 'NACE Research Seed Grant',
      description: 'The Corrosion Research Laboratory received the NACE Research Seed Grant 2016.',
      recipient: 'Corrosion Research Laboratory',
      icon: <Trophy size={24} />
    }
  ]

  const achievementTypes = {
    'Grant': { color: '#2E86C1', bg: '#EBF5FB' },
    'Award': { color: '#D35400', bg: '#FDF2E9' },
    'Travel Award': { color: '#8E44AD', bg: '#F4ECF7' },
    'Travel Grant': { color: '#8E44AD', bg: '#F4ECF7' },
    'Scholarship': { color: '#28B463', bg: '#E8F8F5' },
    'Internship': { color: '#F39C12', bg: '#FEF9E7' },
    'Research Presentation': { color: '#E74C3C', bg: '#FDEDEC' }
  }

  const groupedAchievements = achievements.reduce((acc, achievement) => {
    const year = achievement.year
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(achievement)
    return acc
  }, {})

  const years = Object.keys(groupedAchievements).sort((a, b) => b - a)

  return (
    <div className="achievements-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <Trophy size={48} className="hero-icon" />
            <h1>Achievements & Recognition</h1>
            <p>
              Celebrating the accomplishments of our laboratory members, 
              research milestones, and institutional recognition.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="section">
        <div className="container">
          <div className="achievements-timeline">
            {years.map((year) => (
              <div key={year} className="year-section">
                <div className="year-header">
                  <h2 className="year-title">{year}</h2>
                  <div className="year-line"></div>
                </div>
                
                <div className="achievements-grid">
                  {groupedAchievements[year].map((achievement, index) => {
                    const typeStyle = achievementTypes[achievement.type] || { color: '#34495E', bg: '#ECF0F1' }
                    
                    return (
                      <div key={index} className="achievement-card">
                        <div className="achievement-header">
                          <div className="achievement-icon" style={{ color: typeStyle.color }}>
                            {achievement.icon}
                          </div>
                          <div className="achievement-meta">
                            <span 
                              className="achievement-type" 
                              style={{ 
                                color: typeStyle.color, 
                                backgroundColor: typeStyle.bg 
                              }}
                            >
                              {achievement.type}
                            </span>
                            <span className="achievement-year">
                              <Calendar size={14} />
                              {achievement.year}
                            </span>
                          </div>
                        </div>
                        
                        <h3 className="achievement-title">{achievement.title}</h3>
                        <p className="achievement-description">{achievement.description}</p>
                        <p className="achievement-recipient">
                          <strong>Recipient:</strong> {achievement.recipient}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratory Goal */}
      <section className="section section-alt">
        <div className="container">
          <div className="goal-section text-center">
            <h2>Corrosion Laboratory Goal</h2>
            <p className="goal-text">
              Identify and characterize the scientific mechanisms specific to our principal areas of research
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-icon {
          color: var(--accent-color);
          margin-bottom: 1rem;
        }

        .achievements-timeline {
          max-width: 1000px;
          margin: 0 auto;
        }

        .year-section {
          margin-bottom: 4rem;
        }

        .year-header {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
        }

        .year-title {
          color: var(--primary-color);
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 2rem 0 0;
          min-width: 80px;
        }

        .year-line {
          flex: 1;
          height: 3px;
          background: var(--gradient-primary);
          border-radius: 2px;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .achievement-card {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-light);
          border-left: 5px solid var(--primary-color);
          transition: var(--transition);
        }

        .achievement-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-heavy);
        }

        .achievement-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .achievement-icon {
          padding: 0.5rem;
          border-radius: 50%;
          background: rgba(0,0,0,0.05);
        }

        .achievement-meta {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .achievement-type {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .achievement-year {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .achievement-title {
          color: var(--primary-color);
          margin-bottom: 0.75rem;
          font-size: 1.25rem;
        }

        .achievement-description {
          color: var(--text-color);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .achievement-recipient {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin: 0;
        }

        .goal-section {
          background: white;
          padding: 3rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-light);
        }

        .goal-text {
          font-size: 1.25rem;
          color: var(--text-color);
          font-style: italic;
          max-width: 600px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .achievements-grid {
            grid-template-columns: 1fr;
          }
          
          .year-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .year-title {
            margin: 0;
          }
          
          .achievement-header {
            flex-direction: column;
            gap: 0.75rem;
          }
          
          .achievement-meta {
            flex-direction: row;
            align-items: center;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Achievements
