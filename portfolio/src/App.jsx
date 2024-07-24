import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Mywork from './Components/Mywork/Mywork'
import Contact from './Components/Contact/Contact'
import Service from './Components/Services/Service'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Mywork />
      <Contact />
    </div>
  )
}

export default App