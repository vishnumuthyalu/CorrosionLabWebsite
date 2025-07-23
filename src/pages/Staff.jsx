import { ExternalLink, Mail, GraduationCap, Award } from 'lucide-react'
import '../styles/Staff.css'

const Staff = () => {
  const principalInvestigator = {
    name: 'Prof. Brendy Rincon Troconis, Ph.D.',
    title: 'Principal Investigator & Associate Professor',
    department: 'Department of Mechanical, Aerospace, and Industrial Engineering',
    image: '/professor_rincon_headshot.jpg',
    bio: `Dr. Brendy Rincon Troconis is an Associate Professor in the Department of
    Mechanical, Aerospace, and Industrial Engineering at the University of Texas at San
    Antonio (UTSA). She holds a Sc.B. in Chemical Engineering from Universidad del
    Zulia (Venezuela), and M.S. and Ph.D. degrees in Materials Science and Engineering
    from The Ohio State University, where she conducted research at the Fontana
    Corrosion Center. Before joining UTSA in 2016, she was a research associate at the
    University of Virginia's Center for Electrochemical Science and Engineering.`,
    expertise: [
      'Aqueous Corrosion',
      'Atmospheric Corrosion',
      'Localized Corrosion',
      'Galvanic Corrosion',
      'Microbiologically Induced Corrosion',
      'Coating Adhesion Durability',
      'Environmentally Assisted Cracking'
    ],
    awards: [
      '2023 AMPP Early-Career Award',
      '2021 Gulf Research Program Early-Career Research Fellow (National Academies)'
    ],
    links: {
      googleScholar: 'https://scholar.google.com/citations?hl=en&user=JstfCoVn5w0C',
      linkedin: 'https://www.linkedin.com/in/brendyrincon/',
      email: 'brendy.rincon@utsa.edu'
    }
  }

  const visitingScientists = [
    {
      name: 'Oladis Troconis de Rincón, Ph.D',
      title: 'Research Scientist at UTSA',
      image: '/oladis_headshot.png',
      bio: `Dr. Oladis Troconis de Rincón is a Research Scientist at UTSA. She works since
      1972 at the Faculty of Engineering of the Universidad del Zulia (LUZ), in
      Venezuela, where she was Founder and Former Director of the Centro de Estudios de
      Corrosión and currently continues as an Advisor. She is a Chemical Engineer and has a
      Master's Degree in Chemical Engineering from the Oklahoma University in the
      USA. She got her PhD in Fundamental and Applied Electrochemistry from the
      Universidad de los Andes in Venezuela and received a "Doctor Honoris Causa" from the
      Universidad del Zulia.`,
      specialties: [
        'Cathodic Protection',
        'Atmospheric Corrosion',
        'Corrosion Control',
        'Reinforced Concrete Pathology',
        'Metallic Structures Evaluation'
      ],
      achievements: [
        'AMPP Fellow',
        '2023 AMPP Oladis Troconis de Rincon Field Applied Technology Award (named in her honor)',
        'CP Specialist (No. 8516) from NACE International',
        'Education Director of ALCONPAT International'
      ]
    }
  ]

  const graduateResearchers = [
    {
      name: 'Meggan Wolanin',
      image: '/megan_wolanin_headshot.jpg',
      degree: 'Doctoral Student',
      research: 'Galvanic corrosion of airframe alloys under mechanical and environmental loading',
      background: 'B.S. in Mechanical Engineering from UTSA (2020)',
      joined: 'Fall 2020',
      experience: 'Experience working with lathes, mills, and welding',
      linkedin: 'https://www.linkedin.com/in/meggan-wolanin-771a1047/'
    },
    {
      name: 'Nayab Ali',
      image: '/nayab_ali_headshot.jpg',
      degree: 'Doctoral Student',
      research: 'Metal coatings (Twin Hawk project)',
      background: 'B.S. in Biomedical Sciences from Texas A&M (2008), Graduate certificate in Applied Statistics (2016), A.A.S. in HVAC Technology from Austin Community College (2018), B.S. in Mechanical Engineering from UTSA (2021)',
      joined: '2022',
      interests: 'Working in fields where corrosion science is applied to Biomedical Sciences and HVAC',
      linkedin: 'https://www.linkedin.com/in/nayabali/'
    },
    {
      name: 'Jorge Escribano',
      image: '/jorge_escribano_headshot.png',
      degree: 'Doctoral Student',
      research: 'Corrosion in reinforced concrete, studying a green organic inhibitor\'s effectiveness on steel rebars through electrochemical tests and mortar specimens',
      background: 'B.S. in Civil Engineering from UTSA',
      specialty: 'PhD in Civil Engineering at UTSA',
      industry: 'Industry-focused research on construction materials, specifically Magnesium Oxychloride (MOC) boards for DuPont',
      goals: 'Aims to work in a structural firm to mitigate industry corrosion risks',
      linkedin: 'https://www.linkedin.com/in/jorge-escribano-2349b31a5/'
    },
    {
      name: 'Luis Perdomo-Hurtado',
      image: '/luis_perdamo_headshot.png',
      degree: 'Doctoral Student',
      research: 'Hydrogen embrittlement and hydrogen diffusion in additively manufactured alloys using advanced characterization techniques',
      background: 'Chemical Engineer with M.Sc. in Materials Science and Engineering',
      currentDegree: 'Ph.D. in Mechanical Engineering at UTSA',
      specialties: 'Modeling, data analysis, corrosion health monitoring, and electrochemical methods',
      aspirations: 'Advance corrosion engineering in energy and infrastructure applications',
      linkedin: 'https://www.linkedin.com/in/luis-perdomo-hurtado-4358a6210/',
      googleScholar: 'https://scholar.google.es/citations?user=r0N-Rn8AAAAJ&hl=es'
    },
    {
      name: 'Viancy Catherine Isaza Zapata',
      image: '/viancy_katherine_headshot.png',
      degree: 'Doctoral Student',
      research: 'Fatigue behavior of through-hole fastener installations in naval aircraft, developed in collaboration with The University of Texas at San Antonio and the U.S. Naval Research Laboratory',
      background: 'Mechanical Engineer with MSc in Industrial Energy Management, specializing in materials science',
      approach: 'Combines experimental and probabilistic approaches in accelerated corrosion-fatigue testing, electrochemical analyses, and microscopic characterization',
      focus: 'Understanding the impact of installation variables, galvanic corrosion, and environmental factors on fatigue life',
      modeling: 'Contributes to predictive modeling using Bayesian Networks, enhancing digital twin capabilities for aerospace maintenance',
      linkedin: 'https://www.linkedin.com/in/viancy-catherine-isaza-zapata-8b089a26a/',
      googleScholar: 'https://scholar.google.com/citations?user=AeyW2REAAAAJ&hl=en&oi=ao'
    }
  ]

  const alumni = [
    { name: 'Tasnia Fatima', degree: 'Doctoral', linkedin: 'https://www.linkedin.com/in/tasnia-fatima-09237968/' },
    { name: 'Drishya Dahal', degree: 'Master', linkedin: 'https://www.linkedin.com/in/drishyadahal/' },
    { name: 'Vinicio Inciarte', degree: 'Master' },
    { name: 'Asfia Tanjim Totini', degree: 'Master', linkedin: 'https://www.linkedin.com/in/asfia-tanjim-totini/' },
    { name: 'Vangelina Osteguin', degree: 'Master', linkedin: 'https://www.linkedin.com/in/vangelina-osteguin/' },
    { name: 'Loreto J. Dacio', degree: 'Master', linkedin: 'https://www.linkedin.com/in/loreto-jonathan-p-dacio-eit-b9812a13b/' }
  ]

  const interns = [
    { name: 'Nicole Ituarte Cedillo' },
    { name: 'Stephanie Lopez' },
    { name: 'Charles McClafferty' }
    
  ]

  return (
    <div className="staff-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Team</h1>
            <p>
              Meet the dedicated researchers advancing corrosion science and engineering
              at the UTSA Corrosion Research Laboratory.
            </p>
          </div>
        </div>
      </section>

      {/* Principal Investigator */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Principal Investigator</h2>
          <div className="pi-profile">
            <div className="pi-image">
              <img src={principalInvestigator.image} alt={principalInvestigator.name} />
              
              <div className="expertise">
                <h5>Research Expertise</h5>
                <div className="specialty-tags">
                  {principalInvestigator.expertise.map((area, index) => (
                    <span key={index} className="specialty-tag">{area}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="pi-content">
              <h3>{principalInvestigator.name}</h3>
              <h4>{principalInvestigator.title}</h4>
              <p className="department">{principalInvestigator.department}</p>
              
              <div className="bio">
                <p>{principalInvestigator.bio}</p>
                
                <p>
                  Dr. Rincon is the founder of the UTSA Corrosion Research Laboratory and an
                  expert in aqueous corrosion, with research spanning atmospheric, localized, galvanic,
                  and microbiologically induced corrosion, as well as coating adhesion durability
                  and environmentally assisted cracking. She has led and contributed to numerous
                  multidisciplinary, externally funded projects supported by the US NRC, DOE, ONR,
                  AMPP, and the industry, with a focus on infrastructure sustainability,
                  resiliency, and corrosion control.
                </p>
              </div>

              <div className="awards">
                <h5><Award size={20} /> Awards & Recognition</h5>
                <ul>
                  {principalInvestigator.awards.map((award, index) => (
                    <li key={index}>{award}</li>
                  ))}
                </ul>
              </div>

              <div className="contact-links">
                <a href={`mailto:${principalInvestigator.links.email}`} className="contact-link">
                  <Mail size={18} /> <span>Email</span>
                </a>
                <a href={principalInvestigator.links.googleScholar} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <GraduationCap size={18} /> <span>Google Scholar</span> <ExternalLink size={14} />
                </a>
                <a href={principalInvestigator.links.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <ExternalLink size={18} /> <span>LinkedIn</span> <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visiting Scientists */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Visiting Scientists</h2>
          {visitingScientists.map((scientist, index) => (
            <div key={index} className="scientist-profile">
              <div className="scientist-image">
                <img src={scientist.image} alt={scientist.name} />
                
                <div className="specialties">
                  <h5>Research Specialties</h5>
                  <div className="specialty-tags">
                    {scientist.specialties.map((specialty, idx) => (
                      <span key={idx} className="specialty-tag">{specialty}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="scientist-content">
                <h3>{scientist.name}</h3>
                <h4>{scientist.title}</h4>
                <p>{scientist.bio}</p>

                <div className="achievements">
                  <h5>Achievements</h5>
                  <ul>
                    {scientist.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Graduate Researchers */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Graduate Researchers</h2>
          <div className="researchers-grid">
            {graduateResearchers.map((researcher, index) => (
              <div key={index} className="researcher-card">
                <div className="researcher-image">
                  <img src={researcher.image} alt={researcher.name} />
                </div>
                <h4>{researcher.name}</h4>
                <p className="degree">{researcher.degree}</p>
                
                <div className="research-info">
                  <h5>Research Focus</h5>
                  <p>{researcher.research}</p>
                  
                  {researcher.background && (
                    <>
                      <h5>Background</h5>
                      <p>{researcher.background}</p>
                    </>
                  )}
                  
                  {researcher.joined && (
                    <p><strong>Joined Lab:</strong> {researcher.joined}</p>
                  )}
                </div>

                <div className="researcher-links">
                  {researcher.linkedin && (
                    <a href={researcher.linkedin} target="_blank" rel="noopener noreferrer" className="researcher-link">
                      LinkedIn <ExternalLink size={14} />
                    </a>
                  )}
                  {researcher.googleScholar && (
                    <a href={researcher.googleScholar} target="_blank" rel="noopener noreferrer" className="researcher-link">
                      Google Scholar <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni & Interns */}
      <section className="section section-alt">
        <div className="container">
          <div className="alumni-interns-grid">
            <div className="alumni-section">
              <h2>Alumni</h2>
              <div className="alumni-grid">
                {alumni.map((person, index) => (
                  <div key={index} className="alumni-card">
                    <div className="alumni-avatar">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h4>{person.name}</h4>
                    <p>{person.degree}</p>
                    {person.linkedin && (
                      <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="alumni-link">
                        LinkedIn <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="interns-section">
              <h2>Current Interns</h2>
              <div className="interns-list">
                {interns.map((intern, index) => (
                  <div key={index} className="intern-item">
                    <div className="intern-avatar">
                      {intern.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span>{intern.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Staff
