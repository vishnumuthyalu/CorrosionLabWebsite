import { Award, Trophy, GraduationCap, Users, Calendar, Star, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import '../styles/Achievements.css'

const Achievements = () => {
  const [showAllPI, setShowAllPI] = useState(false)
  const [showAllLab, setShowAllLab] = useState(false)
  const principalInvestigatorAchievements = [
    {
      year: '2024-2025',
      title: 'UTSA KLESSE Fellowship',
      description: '2024 UTSA KLESSE Fellowship (given in Spring 2025).',
      type: 'Fellowship'
    },
    {
      year: '2024-2025',
      title: 'UTSA KLESSE College Award for Research Expenditures',
      description: '2024 and 2025 UTSA KLESSE College Award for Research Expenditures above $250,000.',
      type: 'Award'
    },
    {
      year: '2023',
      title: 'Early Career Excellence Award from AMPP',
      description: '2023 "Early Career Excellence Award" from AMPP (Association for Materials Protection & Performance). For her commitment to the advancement of materials protection and corrosion control research and for establishing herself as an inspiring educator and outstanding research leader in corrosion at a minority-serving university.',
      type: 'Award'
    },
    {
      year: '2021',
      title: 'Gulf Research Program Early-Career Research Fellowship',
      description: '2021 Gulf Research Program Early-Career Research Fellowship in the Offshore Energy Safety Track from the National Academies of Science, Engineering, and Medicine.',
      type: 'Fellowship'
    },
    {
      year: '2020-2021',
      title: 'Most Productive CAMLS Researcher',
      description: 'Most Productive CAMLS Researcher in Academic Year 2020-2021. CAMLS is the Center for Advanced Manufacturing & Lean Systems at UTSA.',
      type: 'Recognition'
    },
    {
      year: '2019',
      title: 'Most Well-funded Researcher of the Year',
      description: '2019 Most Well-funded Researcher of the Year (Assistant Professor Level). In recognition of her high research expenditure. UTSA Mechanical Engineering Award.',
      type: 'Award'
    },
    {
      year: '2019',
      title: 'Strongest Graduate Student Supporter of the Year',
      description: '2019 Strongest Graduate Student Supporter of the Year (Assistant Professor Level). UTSA Mechanical Engineering Award.',
      type: 'Award'
    },
    {
      year: '2018',
      title: 'Strongest Graduate Student Supporter of the Year',
      description: '2018 Strongest Graduate Student Supporter of the Year (Assistant Professor Level). UTSA Mechanical Engineering Award.',
      type: 'Award'
    },
    {
      year: '2017',
      title: 'UTSA COE Travel Award',
      description: 'Recipient of UTSA COE Travel Award 2017.',
      type: 'Travel Award'
    },
    {
      year: '2016',
      title: 'NSF ASSIST Travel Grant',
      description: 'Recipient of the NSF ASSIST Travel grant for the Early-Faculty Development Symposium at the 28th Annual HENAAC Conference 2016.',
      type: 'Travel Grant'
    },
    {
      year: '2013',
      title: 'Perfect 4.00 GPA Recognition',
      description: 'Recognition for completion of Doctoral degree in Materials Science and Engineering at the Ohio State University, while maintaining a perfect 4.00 GPA 2013.',
      type: 'Academic Achievement'
    },
    {
      year: '2013',
      title: 'Marcel Pourbaix Poster Award - Second Place',
      description: 'Marcel Pourbaix Poster Award for Corrosion Science, Second Place. NACE International Conference CORROSION 2013.',
      type: 'Award'
    },
    {
      year: '2011',
      title: 'Richard "Dick" Kinzie Poster Award - Second Place',
      description: 'Richard "Dick" Kinzie Poster Award for Applied Corrosion Technology, Second Place. DoD Conference 2011.',
      type: 'Award'
    },
    {
      year: '2011',
      title: 'NACE Foundation Academic Scholarship',
      description: 'Recipient of the "NACE Foundation Academic Scholarship 2011".',
      type: 'Scholarship'
    },
    {
      year: '2008',
      title: 'Dr. Andres Bello Best Research Award',
      description: 'Winner of "Dr. Andres Bello", The Best Research of the Year with the thesis "Evaluation of Cathodic Protection in presence of Sulfate Reducing Bacteria mixed cultures". Universidad del Zulia, Venezuela, 2008.',
      type: 'Research Award'
    },
    {
      year: '2007',
      title: 'Valedictorian',
      description: 'Valedictorian in class 2007.',
      type: 'Academic Achievement'
    },
    {
      year: '2005',
      title: 'NACE/CC Technologies Summer Internship',
      description: 'Recipient of the "NACE/CC Technologies Summer Internship" in 2005.',
      type: 'Internship'
    },
    {
      year: '2002-2007',
      title: 'Honor\'s List Recognition',
      description: 'Honor\'s List all years during undergraduate studies since 2002.',
      type: 'Academic Achievement'
    }
  ]

  const labMemberAchievements = [
    {
      year: '2025',
      recipient: 'Meggan Wolanin',
      title: '3rd place AMPP Marcel Pourbaix Corrosion Science Award',
      description: '2025 3rd place AMPP Marcel Pourbaix Corrosion Science Award for the poster "Corrosion Kinetics and Morphology in AA7075/SS316 Galvanic Couples under Environmental and Mechanical Loading."',
      type: 'Award'
    },
    {
      year: '2025',
      recipient: 'Nicole Ituarte Cedillo',
      title: 'Klesse College UG Research Program',
      description: 'Spring 2025 Klesse College UG Research Program.',
      type: 'Research Program'
    },
    {
      year: '2024',
      recipient: 'Jorge Escribano',
      title: '1st place AMPP Marcel Pourbaix Corrosion Science',
      description: '2024 1st place AMPP Marcel Pourbaix Corrosion Science for the poster "Evaluating 1-Benzyl-4-Phenyl-1H-1,2,3-Triazole: An Eco-Friendly Organic Inhibitor on Diverse Steel Reinforcements."',
      type: 'Award'
    },
    {
      year: '2024',
      recipient: 'Meggan Wolanin',
      title: '2nd place AMPP Mars Fontana Corrosion Engineering',
      description: '2024 2nd place AMPP Mars Fontana Corrosion Engineering for the poster "Galvanic Corrosion in Airframe Alloys under Environmental And Mechanical Loading."',
      type: 'Award'
    },
    {
      year: '2024',
      recipient: 'Tasnia Fatima',
      title: '2nd place AMPP Harvey Herro Applied Corrosion Technology',
      description: '2024 2nd place AMPP Harvey Herro Applied Corrosion Technology for the poster "Atmospheric Pitting Corrosion of Additively Manufactured Stainless Steel 316L Fabricated from Carbon Nanotube Containing Feedstock."',
      type: 'Award'
    },
    {
      year: '2023',
      recipient: 'Roslyn Romero',
      title: 'Klesse College Summer Undergraduate Research Program',
      description: 'Klesse College Summer Undergraduate Research Program (Summer 2023).',
      type: 'Research Program'
    },
    {
      year: '2023',
      recipient: 'Alyssa Garcia',
      title: 'Klesse College Summer Undergraduate Research Program',
      description: 'Klesse College Summer Undergraduate Research Program (Summer 2023).',
      type: 'Research Program'
    },
    {
      year: '2023',
      recipient: 'Haya Abdelaziz',
      title: 'Klesse College Summer Undergraduate Research Program',
      description: 'Klesse College Summer Undergraduate Research Program (Spring 2023).',
      type: 'Research Program'
    },
    {
      year: '2022',
      recipient: 'Jorge Escribano',
      title: 'Dwight David Eisenhower Transportation Fellowship',
      description: 'Jorge Escribano received the 2022 Dwight David Eisenhower Transportation Fellowship from the US Department of Transportation Federal Highway Administration.',
      type: 'Fellowship'
    },
    {
      year: '2022',
      recipient: 'Mariana Garcia',
      title: 'UTSA Undergraduate Research Spring and Summer Scholarship',
      description: 'Mariana Garcia, UTSA Undergraduate Research Spring and Summer Scholarship 2022.',
      type: 'Scholarship'
    },
    {
      year: '2021',
      recipient: 'Drishya Dahal',
      title: 'Dwight David Eisenhower Transportation Fellowship',
      description: 'Drishya Dahal received the 2021 Dwight David Eisenhower Transportation Fellowship from the US Department of Transportation Federal Highway Administration.',
      type: 'Fellowship'
    },
    {
      year: '2021',
      recipient: 'Trevor Tacket',
      title: 'CEID Undergraduate Research Program',
      description: 'Trevor Tacket was selected to participate in the Fall 2021 CEID Undergraduate Research Program.',
      type: 'Research Program'
    },
    {
      year: '2021',
      recipient: 'Joshua Pack',
      title: 'CEID Undergraduate Research Program',
      description: 'Joshua Pack was selected to participate in the Fall 2021 CEID Undergraduate Research Program.',
      type: 'Research Program'
    },
    {
      year: '2021',
      recipient: 'Vinicio Ynciarte',
      title: '3rd Place Harvey Herro for Applied Corrosion Technology',
      description: 'Vinicio Ynciarte, 2021 AMPP 3rd Place Harvey Herro for Applied Corrosion Technology during the CORROSION Conference and Expo.',
      type: 'Award'
    },
    {
      year: '2021',
      recipient: 'Trevor Tacket',
      title: 'Gordon Rankin Corrosion Engineering Scholarship',
      description: 'Trevor Tacket. Gordon Rankin Corrosion Engineering Scholarship 2021 sponsored by NACE International.',
      type: 'Scholarship'
    },
    {
      year: '2021',
      recipient: 'Trevor Tacket',
      title: 'Lee Magnon Memorial Scholarship',
      description: 'Trevor Tacket. Lee Magnon Memorial Scholarship 2021 sponsored by NACE International.',
      type: 'Scholarship'
    },
    {
      year: '2021',
      recipient: 'Trevor Tackett',
      title: 'COE/CACP Undergraduate Research Program',
      description: 'Trevor Tackett. COE/CACP Undergraduate Research Program Spring 2021.',
      type: 'Research Program'
    },
    {
      year: '2020',
      recipient: 'Theresa Enyeart',
      title: 'UTSA Undergraduate Research Spring Scholarship',
      description: 'Theresa Enyeart. UTSA Undergraduate Research Spring Scholarship 2020.',
      type: 'Scholarship'
    },
    {
      year: '2020',
      recipient: 'Sadot Martinez',
      title: 'UTSA Undergraduate Research Spring Scholarship',
      description: 'Sadot Martinez. UTSA Undergraduate Research Spring Scholarship 2020.',
      type: 'Scholarship'
    },
    {
      year: '2020',
      recipient: 'Sophia Nealon',
      title: 'UTSA U-GREAT Program Spring Scholarship',
      description: 'Sophia Nealon. UTSA U-GREAT (Undergraduate Research, Education and Training) program Spring Scholarship 2020 funded by REEU/NIFA through TSERI.',
      type: 'Scholarship'
    },
    {
      year: '2020',
      recipient: 'Theresa Enyeart',
      title: 'SUMMER Undergraduate Research Assistantship',
      description: 'Theresa Enyeart. SUMMER Undergraduate Research Assistantship awarded through TSERI and the U.S. Department of Agriculture U-Great Program 2020.',
      type: 'Research Assistantship'
    },
    {
      year: '2020',
      recipient: 'Charles McClafferty',
      title: 'Undergraduate Research Assistantship',
      description: 'Charles McClafferty. Undergraduate Research Assistantship awarded through TSERI and the U.S. Department of Agriculture U-Great Program Fall 2020.',
      type: 'Research Assistantship'
    },
    {
      year: '2020',
      recipient: 'Stephanie Lopez',
      title: 'COE/CACP Undergraduate Research Program',
      description: 'Stephanie Lopez. COE/CACP Undergraduate Research Program Fall 2020.',
      type: 'Research Program'
    },
    {
      year: '2018',
      recipient: 'Victor Palos',
      title: 'UTSA Undergraduate Research Spring Scholarship',
      description: 'Victor Palos. UTSA Undergraduate Research Spring Scholarship 2018.',
      type: 'Scholarship'
    },
    {
      year: '2018',
      recipient: 'Tasnia Fatima',
      title: 'UTSA ME Competitive Scholarship',
      description: 'Tasnia Fatima. UTSA ME Competitive Scholarship 2018.',
      type: 'Scholarship'
    },
    {
      year: '2017',
      recipient: 'Sean Nolen',
      title: 'UTSA Undergraduate Research Scholarship',
      description: 'Sean Nolen. UTSA Undergraduate Research Scholarship 2017.',
      type: 'Scholarship'
    }
  ]

  const achievementTypes = {
    'Fellowship': { color: '#8E44AD', bg: '#F4ECF7' },
    'Award': { color: '#D35400', bg: '#FDF2E9' },
    'Recognition': { color: '#E74C3C', bg: '#FDEDEC' },
    'Travel Award': { color: '#2E86C1', bg: '#EBF5FB' },
    'Travel Grant': { color: '#2E86C1', bg: '#EBF5FB' },
    'Academic Achievement': { color: '#28B463', bg: '#E8F8F5' },
    'Research Award': { color: '#F39C12', bg: '#FEF9E7' },
    'Scholarship': { color: '#17A2B8', bg: '#E1F5FE' },
    'Internship': { color: '#6C757D', bg: '#F8F9FA' },
    'Research Program': { color: '#20C997', bg: '#E8F8F5' },
    'Research Assistantship': { color: '#FD7E14', bg: '#FFF3CD' }
  }

  const getIcon = (type) => {
    switch(type) {
      case 'Fellowship':
      case 'Award':
      case 'Recognition':
        return <Trophy size={24} />
      case 'Scholarship':
      case 'Research Assistantship':
        return <Award size={24} />
      case 'Academic Achievement':
        return <GraduationCap size={24} />
      case 'Research Program':
        return <Users size={24} />
      default:
        return <Star size={24} />
    }
  }

  return (
    <div className="achievements-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <Trophy size={48} className="hero-icon" />
            <h1>Achievements & Recognition</h1>
            <p>
              Celebrating the accomplishments of our Principal Investigator and laboratory members, 
              research milestones, and institutional recognition.
            </p>
          </div>
        </div>
      </section>

      {/* Principal Investigator Achievements */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Principal Investigator Achievements</h2>
            <p className="section-subtitle">Dr. Brendy Rincon's Awards and Recognition</p>
          </div>
          
          <div className="achievements-grid">
            {(showAllPI ? principalInvestigatorAchievements : principalInvestigatorAchievements.slice(0, 4)).map((achievement, index) => {
              const typeStyle = achievementTypes[achievement.type] || { color: '#34495E', bg: '#ECF0F1' }
              
              return (
                <div key={index} className="achievement-card">
                  <div className="achievement-header">
                    <div className="achievement-icon" style={{ color: typeStyle.color }}>
                      {getIcon(achievement.type)}
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
                </div>
              )
            })}
          </div>
          
          {principalInvestigatorAchievements.length > 4 && (
            <div className="see-more-container">
              <button 
                onClick={() => setShowAllPI(!showAllPI)}
                className="see-more-btn"
              >
                {showAllPI ? (
                  <>
                    <span>Show Less</span>
                    <ChevronUp size={20} />
                  </>
                ) : (
                  <>
                    <span>See More ({principalInvestigatorAchievements.length - 4} more)</span>
                    <ChevronDown size={20} />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lab Members Achievements */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Lab Members Achievements</h2>
            <p className="section-subtitle">Recognition and Awards for Our Research Team</p>
          </div>
          
          <div className="achievements-grid">
            {(showAllLab ? labMemberAchievements : labMemberAchievements.slice(0, 4)).map((achievement, index) => {
              const typeStyle = achievementTypes[achievement.type] || { color: '#34495E', bg: '#ECF0F1' }
              
              return (
                <div key={index} className="achievement-card">
                  <div className="achievement-header">
                    <div className="achievement-icon" style={{ color: typeStyle.color }}>
                      {getIcon(achievement.type)}
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
          
          {labMemberAchievements.length > 4 && (
            <div className="see-more-container">
              <button 
                onClick={() => setShowAllLab(!showAllLab)}
                className="see-more-btn"
              >
                {showAllLab ? (
                  <>
                    <span>Show Less</span>
                    <ChevronUp size={20} />
                  </>
                ) : (
                  <>
                    <span>See More ({labMemberAchievements.length - 4} more)</span>
                    <ChevronDown size={20} />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Laboratory Goal */}
      <section className="section">
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
