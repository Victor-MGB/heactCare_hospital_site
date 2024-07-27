import React from 'react'
// import ThemeSwitcher from './comonents/ThemeSwitcher';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './nav/Header'
import DiabetesManagement from './comonents/DiabetesManagement';
import RegularCheckups from './comonents/RegularCheckUps';
import HealthyEating from './comonents/HealthyEating';
import Footer from './comonents/Footer';
import About from './pages/About';
import LiveChat from './comonents/LiveChat';
import DoctorHeroSection from './doctor/DoctorHeroSection';
import Departement from './departement/Departement'
function App() {
  return (
    <>
      <div>
      {/* <ThemeSwitcher/> */}
      <Router>
      <Header />
      {/* Define your routes here */}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/diabetes-management' element=<DiabetesManagement/>/>
        <Route path='/regular-checkups' element=<RegularCheckups/>/>
        <Route path='/healthy-eating' element=<HealthyEating />/>
        <Route path ='/about' element = <About/>/>
        <Route path = '/doctors' element=<DoctorHeroSection />/>
        <Route path="/departments" element=<Departement />/>

        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/patient-info" element={<PatientInfo />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>  
    <LiveChat />    
    <Footer />
    </div>
    </>    
  )
}

export default App