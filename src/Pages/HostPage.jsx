import React from 'react'
import Navbar from '../Components/Navbar'
import CarForm from '../Components/CarForm'
import Slider2 from '../Components/Slider2'

const HostPage = () => {
  return (
    <div>
      <Navbar />
      <div style={{display: "flex"}}>
        <CarForm />
        <div style={{maxWidth: "60vw"}}>
          <Slider2 />
        </div>
      </div>
    </div>
  )
}

export default HostPage