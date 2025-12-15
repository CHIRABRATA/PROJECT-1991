import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Navbar from './components/Navbar.jsx'
import Breadcrumbs from './components/Breadcrumbs.jsx'
import Footer from './components/Footer.jsx'

import Landing from './pages/Landing.jsx'
import Degrees from './pages/Degrees.jsx'
import Courses from './pages/Courses.jsx'
import Years from './pages/Years.jsx'
import Resources from './pages/Resources.jsx'
import AuthPage from './pages/AuthPage.jsx'
import Instructors from './pages/Instructors.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/degrees" element={<Degrees />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/years" element={<Years />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/instructors" element={<Instructors />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

