import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'

import ContactPage from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { Aboutpage } from './pages/AboutPage';


import HeaderComponents from './components/HeaderComponents';
import { Footercomponents } from './components/Footercomponents';
import  InstructorIa  from './pages/InstructorIa';





function App() {
  return (
    <BrowserRouter>
      <HeaderComponents />
      <div className="container py-4">
        <Routes>
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/instructoria' element={<InstructorIa/>}/>
          <Route path='/contactpage' element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footercomponents />
    </BrowserRouter>


  )
}

export default App