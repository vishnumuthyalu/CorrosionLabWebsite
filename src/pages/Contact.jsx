import { MapPin, Phone, Mail, Clock, Users, Send } from 'lucide-react'
import { useState } from 'react'
import '../styles/Contact.css'

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
    </div>
  )
}

export default Contact
