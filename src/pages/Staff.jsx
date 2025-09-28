import { useState } from 'react'
import { ExternalLink, Mail, GraduationCap, Award, ChevronLeft, ChevronRight } from 'lucide-react'
import '../styles/Staff.css'

const Staff = () => {
  const [currentAlumniSlide, setCurrentAlumniSlide] = useState(0)
  const [currentGradSlide, setCurrentGradSlide] = useState(0)

  // Alumni data organized by category
  const alumni = [
    // Undergraduate Alumni
    { name: 'Melanie Sanchez', degree: 'ME undergrad', period: 'Summer 2024-Spring 2025', currentPosition: 'Now Facilities Engineer at Enbridge' },
    { name: 'Edward Irizarry-Santi', degree: 'ME undergrad', period: 'Summer 2024', currentPosition: null },
    { name: 'Nathaly Amaya', degree: 'CHEME undergrad', period: 'Fall 2023 – Spring 2024', currentPosition: 'Now Process Engineer I at Honeywell' },
    { name: 'Roslyn Romero', degree: 'ME undergrad', period: 'Spring 2023 – Fall 2024', currentPosition: 'Now a MS student in the MAIE Department at UTSA' },
    { name: 'Alyssa Garcia', degree: 'ME undergrad', period: 'Spring 2023 – Fall 2024', currentPosition: 'Now a Quality Engineering Analyst at Accenture Federal Services' },
    { name: 'Haya Abdelaziz', degree: 'ME undergrad', period: 'Spring 2023 – Fall 2023', currentPosition: 'Now a Student Engineer at SwRI' },
    { name: 'Sam Mcdowell-Valdez', degree: 'ME undergrad', period: 'Fall 2022', currentPosition: null },
    { name: 'Noah Harrison', degree: 'ME undergrad', period: 'Summer, Fall 2022', currentPosition: null },
    { name: 'Mariana Garcia', degree: 'ME undergrad', period: 'Spring, Summer, Fall 2022', currentPosition: null },
    { name: 'Kyle Novak', degree: 'ME undergrad', period: 'Spring 2022', currentPosition: null },
    { name: 'Aaron Morgan', degree: 'ME undergrad', period: 'Summer 2021, 1 month', currentPosition: null },
    { name: 'Joshua Zammit', degree: 'ME undergrad', period: 'Spring 2021', currentPosition: null },
    { name: 'Trevor Tackett', degree: 'ME undergrad', period: 'Spring 2021- Fall 2021', currentPosition: 'Now a Quality Inspection Technical at Collins Aerospace' },
    { name: 'Charles McClafferty', degree: 'ME undergrad', period: 'Fall 2020, Spring 2021', currentPosition: null },
    { name: 'Stephanie Lopez', degree: 'ME undergrad', period: 'Fall 2020', currentPosition: null },
    { name: 'Sadot Martinez', degree: 'ME undergrad', period: 'Spring 2020', currentPosition: null },
    { name: 'Sophia Nealon', degree: 'ME undergrad', period: 'Spring 2020', currentPosition: null },
    { name: 'Theresa Enyeart', degree: 'ME undergrad', period: 'Fall 2019- Summer 2020', currentPosition: null },
    { name: 'Javier Rodriguez', degree: 'ME undergrad', period: 'Fall 2019', currentPosition: null },
    { name: 'Ivan Fuenmayor', degree: 'ME undergrad', period: 'Fall 2019', currentPosition: null },
    { name: 'Victor Palos', degree: 'ME undergrad', period: 'Summer 2018, Fall 2018, Spring 2019', currentPosition: null },
    { name: 'Anthony Abundis', degree: 'ME undergrad', period: 'Summer 2017, Fall 2017', currentPosition: 'Now working at ProAutomated as a Field Services Engineer II' },
    { name: 'Sean Nolen', degree: 'ME undergrad', period: 'Summer 2017', currentPosition: 'Now working at Commercial Metals Company as Mechanical Reliability Specialist' },
    { name: 'Stephanie Garcia', degree: 'ME undergrad', period: 'Summer 2017, Fall 2017, Fall 2018, Spring 2019', currentPosition: 'Now working at Johnson Controls as R&D Mechanical Engineer' },
    { name: 'Tori Walker', degree: 'ME undergrad', period: 'Summer 2017', currentPosition: 'Now working at Midcoast Energy as Pipeline Integrity Engineer' },
    { name: 'Kyle Fernandez', degree: 'ME undergrad', period: 'Summer 2017, Fall 2017, Spring 2018, Summer 2018', currentPosition: 'Now working at Southwest Research Institute as Engineer in the Fire Technology Department' },
    
    // High School Alumni
    { name: 'Ella Reinhart', degree: 'BASIS Shavano High School', period: 'Fall 2024- Summer 2025', currentPosition: null },
    { name: 'Diya Nair', degree: 'Keystone School', period: 'Spring 2023- Summer 2024', currentPosition: null },
    
    // Visiting Researchers
    { name: 'Luis Perdomo-Hurtado', degree: 'Visiting Professor', period: 'Fall 2021', currentPosition: 'Professor at Universidad Autónoma Manizales, Colombia' },
    { name: 'Yesica Raquel Quijada Noriega', degree: 'ChemE MS', period: 'Summer 2019', currentPosition: 'Immersion Research Program, UTSA-UNISON Summer Special Program' },
    { name: 'Eduardo Lodato', degree: 'Chemical Engineering student', period: 'August-September 2019', currentPosition: 'Universidad Rafael Urdaneta, Venezuela' },
    { name: 'Vinicio Ynciarte Leiva', degree: 'Visiting Researcher', period: 'August 2019 - December 2019', currentPosition: null },

    // Visiting Scientists
    {name: 'Dr. Keyvan Daneshvar',degree: 'Visiting Scienties', period: 'Since 2023', currentPosition: null }
  ]

  // Alumni slideshow navigation (showing 3 at a time)
  const nextAlumniSlide = () => {
    setCurrentAlumniSlide((prev) => {
      const maxSlide = Math.ceil(alumni.length / 3) - 1
      return (prev + 1) % (maxSlide + 1)
    })
  }

  const prevAlumniSlide = () => {
    setCurrentAlumniSlide((prev) => {
      const maxSlide = Math.ceil(alumni.length / 3) - 1
      return (prev - 1 + maxSlide + 1) % (maxSlide + 1)
    })
  }

  // Get current set of 3 alumni to display
  const getCurrentAlumni = () => {
    const startIndex = currentAlumniSlide * 3
    return alumni.slice(startIndex, startIndex + 3)
  }

  // Graduate researcher slideshow navigation
  const nextGradSlide = () => {
    setCurrentGradSlide((prev) => (prev + 1) % graduateResearchers.length)
  }

  const prevGradSlide = () => {
    setCurrentGradSlide((prev) => (prev - 1 + graduateResearchers.length) % graduateResearchers.length)
  }

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
    },{
      name: 'Rosangel Rojas, Ph.D',
      title: 'Research Scientist at UTSA',
      image: '/rojas.jpg',
      bio: `Dr. Rosangel Rojas is a Postdoctoral Visiting Professor with scholarship of MCTI-CNPq
            Brazil. She is a Civil Engineer and has a Master’s Degree in Structural Engineering
            from the Universidad de Los Andes-ULA, Venezuela, and a Master's Degree in Project,
            Construction, and Maintenance of Railway Infrastructures from the Polytechnic
            University of Catalonia-UPC, Spain. She got her PhD in Civil Engineering area of
            Structures from the Universidade Federal de Rio Grande do Sul. She is currently a
            professor in the Universidade Federal de Rio Grande FURG, Brazil. She has been
            coordinator of FAPERGS research projects in Brazil. She was a professor at the
            Universidad Central de Venezuela-UCV and a Research in the Fundación Venezolana
            de Investigaciones Sismológicas-FUNVISIS.`,
      specialties: [
        'Ultra-high-performance concrete-UHPFRC',
        'Fiber Reinforced Concrete-FRC',
        'Modeling and numeric simulation of structures',
        'Structural Vulnerability',
        'Earthquake engineering problems'
      ],
      achievements: [
        'OAS Scholarship',
        'CAPES Scholarship',
        'CNPq Scholarship',
      ]
    }
  ]

  const graduateResearchers = [
    {
      name: 'Bernardo Armenta',
      image: '/bernardo_headshot.png',
      degree: 'M.S., Mechanical Engineering',
      dissertationTitle: 'Magnesium Oxychloride (MOC) boards. Support by DuPont',
      dateJoined: 'March 2025',
      bio: 'Bernardo Armenta is a Mechanical Engineering master’s student, having earned his B.S. in Mechanical Engineering from UTSA. His current research in the Corrosion Lab focuses on the investigation of Magnesium Oxychloride (MOC) boards, evaluating their performance and durability in construction applications. With a strong background in fluid mechanics, Bernardo is interested in applying his mechanical engineering expertise to the piping industry, aiming to improve system reliability and prevent corrosion-related failures.',
      linkedin: null,
      googleScholar: null
    },
    {
      name: 'Leeroy Clarke',
      image: '/leeroy_clarke_headshot.jpeg',
      degree: 'M.S., Advanced Materials Engineering', 
      dissertationTitle: 'Atmospheric Corrosion Mechanisms. Support by International Motors',
      dateJoined: 'March 2025',
      bio: 'Leeroy Clarke is a Graduate Student in Materials Engineering at the University of Texas at San Antonio (UTSA). He earned his B.S. in Chemical Engineering from Texas A&M University Kingsville. He has over four years of experience in the automotive industry, where he works in the Materials Engineering department specializing in paint systems, protective coatings, and corrosion mitigation strategies for heavy-duty vehicles. His graduate research focuses on atmospheric corrosion mechanisms, with particular emphasis on the influence of road salts such as MgCl₂. His work seeks to improve the understanding of corrosion processes in the transportation sector and contribute to the development of more robust test methods and protective solutions.',
      linkedin: null,
      googleScholar: null
    },
    {
      name: 'Viancy Isaza Zapata',
      image: '/viancy_katherine_headshot.png',
      degree: 'Ph.D., Mechanical Engineering',
      dissertationTitle: 'Through-Hole-Fastener Install Fatigue Stress Factors. Support by ONR',
      dateJoined: 'August 2024',
      bio: '',
      linkedin: 'https://www.linkedin.com/in/viancy-catherine-isaza-zapata-8b089a26a/',
      googleScholar: 'https://scholar.google.com/citations?user=AeyW2REAAAAJ&hl=en&oi=ao'
    },
    {
      name: 'Luis Perdomo-Hurtado',
      image: '/luis_perdamo_headshot.png',
      degree: 'Ph.D., Mechanical Engineering',
      dissertationTitle: 'Hydrogen Embrittlement of AM Alloys. Support by Gulf Research Program Fellowship',
      dateJoined: 'January 2022',
      bio: '',
      linkedin: 'https://www.linkedin.com/in/luis-perdomo-hurtado-4358a6210/',
      googleScholar: 'https://scholar.google.es/citations?user=r0N-Rn8AAAAJ&hl=es'
    },
    {
      name: 'Nayab Ali',
      image: '/nayab_ali_headshot.jpg',
      degree: 'M.S., Mechanical Engineering',
      dissertationTitle: 'Evaluations of Process Parameters on the Corrosion Resistance of electrodeposited coating on Carbon Steel. Support by Twin Hawks LLC.',
      dateJoined: 'January 2022',
      bio: 'Nayab Ali began her academic career at Texas A&M University where she received her Bachelor of Science degree in Biomedical Sciences in Fall 2008. After completing her Bachelor’s degree she went on to pursue a graduate certificate in Applied Statistics from Texas A&M University in 2016, an Associate of Applied Science in Heating, Heating, Air Conditioning, and Refrigeration Technology from Austin Community College in 2018, and a second Bachelor of Science degree in Mechanical Engineering from The University of Texas at San Antonio in Fall 2021. The following semester she joined the UTSA Corrosion Lab and is now pursuing her Ph.D. in Mechanical Engineering with a concentration in Mechanics and Materials. Her current work involves the Twin Hawk project on metal coatings. Her interests are in applying corrosion to in the fields of Biomedical Sciences and HVAC.',
      linkedin: 'https://www.linkedin.com/in/nayabali/',
      googleScholar: null
    },
    {
      name: 'Jorge Escribano',
      image: '/jorge_escribano_headshot.png',
      degree: 'Ph.D., Civil and Environmental Engineering',
      dissertationTitle: 'Hybrid Corrosion Control Methods for Reinforced Concrete Elements. Support by Tran-SET',
      dateJoined: 'August 2021',
      bio: 'Jorge Escribano is a Mexican foreign student pursuing a PhD in Civil Engineering at the University of Texas at San Antonio, where he previously received a Bachelor of Science in Civil Engineering. His current research focuses on corrosion in reinforced concrete, particularly the effectiveness of a green organic inhibitor in different types of steel rebar. His study involves conducting aqueous electrochemical experiments on steel rebars and analyzing the corrosion behavior of specimens of reinforced mortar under the same conditions. Jorge is enthusiastic in remaining in academia, becoming a professor, and enhancing the quality of education in his field of study. Still, he anticipates working in a structural firm to minimize the industry’s corrosion risks.',
      linkedin: 'https://www.linkedin.com/in/jorge-escribano-2349b31a5/',
      googleScholar: null
    }
    ,
    {
      name: 'Meggan Wolanin',
      image: '/megan_wolanin_headshot.jpg',
      degree: 'Ph.D., Mechanical Engineering',
      dissertationTitle: 'Stress-Affected Corrosion Kinetics on Airframe Materials. Support by ONR',
      dateJoined: 'August 2020',
      bio: 'Meggan Wolanin received her bachelor’s degree in Mechanical Engineering from UTSA in May 2020. She is currently pursuing her PhD in the same field. She joined the Corrosion lab in Fall 2020. Her current research focuses on galvanic corrosion of airframe alloys under mechanical and environmental loading. She also has experience working with lathes, mills, and welding.',
      linkedin: 'https://www.linkedin.com/in/meggan-wolanin-771a1047/',
      googleScholar: null
    }
  ]

  const postDocStudents = [
    // Placeholder for future post-doc students
     {
       name: 'Kirran Vadde',
       image: '/kiran_kumar_vadde_headshot.jpg',
       research: 'Microbiologically influenced corrosion (MIC), integrating molecular microbiology, electrochemical techniques, and surface characterization to address corrosion challenges, alongside broader environmental microbiology and water quality-related studies',
       background: 'Dr. Kiran Kumar Vadde is a Postdoctoral Research Fellow at the University of Texas at San Antonio (UTSA). He earned his Ph.D. in Biological Sciences (Environmental Microbiology) from the University of Liverpool, UK.',
       linkedin: 'https://www.linkedin.com/in/dr-kiran-kumar-vadde-a85b687a/',
       googleScholar: 'https://scholar.google.com/citations?user=14OpF6MAAAAJ&hl=en'
     }
  ]

  const undergraduateResearchers = [
    // Example structure - add actual undergraduate researchers here
    {
       name: 'Michelle Ippolito',
       major: 'Chemical Engineering',
       dateJoined: 'Fall 2025'
     },
     {
       name: 'Jennifer Perez',
       major: 'Mechanical Engineering',
       dateJoined: 'Summer 2025'
     },
     {
       name: 'Jeronimo De Erausquin',
       major: 'Mechanical Engineering',
       dateJoined: 'Summer 2025'
     },
     {
       name: 'Michelle Vogues',
       major: 'Mechanical Engineering',
       dateJoined: 'Spring 2025'
     },
     {
       name: 'Nicole Ituarte Cedillo',
       title: 'AMPP UTSA Student Chapter Vice President',
       major: 'Mechanical Engineering',
       dateJoined: 'Fall 2024'
     },
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

      {/* Post Doc Students */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Post-Doctoral Researchers</h2>
          {postDocStudents.length > 0 ? (
            <div className="researchers-grid">
              {postDocStudents.map((postdoc, index) => (
                <div key={index} className="researcher-card">
                  <div className="researcher-image">
                    <img src={postdoc.image} alt={postdoc.name} />
                  </div>
                  <h4>{postdoc.name}</h4>
                  <p className="degree">Post-Doctoral Researcher</p>
                  
                  <div className="research-info">
                    <h5>Research Focus</h5>
                    <p>{postdoc.research}</p>
                    
                    {postdoc.background && (
                      <>
                        <h5>Background</h5>
                        <p>{postdoc.background}</p>
                      </>
                    )}
                  </div>

                  <div className="researcher-links">
                    {postdoc.linkedin && (
                      <a href={postdoc.linkedin} target="_blank" rel="noopener noreferrer" className="researcher-link">
                        LinkedIn <ExternalLink size={14} />
                      </a>
                    )}
                    {postdoc.googleScholar && (
                      <a href={postdoc.googleScholar} target="_blank" rel="noopener noreferrer" className="researcher-link">
                        Google Scholar <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-section">
              <p>Currently seeking qualified post-doctoral candidates to join our research team.</p>
            </div>
          )}
        </div>
      </section>

      {/* Graduate Researchers */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Graduate Researchers</h2>
          <div className="graduate-slideshow">
            <div className="slideshow-container">
              <button 
                className="slide-btn prev-btn" 
                onClick={prevGradSlide}
                aria-label="Previous graduate researcher"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="researcher-slide">
                <div className="researcher-card">
                  <div className="researcher-image">
                    <img src={graduateResearchers[currentGradSlide].image} alt={graduateResearchers[currentGradSlide].name} />
                  </div>
                  <h4>{graduateResearchers[currentGradSlide].name}</h4>
                  <p className="degree">{graduateResearchers[currentGradSlide].degree}</p>
                  
                  <div className="dissertation-info">
                    <h5>Research Areas</h5>
                    <p className="dissertation-title">{graduateResearchers[currentGradSlide].dissertationTitle}</p>
                    <p className="date-joined"><strong>Joined Lab:</strong> {graduateResearchers[currentGradSlide].dateJoined}</p>
                  </div>

                  {graduateResearchers[currentGradSlide].bio && (
                    <div className="researcher-bio">
                      <h5>Biography</h5>
                      <p className="bio-text">{graduateResearchers[currentGradSlide].bio}</p>
                    </div>
                  )}

                  <div className="researcher-links">
                    {graduateResearchers[currentGradSlide].linkedin && (
                      <a href={graduateResearchers[currentGradSlide].linkedin} target="_blank" rel="noopener noreferrer" className="researcher-link">
                        LinkedIn <ExternalLink size={14} />
                      </a>
                    )}
                    {graduateResearchers[currentGradSlide].googleScholar && (
                      <a href={graduateResearchers[currentGradSlide].googleScholar} target="_blank" rel="noopener noreferrer" className="researcher-link">
                        Google Scholar <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <button 
                className="slide-btn next-btn" 
                onClick={nextGradSlide}
                aria-label="Next graduate researcher"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="slide-counter">
              <span>{currentGradSlide + 1} / {graduateResearchers.length}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Undergraduate Researchers */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Undergraduate Researchers</h2>
          {undergraduateResearchers.length > 0 ? (
            <div className="researchers-grid">
              {undergraduateResearchers.map((undergrad, index) => (
                <div key={index} className="researcher-card">
                  <h4>{undergrad.name}</h4>
                  {undergrad.title && (
                    <p className="title">{undergrad.title}</p>
                  )}
                  <p className="degree">{undergrad.degree}</p>
                  
                  <div className="research-info">
                    {undergrad.major && (
                      <>
                        <h5>Major</h5>
                        <p>{undergrad.major}</p>
                      </>
                    )}
                    
                    {undergrad.research && (
                      <>
                        <h5>Research Project</h5>
                        <p>{undergrad.research}</p>
                      </>
                    )}

                    {undergrad.dateJoined && (
                      <p className="date-joined"><strong>Joined Lab:</strong> {undergrad.dateJoined}</p>
                    )}
                  </div>

                  <div className="researcher-links">
                    {undergrad.linkedin && (
                      <a href={undergrad.linkedin} target="_blank" rel="noopener noreferrer" className="researcher-link">
                        LinkedIn <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-section">
              <p>We welcome motivated undergraduate students interested in corrosion research. Contact us to learn about available opportunities.</p>
            </div>
          )}
        </div>
      </section>

      {/* Alumni */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Alumni</h2>  
          <div className="alumni-slideshow">
            <div className="slideshow-container">
              <button 
                className="slide-btn prev-btn" 
                onClick={prevAlumniSlide}
                aria-label="Previous alumni"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="slide-content">
                <div className="alumni-grid-slideshow">
                  {getCurrentAlumni().map((alumnus, index) => (
                    <div key={index} className="alumni-card-slideshow">
                      <div className="alumni-avatar">
                        {alumnus.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <h4>{alumnus.name}</h4>
                      <p className="alumni-degree">{alumnus.degree}</p>
                      <p className="alumni-period">{alumnus.period}</p>
                      {alumnus.currentPosition && (
                        <p className="alumni-position">{alumnus.currentPosition}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                className="slide-btn next-btn" 
                onClick={nextAlumniSlide}
                aria-label="Next alumni"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="slide-counter">
              <span>{currentAlumniSlide + 1} / {Math.ceil(alumni.length / 3)}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Staff
