import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Research from './pages/Research'
import Capabilities from './pages/Capabilities'
import Staff from './pages/Staff'
import News from './pages/News'
import STEMOutreach from './pages/STEMOutreach'
import Contact from './pages/Contact'
import Achievements from './pages/Achievements'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/news" element={<News />} />
            <Route path="/stem-outreach" element={<STEMOutreach />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
