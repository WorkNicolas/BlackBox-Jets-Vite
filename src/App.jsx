// CSS
import './App.css'

// React
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Layout
import Header from './components/layout/Header.jsx'
import Navigation from './components/layout/Navigation.jsx'
import Footer from './components/layout/Footer.jsx'

// Main
import Home from './components/main/Home.jsx'
import Milestone from './components/main/Milestone.jsx'
import Safety from './components/main/Safety.jsx'
import Service from './components/main/Service.jsx'
import Access from './components/main/Access.jsx'
import Exclusives from './components/main/Exclusives.jsx'

// Forms
import Login from './components/forms/Login.jsx'
import Register from './components/forms/Register.jsx'
import News from './components/main/News.jsx'
import PressCenter from './components/main/PressCenter.jsx'
import AviationSolutions from './components/main/AviationSolutions.jsx'
import ComparePrograms from './components/main/ComparePrograms.jsx'
import DayLease from './components/main/DayLease.jsx'
import GlobalLeader from './components/main/GlobalLeader.jsx'
import JetCard from './components/main/JetCard.jsx'
import Lease from './components/main/Lease.jsx'
import Pricing from './components/main/Pricing.jsx'
import Sustainability from './components/main/Sustainability.jsx'
import RequestInformation from './components/forms/RequestInformation.jsx'
import AboutUs from './components/main/AboutUs.jsx'


function App() {
  return (
    <BrowserRouter>
      <body>
        <Header />
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/milestone" element={<Milestone />} />
                <Route path="/safety" element={<Safety />} />
                <Route path="/service" element={<Service />} />
                <Route path="/access" element={<Access />} />
                <Route path="/exclusives" element={<Exclusives />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/news" element={<News />} />
                <Route path="/press" element={<PressCenter />} />
                <Route path="/aviations" element={<AviationSolutions />} />
                <Route path="/compare-programs" element={<ComparePrograms />} />
                <Route path="/day-lease" element={<DayLease />} />
                <Route path="/global-leader" element={<GlobalLeader />} />
                <Route path="/jet-card" element={<JetCard />} />
                <Route path="/lease" element={<Lease />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/sustainability" element={<Sustainability />} />
                <Route path="/aboutus" element={<AboutUs />} />

            </Routes>
            <RequestInformation />
        <Footer />
      </body>
    </BrowserRouter>
  )
}

export default App
