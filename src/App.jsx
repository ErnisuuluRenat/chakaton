import { useState } from 'react'
import './App.css'
import How from './Components/How/How'

import Steps from './Components/Steps/Steps'
import VideoSection from './Components/VideoSection/VideoSection'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'
// import Header from './Components/Header/Header'
// import Main from './Components/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrapper">
          <div className="container">
              <How/>
              <Steps/>
              <VideoSection/>
              <Testimonial/>
              <Footer/>

          </div>
      </div>
    </>
  )
}

export default App
