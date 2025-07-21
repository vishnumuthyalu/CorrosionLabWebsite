import { MapPin, Phone, Mail, Clock, Users, Send } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    affiliation: '',
    message: '',
    inquiryType: 'general'
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        affiliation: '',
        message: '',
        inquiryType: 'general'
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Laboratory Location',
      details: [
        'BioScience and Engineering Building',
        'Room BSE 0.216A',
        'UTSA Main Campus',
        'San Antonio, Texas 78249'
      ]
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: [
        'brendy.rincon@utsa.edu',
        'General inquiries and collaboration opportunities'
      ]
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: [
        '(210) 458-5565',
        'Office hours: Monday - Friday, 9:00 AM - 5:00 PM'
      ]
    },
    {
      icon: <Clock size={24} />,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 5:00 PM',
        'By appointment for meetings',
        'Lab tours available upon request'
      ]
    }
  ]

  const collaborationAreas = [
    {
      title: 'Industry Partnerships',
      description: 'We welcome collaborations with industry partners for applied research projects, consulting, and technology transfer.',
      topics: ['Oil & Gas', 'Nuclear', 'Aerospace', 'Infrastructure', 'Marine']
    },
    {
      title: 'Academic Collaborations',
      description: 'Partner institutions and researchers interested in joint research projects and student exchanges.',
      topics: ['Joint Publications', 'Shared Facilities', 'Student Exchange', 'Grant Applications']
    },
    {
      title: 'Student Opportunities',
      description: 'We offer research opportunities for undergraduate and graduate students interested in corrosion science.',
      topics: ['Graduate Research', 'Undergraduate Projects', 'Internships', 'Thesis Work']
    }
  ]

  const inquiryTypes = [
    { value: 'general', label: 'General Information' },
    { value: 'collaboration', label: 'Research Collaboration' },
    { value: 'student', label: 'Student Opportunities' },
    { value: 'consulting', label: 'Consulting Services' },
    { value: 'media', label: 'Media Inquiry' },
    { value: 'visit', label: 'Lab Visit Request' }
  ]

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Contact Us</h1>
            <p>
              Get in touch with the UTSA Corrosion Research Laboratory for 
              collaborations, research opportunities, and general inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-card">
                <div className="contact-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <div className="contact-details">
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="section section-alt">
        <div className="container">
          <div className="contact-form-section">
            <div className="form-container">
              <h2>Send Us a Message</h2>
              <p>
                We welcome new project ideas, collaborators, and student volunteers. 
                Please don't hesitate to contact us.
              </p>
              
              {isSubmitted ? (
                <div className="success-message">
                  <div className="success-icon">
                    <Send size={32} />
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for your inquiry. We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="affiliation">Affiliation/Organization</label>
                      <input
                        type="text"
                        id="affiliation"
                        name="affiliation"
                        value={formData.affiliation}
                        onChange={handleChange}
                        placeholder="University, Company, Institution"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inquiryType">Inquiry Type</label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Brief description of your inquiry"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Please provide details about your inquiry, research interests, or collaboration proposal..."
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="map-container">
              <h3>Find Us</h3>
              <div className="map-placeholder">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3528.8!2d-98.6193!3d29.5831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c8bc5f3e5f5f5%3A0x1234567890abcdef!2sUniversity%20of%20Texas%20at%20San%20Antonio!5e0!3m2!1sen!2sus!4v1642000000000!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: 'var(--border-radius)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="UTSA Campus Location"
                ></iframe>
              </div>
              <div className="directions">
                <h4>Directions</h4>
                <p>
                  The BioScience and Engineering building is located on the UTSA main campus. 
                  Visitor parking is available in the designated areas. Please contact us 
                  for specific directions to our laboratory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Opportunities */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Collaboration Opportunities</h2>
          <div className="collaboration-grid">
            {collaborationAreas.map((area, index) => (
              <div key={index} className="collaboration-card">
                <div className="collaboration-header">
                  <Users size={32} />
                  <h3>{area.title}</h3>
                </div>
                <p>{area.description}</p>
                <div className="topics-list">
                  <h4>Areas of Interest:</h4>
                  <div className="topics">
                    {area.topics.map((topic, idx) => (
                      <span key={idx} className="topic-tag">{topic}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="section section-alt">
        <div className="container">
          <div className="quick-contact">
            <h2>Quick Contact Information</h2>
            <div className="quick-contact-grid">
              <div className="quick-contact-item">
                <h3>Principal Investigator</h3>
                <p><strong>Dr. Brendy C. Rincon Troconis</strong></p>
                <p>Associate Professor</p>
                <p>Department of Mechanical, Aerospace, and Industrial Engineering</p>
                <a href="mailto:brendy.rincon@utsa.edu" className="contact-link">
                  <Mail size={18} />
                  brendy.rincon@utsa.edu
                </a>
              </div>
              
              <div className="quick-contact-item">
                <h3>Laboratory Address</h3>
                <p><strong>UTSA Corrosion Research Laboratory</strong></p>
                <p>BioScience and Engineering Building, Room BSE 0.216A</p>
                <p>University of Texas at San Antonio</p>
                <p>One UTSA Circle, San Antonio, TX 78249</p>
              </div>
              
              <div className="quick-contact-item">
                <h3>Research Inquiries</h3>
                <p>For research collaborations, student opportunities, and consulting services:</p>
                <a href="mailto:brendy.rincon@utsa.edu" className="contact-link">
                  <Mail size={18} />
                  Send Email
                </a>
                <p className="response-time">Typical response time: 1-2 business days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .section-title {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--primary-color);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .contact-card {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-light);
          text-align: center;
          transition: var(--transition);
          border-top: 4px solid var(--primary-color);
        }

        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-medium);
        }

        .contact-icon {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .contact-card h3 {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .contact-details p {
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          line-height: 1.5;
        }

        .contact-form-section {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .form-container h2 {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .form-container p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 0.75rem;
          border: 2px solid var(--border-color);
          border-radius: var(--border-radius);
          font-size: 1rem;
          transition: var(--transition);
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(0, 63, 92, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          background: var(--gradient-primary);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: var(--border-radius);
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-medium);
        }

        .success-message {
          text-align: center;
          padding: 3rem;
          background: #f8f9fa;
          border-radius: var(--border-radius);
          border: 2px solid #28a745;
        }

        .success-icon {
          color: #28a745;
          margin-bottom: 1rem;
        }

        .success-message h3 {
          color: #28a745;
          margin-bottom: 1rem;
        }

        .success-message p {
          color: var(--text-secondary);
          margin: 0;
        }

        .map-container {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-light);
          height: fit-content;
        }

        .map-container h3 {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .map-placeholder {
          margin-bottom: 1.5rem;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow-light);
        }

        .directions h4 {
          color: var(--secondary-color);
          margin-bottom: 0.5rem;
        }

        .directions p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .collaboration-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .collaboration-card {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-light);
          transition: var(--transition);
        }

        .collaboration-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-medium);
        }

        .collaboration-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .collaboration-header h3 {
          color: var(--primary-color);
          margin: 0;
        }

        .collaboration-header svg {
          color: var(--primary-color);
        }

        .collaboration-card p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .topics-list h4 {
          color: var(--secondary-color);
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .topics {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .topic-tag {
          background: var(--background-light);
          color: var(--primary-color);
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.875rem;
          border: 1px solid var(--border-color);
        }

        .quick-contact {
          background: white;
          padding: 3rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-light);
        }

        .quick-contact h2 {
          text-align: center;
          color: var(--primary-color);
          margin-bottom: 2rem;
        }

        .quick-contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .quick-contact-item {
          padding: 1.5rem;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius);
          background: var(--background-light);
        }

        .quick-contact-item h3 {
          color: var(--primary-color);
          margin-bottom: 1rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }

        .quick-contact-item p {
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          line-height: 1.5;
        }

        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 600;
          margin-top: 1rem;
          padding: 0.5rem;
          border-radius: 5px;
          transition: var(--transition);
        }

        .contact-link:hover {
          background: var(--primary-color);
          color: white;
        }

        .response-time {
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-style: italic;
          margin-top: 0.5rem;
        }

        @media (max-width: 768px) {
          .contact-form-section {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .collaboration-grid,
          .quick-contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default Contact
