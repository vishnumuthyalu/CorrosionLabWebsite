import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Research', path: '/research' },
    { name: 'Resources', path: '/resources' },
    { name: 'Staff', path: '/staff' },
    { name: 'News', path: '/news' },
    { name: 'Publications', path: '/publications' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img 
              src="/cropped-corrosion-lab-long.png" 
              alt="UTSA Corrosion Research Laboratory Logo" 
              className="logo-image"
            />
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'nav-link-active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <style jsx>{`
        .header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: var(--transition);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: var(--primary-color);
          font-weight: 700;
        }

        .logo-image {
          height: 50px;
          width: auto;
          transition: var(--transition);
        }

        .logo:hover .logo-image {
          transform: scale(1.05);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-main {
          font-size: 1.25rem;
          line-height: 1;
        }

        .logo-sub {
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-weight: 400;
        }

        .nav {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 500;
          padding: 0.5rem 0;
          position: relative;
          transition: var(--transition);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gradient-primary);
          transition: var(--transition);
        }

        .nav-link:hover::after,
        .nav-link-active::after {
          width: 100%;
        }

        .nav-link-active {
          color: var(--primary-color);
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--primary-color);
          padding: 0.5rem;
        }

        @media (max-width: 768px) {
          .nav {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: var(--shadow-medium);
            border-radius: 0 0 var(--border-radius) var(--border-radius);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: var(--transition);
          }

          .nav-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .menu-toggle {
            display: block;
          }

          .logo-image {
            height: 40px;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
