import { useState } from 'react'
import './App.css'
import How from './Components/How/How'

import Steps from './Components/Steps/Steps'
import VideoSection from './Components/VideoSection/VideoSection'
import Testimonial from './Components/Testimonial/Testimonial'

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
          </div>
      </div>
    </>
  )
}

export default App
