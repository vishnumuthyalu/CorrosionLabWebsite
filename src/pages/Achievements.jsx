import { Award, Trophy, GraduationCap, Users, Calendar } from 'lucide-react'
import '../styles/Achievements.css'

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
    </div>
  )
}

export default Achievements
