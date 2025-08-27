import { useState } from 'react'
import { Calendar, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import '../styles/News.css'

const News = () => {
  const [showAllNews, setShowAllNews] = useState(false)
  const newsItems = [
    {
      date: '2023-04-12',
      title: 'Brendy Rincon Troconis receives AMPP Award',
      excerpt: 'UTSA Klesse College of Engineering announces Dr. Brendy Rincon Troconis has received the AMPP Early Career Award for her outstanding contributions to corrosion science.',
      content: `Dr. Brendy Rincon Troconis has been recognized with the prestigious AMPP Early Career Award, acknowledging her significant contributions to the field of corrosion science and engineering. This award recognizes emerging leaders who have made notable impacts in their field.`,
      link: 'https://klesse.utsa.edu/news/2023/04/12-ammp-rincon-troconis.html'
    },
    {
      date: '2023-04-01',
      title: 'AMPP Service and Technical Awards 2023',
      excerpt: 'AMMP announces the 2023 Service and Technical Award recipients, including recognition for outstanding contributions to corrosion science and engineering.',
      content: `The Association for Materials Protection and Performance (AMPP) has announced the 2023 Service and Technical Award recipients, recognizing individuals who have made significant contributions to the advancement of materials protection and performance.`,
      link: 'https://www.ampp.org/membership/member-resources/awards/2023-award-recipients'
    },
    {
      date: '2022-05-17',
      title: 'UTSA Twitter Recognition',
      excerpt: 'UTSA highlights the corrosion laboratory\'s contributions to industry safety through social media outreach.',
      content: `UTSA\'s official Twitter account featured the corrosion research laboratory\'s work, highlighting the important role it plays in making various industries safer through advanced corrosion research and prevention techniques.`,
      link: 'https://twitter.com/UTSA/status/1526562158888337409'
    },
    {
      date: '2022-05-16',
      title: 'UTSA professor\'s corrosion laboratory is playing a role in work to make several industries safer',
      excerpt: 'UTSA Today features the corrosion research laboratory and its important contributions to industrial safety across multiple sectors.',
      content: `UTSA Today highlights how Dr. Brendy Rincon Troconis\'s corrosion research laboratory is making significant contributions to industrial safety. The laboratory\'s research spans multiple industries including aerospace, oil and gas, and infrastructure, working to prevent corrosion-related failures and improve safety standards.`,
      link: 'https://www.utsa.edu/today/2022/05/story/corrosion-laboratory-plays-role-industry-safety.html'
    },
    {
      date: '2022-06-02',
      title: 'UTSA corrosion laboratory working to make several industries safer',
      excerpt: 'ASM International highlights the UTSA corrosion laboratory\'s research efforts to improve safety across various industries.',
      content: `ASM International features the UTSA corrosion research laboratory\'s work in developing solutions to make various industries safer. The laboratory\'s interdisciplinary approach combines materials science, electrochemistry, and engineering to address complex corrosion challenges.`,
      link: 'https://www.asminternational.org/news/videos/-journal_content/56/10180/48560874/NEWS/'
    },
    {
      date: '2022-01-20',
      title: 'National Academies\' Gulf Research Program Announces Six Early-Career Research Fellows',
      excerpt: 'Dr. Brendy Rincon Troconis named among six Early-Career Research Fellows focused on offshore energy safety by the National Academies\' Gulf Research Program.',
      content: `The National Academies\' Gulf Research Program has announced six Early-Career Research Fellows focused on offshore energy safety, including Dr. Brendy Rincon Troconis. This fellowship recognizes outstanding researchers working to improve safety in offshore energy operations.`,
      link: 'https://www.nationalacademies.org/news/2022/01/national-academies-gulf-research-program-announces-six-early-career-research-fellows-focused-on-offshore-energy-safety'
    },
    {
      date: '2022-01-20',
      title: 'Brendy Rincon Troconis recognized with Early Career Research Fellowship',
      excerpt: 'UTSA Klesse College announces Dr. Brendy Rincon Troconis has been recognized with an Early Career Research Fellowship from the National Academies\' Gulf Research Program.',
      content: `Dr. Brendy Rincon Troconis has been recognized with an Early Career Research Fellowship from the National Academies\' Gulf Research Program. This prestigious fellowship supports innovative research focused on offshore energy safety and environmental protection.`,
      link: 'https://klesse.utsa.edu/news/2022/01/brendy-rincon-troconis-recognized-with-early-career-research-fellowship.html'
    },
    {
      date: '2019-08-27',
      title: 'San Antonio researchers seek to prevent aerospace failures and oil spills disasters',
      excerpt: 'Phys.org features UTSA and SwRI collaboration research aimed at preventing catastrophic failures in aerospace and oil industry applications.',
      content: `San Antonio researchers from UTSA and SwRI are working together to prevent catastrophic failures in aerospace and oil industry applications. Their research focuses on understanding material degradation mechanisms to prevent disasters and improve safety protocols.`,
      link: 'https://phys.org/news/2019-08-san-antonio-aerospace-failures-oil.html'
    },
    {
      date: '2019-08-27',
      title: 'UTSA AND SWRI TO RESEARCH DEGRADATION OF ADDITIVE MANUFACTURING METALS IN OIL & GAS INDUSTRY',
      excerpt: '3D Printing Industry reports on collaborative research between UTSA and SwRI investigating degradation of additively manufactured metals in oil and gas applications.',
      content: `3D Printing Industry highlights the collaborative research between UTSA and Southwest Research Institute investigating the degradation of additively manufactured metals in oil and gas industry conditions. This research is crucial for understanding the long-term performance of 3D printed components in harsh environments.`,
      link: 'https://3dprintingindustry.com/news/utsa-and-swri-to-research-degradation-of-additive-manufacturing-metals-in-oil-gas-industry-160879/'
    },
    {
      date: '2019-07-23',
      title: 'Understanding Susceptibility of Additively Manufactured Materials to Degradation',
      excerpt: 'AZO Materials covers research on understanding how additively manufactured materials degrade under various environmental conditions.',
      content: `AZO Materials reports on groundbreaking research to understand the susceptibility of additively manufactured materials to degradation. This research is essential for predicting the lifespan and reliability of 3D printed components in critical applications.`,
      link: 'https://www.azom.com/news.aspx?newsID=51766'
    },
    {
      date: '2019-07-22',
      title: 'Collaborating to better understand metal degradation',
      excerpt: 'Tech Xplore features collaborative research efforts to better understand metal degradation processes and prevention strategies.',
      content: `Tech Xplore highlights collaborative research efforts between multiple institutions to better understand metal degradation processes. This research aims to develop more effective strategies for preventing metal failure in critical applications.`,
      link: 'https://techxplore.com/news/2019-07-collaborating-metal-degradation.html'
    },
    {
      date: '2019-07-22',
      title: 'SwRI AND UTSA COLLABORATE TO BETTER UNDERSTAND METAL DEGRADATION',
      excerpt: 'Southwest Research Institute announces collaboration with UTSA to study hydrogen embrittlement and metal degradation in oil and gas applications.',
      content: `Southwest Research Institute and UTSA announce a collaborative research project to better understand metal degradation, particularly hydrogen embrittlement in oil and gas industry applications. This research addresses critical safety and reliability concerns in energy infrastructure.`,
      link: 'https://www.swri.org/press-release/swri-utsa-collaborate-metal-degradation-hydrogen-embrittlement'
    },
    {
      date: '2019-09-06',
      title: 'Researchers study hydrogen embrittlement of AM nickel-718 in oil & gas industry conditions',
      excerpt: 'Metal AM magazine reports on research studying hydrogen embrittlement effects on additively manufactured nickel-718 alloys used in oil and gas applications.',
      content: `Metal AM magazine features research on hydrogen embrittlement effects on additively manufactured nickel-718 alloys under oil and gas industry conditions. This research is crucial for ensuring the safety and reliability of additive manufacturing components in harsh environments.`,
      link: 'https://www.metal-am.com/researchers-study-hydrogen-embrittlement-of-am-nickel-718-in-oil-gas-industry-conditions/'
    },
    {
      date: '2018-03-16',
      title: 'UTSA Libraries Features Dr. Brendy Rincon Troconis in "This is What a Scientist Looks Like" Campaign',
      excerpt: 'UTSA Libraries highlights Dr. Brendy Rincon Troconis as part of their campaign celebrating women in STEM.',
      content: `UTSA Libraries featured Dr. Brendy Rincon Troconis in their "This is What a Scientist Looks Like" campaign, celebrating women in STEM fields. The campaign aims to highlight diverse role models in science and engineering.`,
      link: 'https://twitter.com/UTSA_Libraries/status/974646470585458689'
    },
    {
      date: '2018-03-01',
      title: 'Q&A: Brendy Rincon Troconis, UTSA Department of Mechanical Engineering',
      excerpt: 'UTSA Today features an in-depth interview with Dr. Brendy Rincon Troconis about her research and career in corrosion science.',
      content: `UTSA Today presents an in-depth interview with Dr. Brendy Rincon Troconis, discussing her research in corrosion science, her career path, and her goals for the UTSA Corrosion Research Laboratory. The interview provides insights into her innovative approaches to materials degradation research.`,
      link: 'https://www.utsa.edu/today/2018/03/story/QA-BrendyTroconis.html'
    },
    {
      date: '2017-12-21',
      title: 'UTSA partners with SwRI on deepsea pipeline corrosion and traffic management system projects',
      excerpt: 'Green Car Congress reports on UTSA\'s partnership with SwRI for research on deepsea pipeline corrosion and sustainable traffic management systems.',
      content: `Green Car Congress covers UTSA\'s partnership with Southwest Research Institute on two innovative research projects: deepsea pipeline corrosion mitigation and sustainable traffic management systems. These projects address critical infrastructure challenges with innovative engineering solutions.`,
      link: 'https://www.greencarcongress.com/2017/12/20171221-utsa.html'
    },
    {
      date: '2017-12-05',
      title: 'UTSA partners with SwRI on corrosion and energy projects',
      excerpt: 'UTSA Today announces partnership with Southwest Research Institute on groundbreaking corrosion and energy research projects.',
      content: `UTSA Today announces a strategic partnership with Southwest Research Institute on groundbreaking research projects addressing corrosion prevention and sustainable energy solutions. The collaboration combines academic research excellence with industry expertise.`,
      link: 'https://www.utsa.edu/today/2017/12/story/UTSA-SwRIprojects.html'
    },
    {
      date: '2017-11-15',
      title: 'New Research Project Aims to Mitigate Corrosion in Oil, Gas Equipment',
      excerpt: 'Materials Performance Magazine reports on new research project aimed at developing innovative solutions for corrosion mitigation in oil and gas equipment.',
      content: `Materials Performance Magazine highlights a new research project focused on developing innovative techniques to mitigate cracking and corrosion in piping and related equipment used by the oil and gas industry. The project represents a significant advance in corrosion prevention technology.`,
      link: 'https://www.materialsperformance.com/news/2017/11/new-research-project-aims-to-mitigate-corrosion-in-oil-gas-equipment'
    },
    {
      date: '2017-11-14',
      title: 'Researchers Develop Corrosion and Traffic Solutions',
      excerpt: 'Paint Square covers innovative research developing solutions for both corrosion prevention and sustainable traffic management systems.',
      content: `Paint Square reports on innovative research projects developing solutions for corrosion prevention in industrial piping and sustainable traffic management systems. These dual-purpose projects demonstrate the versatility and impact of engineering research.`,
      link: 'https://www.paintsquare.com/news/view/?17653'
    },
    {
      date: '2017-11-09',
      title: 'SwRI, UTSA JOINTLY INVEST IN CORROSION, ENERGY PROJECTS',
      excerpt: 'Southwest Research Institute announces joint investment with UTSA in corrosion prevention and energy research projects totaling significant funding.',
      content: `Southwest Research Institute announces a joint investment with UTSA in corrosion prevention and energy research projects. The collaboration brings together leading expertise from both institutions to address critical challenges in materials science and sustainable energy.`,
      link: 'https://www.swri.org/press-release/swri-utsa-jointly-invest-corrosion-energy-projects'
    },
    {
      date: '2017-08-15',
      title: 'Nuclear Regulatory Commission awards UTSA $849,351 to support faculty and student development',
      excerpt: 'UTSA Today reports on substantial Nuclear Regulatory Commission grant supporting faculty development and student research in nuclear safety.',
      content: `UTSA Today announces that the Nuclear Regulatory Commission has awarded UTSA $849,351 to support faculty and student development in nuclear safety research and education. This substantial grant will enhance the university\'s capabilities in nuclear engineering research.`,
      link: 'https://www.utsa.edu/today/2017/08/story/NRC-grant.html#:~:text=Social%20Media-,Nuclear%20Regulatory%20Commission%20awards%20UTSA%20%24849%2C351%20to%20support%20faculty%20and,UTSA)%20two%20grants%20totaling%20%24849%2C351.'
    },
    {
      date: '2016-09-01',
      title: 'NACE International Awards $30,000 to Support Corrosion Research',
      excerpt: 'CoatingsPro Magazine reports on NACE International\'s $30,000 research grant award supporting innovative corrosion research at UTSA.',
      content: `CoatingsPro Magazine announces that NACE International has awarded a $30,000 research grant to support innovative corrosion research at UTSA. This funding will enable groundbreaking research in corrosion prevention and materials protection.`,
      link: 'https://www.coatingspromag.com/industry-news/2016/09/nace-international-awards-30000-to-support-corrosion-research'
    },
    {
      date: '2016-08-09',
      title: 'NACE International Awards $30,000 to Support Corrosion Research',
      excerpt: 'Materials Performance Magazine covers NACE International\'s significant research grant supporting corrosion science advancement at UTSA.',
      content: `Materials Performance Magazine reports on NACE International\'s award of a $30,000 research grant to support corrosion science advancement at UTSA. The funding will support cutting-edge research in surface enhanced Raman spectroscopy applications for corrosion studies.`,
      link: 'https://www.materialsperformance.com/news/2016/08/nace-international-awards-30000-grant-to-support-corrosion-research'
    },
    {
      date: '2016-12-01',
      title: 'New faculty member receives NACE International Award',
      excerpt: 'UTSA Innovations magazine features Dr. Brendy Rincon Troconis receiving the prestigious NACE International Award for her research excellence.',
      content: `UTSA Innovations magazine highlights Dr. Brendy Rincon Troconis receiving the prestigious NACE International Award, recognizing her excellence in corrosion research and her potential to make significant contributions to the field.`,
      link: 'https://www.utsa.edu/innovations/fall2016/story/briefs.html'
    }
  ]

  const upcomingEvents = [
    // No upcoming events currently scheduled
  ]

  const displayedNews = showAllNews ? newsItems : newsItems.slice(0, 5)

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
                {displayedNews.map((item, index) => (
                  <article key={index} className="news-item">
                    <div className="news-header">
                      <div className="news-meta">
                        <div className="news-details">
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
                
                <div className="news-controls">
                  <button 
                    className="btn btn-primary see-more-btn"
                    onClick={() => setShowAllNews(!showAllNews)}
                  >
                    {showAllNews ? (
                      <>
                        Show Less <ChevronUp size={20} />
                      </>
                    ) : (
                      <>
                        See More News <ChevronDown size={20} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="sidebar">
              {/* Upcoming Events */}
              <div className="sidebar-section">
                <h3>Upcoming Events</h3>
                <div className="events-list">
                  {upcomingEvents.length > 0 ? (
                    upcomingEvents.map((event, index) => (
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
                    ))
                  ) : (
                    <p className="no-events">No upcoming events scheduled at this time.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News
