import { Calendar, DollarSign, Award, FileText, Mail } from 'lucide-react'
import '../styles/Opportunities.css'

const Opportunities = () => {
  const criteria = [
    {
      title: 'Fresh ME Graduate',
      description: 'Recently graduated in Mechanical Engineering'
    },
    {
      title: 'Corrosion Engineering Course Grade',
      description: 'Grade of B- or above in Corrosion Engineering course'
    },
    {
      title: 'Coated Sample Preparation',
      description: 'Experience preparing coated samples and characterization, including coating thickness measurements'
    },
    {
      title: 'Accelerated Testing Experience',
      description: 'Experience using accelerated testing chambers, data collection, and interpretation'
    },
    {
      title: 'Corrosion Lab Experience',
      description: 'Previous corrosion lab experience with an excellent track record in safety and teamwork'
    }
  ]

  return (
    <div className="scholarship-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Competitive Job Opportunity</h1>
            <p>
              Apply for a researcher position in material degradation
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
              <h3>Position</h3>
              <p className="award-amount">Researcher</p>
            </div>

            <div className="overview-card deadline-card">
              <div className="icon-wrapper">
                <Calendar size={40} />
              </div>
              <h3>Application Deadline</h3>
              <p className="deadline-date">February 10, 2026</p>
            </div>

            <div className="overview-card eligibility-card">
              <div className="icon-wrapper">
                <Award size={40} />
              </div>
              <h3>Focus Areas</h3>
              <p>Material Degradation Research</p>
            </div>
          </div>

          {/* About the Scholarship */}
          <div className="scholarship-description">
            <h2>About This Position</h2>
            <p>
              The UTSA Corrosion Research Laboratory is seeking a researcher to work on projects 
              related to material degradation in Mechanical Engineering.
            </p>
            <p>
              Projects include research on fire-retardant coatings, corrosion-resistant coatings, 
              accelerated testing, and electrochemistry.
            </p>
          </div>

          {/* Eligibility Criteria */}
          <div className="criteria-section">
            <h2>Eligibility Criteria</h2>
            <p className="criteria-intro">
              To be considered for this position, applicants must meet all of the following requirements:
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
                    <li>Corrosion Engineering course grade</li>
                    <li>Experience preparing and characterizing coated samples</li>
                    <li>Accelerated testing chamber experience and data interpretation</li>
                    <li>Corrosion lab experience, including safety and teamwork</li>
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
                    <li>How this opportunity will support your academic and career goals</li>
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
                  <strong>Subject Line:</strong> Research Application - [Your Name]
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
                  <p>February 10, 2026</p>
                </div>
              </div>
              <div className="date-item">
                <Award size={24} />
                <div>
                  <h4>Notification</h4>
                  <p>Successful applicants will be notified after the review process</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="contact-section">
            <h2>Questions?</h2>
            <p>
              For inquiries about this opportunity or application process, please contact:
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

export default Opportunities