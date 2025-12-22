import { Calendar, DollarSign, Award, FileText, Mail } from 'lucide-react'
import '../styles/Scholarship.css'

const Scholarship = () => {
  const criteria = [
    {
      title: 'UTSA ME PhD Student',
      description: 'Must be currently enrolled as a PhD student in Mechanical Engineering at UTSA'
    },
    {
      title: 'GPA Above 3.8',
      description: 'Maintain a cumulative graduate GPA of 3.8 or higher'
    },
    {
      title: 'Corrosion Engineering Course Grade',
      description: 'Grade of A or above in Corrosion Engineering course'
    },
    {
      title: 'Published Research',
      description: '2 peer-reviewed papers published in the corrosion field'
    },
    {
      title: 'Thermal Desorption Spectrometer Experience',
      description: 'Demonstrated experience using the Thermal Desorption Spectrometer for Hydrogen embrittlement testing'
    }
  ]

  return (
    <div className="scholarship-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Competitive Scholarship Opportunity</h1>
            <p>
              Supporting Outstanding Graduate Students in Corrosion Engineering
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          {/* Scholarship Overview */}
          <div className="scholarship-overview">
            <div className="overview-card award-card">
              <div className="icon-wrapper">
                <DollarSign size={40} />
              </div>
              <h3>Award Amount</h3>
              <p className="award-amount">$1,000</p>
            </div>

            <div className="overview-card deadline-card">
              <div className="icon-wrapper">
                <Calendar size={40} />
              </div>
              <h3>Application Deadline</h3>
              <p className="deadline-date">January 4, 2025</p>
            </div>

            <div className="overview-card eligibility-card">
              <div className="icon-wrapper">
                <Award size={40} />
              </div>
              <h3>Eligibility</h3>
              <p>UTSA ME PhD Students</p>
            </div>
          </div>

          {/* About the Scholarship */}
          <div className="scholarship-description">
            <h2>About This Scholarship</h2>
            <p>
              The UTSA Corrosion Research Laboratory is pleased to offer this competitive scholarship 
              to exceptional PhD students in Mechanical Engineering. This scholarship recognizes 
              academic excellence, research contributions, and specialized expertise in corrosion 
              engineering and hydrogen embrittlement testing.
            </p>
            <p>
              This scholarship supports international graduate students by enabling in-state tuition 
              rates, making advanced research opportunities more accessible to talented scholars from 
              around the world.
            </p>
          </div>

          {/* Eligibility Criteria */}
          <div className="criteria-section">
            <h2>Eligibility Criteria</h2>
            <p className="criteria-intro">
              To be considered for this scholarship, applicants must meet all of the following requirements:
            </p>
            
            <div className="criteria-grid">
              {criteria.map((criterion, index) => (
                <div key={index} className="criterion-card">
                  <div className="criterion-number">{index + 1}</div>
                  <div className="criterion-content">
                    <h3>{criterion.title}</h3>
                    <p>{criterion.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application Requirements */}
          <div className="application-section">
            <h2>How to Apply</h2>
            <p className="application-intro">
              Submit your application as a single PDF file containing the following materials:
            </p>

            <div className="requirements-list">
              <div className="requirement-item">
                <FileText size={24} />
                <div>
                  <h4>Curriculum Vitae (CV)</h4>
                  <p>
                    Include detailed information relevant to all eligibility criteria, such as:
                  </p>
                  <ul>
                    <li>Current enrollment status and GPA</li>
                    <li>Corrosion Engineering course grade</li>
                    <li>Complete list of peer-reviewed publications in corrosion</li>
                    <li>Research experience with Thermal Desorption Spectrometer</li>
                    <li>Any additional relevant qualifications or achievements</li>
                  </ul>
                </div>
              </div>

              <div className="requirement-item">
                <FileText size={24} />
                <div>
                  <h4>Personal Essay</h4>
                  <p>
                    Write a compelling essay that addresses:
                  </p>
                  <ul>
                    <li>Your research interests in corrosion engineering</li>
                    <li>How this scholarship will support your academic and career goals</li>
                    <li>Your experience and future aspirations in the field</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="submission-box">
              <Mail size={32} />
              <div className="submission-content">
                <h3>Submit Your Application</h3>
                <p>
                  Please send your complete application to:
                </p>
                <a href="mailto:brendy.rincont@utsa.edu" className="email-link">
                  brendy.rincon@utsa.edu
                </a>
                <p className="submission-note">
                  <strong>Subject Line:</strong> Competitive Scholarship Application - [Your Name]
                </p>
              </div>
            </div>
          </div>

          {/* Important Dates */}
          <div className="dates-section">
            <h2>Important Dates</h2>
            <div className="dates-grid">
              <div className="date-item">
                <Calendar size={24} />
                <div>
                  <h4>Application Deadline</h4>
                  <p>January 4, 2025</p>
                </div>
              </div>
              <div className="date-item">
                <Award size={24} />
                <div>
                  <h4>Award Notification</h4>
                  <p>Successful applicants will be notified after the review process</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="contact-section">
            <h2>Questions?</h2>
            <p>
              For inquiries about the scholarship or application process, please contact:
            </p>
            <div className="contact-info">
              <p><strong>Prof. Brendy Rincon Troconis, Ph.D.</strong></p>
              <p>Principal Investigator</p>
              <p>
                <Mail size={16} style={{ display: 'inline', marginRight: '8px' }} />
                <a href="mailto:brendy.rincont@utsa.edu">brendy.rincon@utsa.edu</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Scholarship
