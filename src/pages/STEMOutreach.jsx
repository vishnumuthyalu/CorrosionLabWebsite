import { useState } from 'react'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import '../styles/STEMOutreach.css'

const events = [
  {
    id: 'asm-2025',
    title: 'ASM Teacher Camp',
    date: 'July 16, 2025',
    description: `Our laboratory participated in the ASM International Teacher Camp, providing 
      educators with hands-on experience in materials science and engineering. This professional 
      development program empowers teachers to inspire students with real-world applications 
      of STEM concepts in their classrooms.`,
    highlights: [
      'Professional development for educators',
      'Hands-on materials science experiments',
      'Curriculum integration strategies',
      'Laboratory demonstration techniques',
      'Teacher networking and resource sharing'
    ],
    media: [
      {
        type: 'image',
        src: '/ASM_Teacher_camp/20250716_131909.jpg',
        alt: 'ASM Teacher Camp 2025 - Hands-on Materials Science Session'
      }
    ]
  },
  {
    id: 'mcandrew-2025',
    title: 'McAndrew Elementary School Visit 2025',
    date: 'May 9, 2025',
    description: `Our second visit to McAndrew Elementary School continued our mission to inspire 
      young minds in STEM fields. Through age-appropriate demonstrations and interactive activities, 
      we introduced students to the fascinating world of materials science and corrosion engineering, 
      encouraging curiosity and scientific thinking.`,
    highlights: [
      'Interactive science demonstrations',
      'Hands-on learning activities',
      'Age-appropriate materials science concepts',
      'Student engagement and participation',
      'STEM career inspiration'
    ],
    media: [
      {
        type: 'image',
        src: '/Elementary_School_Visits/McAndrew/2025/20250509_145757.jpg',
        alt: 'McAndrew Elementary School Visit 2025 - Science Fun'
      }
    ]
  },
  {
    id: 'mcandrew-2024',
    title: 'McAndrew Elementary School Visit 2024',
    date: 'May 22, 2024',
    description: `Our laboratory team visited McAndrew Elementary School to introduce young students 
      to the fascinating world of materials science and corrosion engineering. Through 
      interactive demonstrations and hands-on activities, we sparked curiosity about STEM 
      fields and showed students how science applies to everyday life.`,
    highlights: [
      'Interactive science demonstrations',
      'Hands-on corrosion experiments',
      'Age-appropriate materials science concepts',
      'Student engagement activities',
      'Career awareness in engineering'
    ],
    media: [
      {
        type: 'image',
        src: '/Elementary_School_Visits/McAndrew/2024/20240522_151710.jpg',
        alt: 'McAndrew Elementary School Visit 2024 - Science Fun'
      }
    ]
  }
]

const EventSection = ({ event, isAlternate, slideIndex, onNextSlide, onPrevSlide }) => {
  return (
    <section className={isAlternate ? 'section-alt' : 'section'}>
      <div className="container">
        <div className="event-grid">
          <div className="event-content">
            <div className="event-header">
              <div className="date-badge">
                <Calendar size={16} />
                <span>{event.date}</span>
              </div>
            </div>
            <h2>{event.title}</h2>
            <p className="event-description">{event.description}</p>
            
            <div className="highlights">
              <h3>Key Highlights</h3>
              <ul>
                {event.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="media-container">
            {event.media && event.media.length > 0 && (
              <>
                <div className="media-item">
                  {event.media[slideIndex].type === 'video' ? (
                    <video 
                      controls 
                      src={event.media[slideIndex].src}
                      alt={event.media[slideIndex].alt}
                    />
                  ) : (
                    <img 
                      src={event.media[slideIndex].src} 
                      alt={event.media[slideIndex].alt}
                    />
                  )}
                </div>
                
                {event.media.length > 1 && (
                  <div className="slideshow-controls">
                    <button 
                      onClick={() => onPrevSlide(event.id)}
                      className="nav-button"
                      disabled={slideIndex === 0}
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <span className="slide-counter">
                      {slideIndex + 1} / {event.media.length}
                    </span>
                    <button 
                      onClick={() => onNextSlide(event.id)}
                      className="nav-button"
                      disabled={slideIndex === event.media.length - 1}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const STEMOutreach = () => {
  const [slideIndices, setSlideIndices] = useState(
    events.reduce((acc, event) => {
      acc[event.id] = 0
      return acc
    }, {})
  )

  const nextSlide = (eventId) => {
    const event = events.find(e => e.id === eventId)
    setSlideIndices(prev => ({
      ...prev,
      [eventId]: (prev[eventId] + 1) % event.media.length
    }))
  }

  const prevSlide = (eventId) => {
    const event = events.find(e => e.id === eventId)
    setSlideIndices(prev => ({
      ...prev,
      [eventId]: prev[eventId] === 0 ? event.media.length - 1 : prev[eventId] - 1
    }))
  }

  return (
    <div className="stem-outreach-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>STEM Outreach</h1>
            <p>
              Inspiring the next generation of scientists and engineers through 
              educational programs and community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Events */}
      {events.map((event, index) => (
        <EventSection
          key={event.id}
          event={event}
          isAlternate={index % 2 === 1}
          slideIndex={slideIndices[event.id]}
          onNextSlide={nextSlide}
          onPrevSlide={prevSlide}
        />
      ))}
    </div>
  )
}

export default STEMOutreach
