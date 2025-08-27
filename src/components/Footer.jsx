import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>UTSA Corrosion Research Laboratory</h3>
            <p>
              Advancing the understanding of material degradation and developing 
              innovative solutions for corrosion control across various industries.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={18} />
                <span>BioScience and Engineering Building (BSE 0.216A)<br />UTSA Main Campus</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>brendy.rincon@utsa.edu</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Research Areas</h4>
            <ul>
              <li>Environmentally Assisted Cracking</li>
              <li>Atmospheric Corrosion</li>
              <li>Localized Corrosion</li>
              <li>Corrosion in Reinforced Concrete</li>
              <li>Nuclear Facility Corrosion</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/research">Research Projects</a></li>
              <li><a href="/stem-outreach">STEM Outreach</a></li>
              <li><a href="/staff">Meet Our Team</a></li>
              <li><a href="/news">Latest News</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>University Links</h4>
            <ul>
              <li>
                <a href="https://www.utsa.edu" target="_blank" rel="noopener noreferrer">
                  UTSA <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="https://engineering.utsa.edu" target="_blank" rel="noopener noreferrer">
                  College of Engineering <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="https://ceid.utsa.edu" target="_blank" rel="noopener noreferrer">
                  Mechanical Engineering <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 UTSA Corrosion Research Laboratory. All rights reserved.</p>
          <p>University of Texas at San Antonio</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--primary-color);
          color: white;
          padding: 3rem 0 1rem;
          margin-top: auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h3 {
          color: white;
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .footer-section h4 {
          color: white;
          margin-bottom: 1rem;
          font-size: 1.125rem;
        }

        .footer-section p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
        }

        .contact-info {
          margin-top: 1.5rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-section li {
          margin-bottom: 0.5rem;
        }

        .footer-section a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: var(--transition);
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }

        .footer-section a:hover {
          color: white;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 1rem;
          text-align: center;
          color: rgba(255, 255, 255, 0.6);
        }

        .footer-bottom p {
          margin: 0.25rem 0;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
