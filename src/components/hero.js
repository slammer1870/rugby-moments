import React from "react"

const Hero = () => (
  <div className="w-screen h-screen2/3 bg-mobile-hero bg-cover bg-center bg-no-repeat lg:bg-desktop-hero lg:bg-cover lg:bg-top">
    <div className="bg-gray-800 w-full h-full bg-opacity-60 flex justify-center items-center relative">
        <button className="text-white border p-2 rounded lg:px-8 lg:text-xl">Learn More</button>
      <div className="text-white bottom-0 left-0 absolute p-4 lg:p-8">
        <h1 className="text-4xl mb-2 lg:text-7xl lg:mb-6">Rugby Moments</h1>
        <h3 className="text-2xl font-thin lg:text-4xl">Own moments from Rugby’s greatest championships</h3>
      </div>
    </div>
  </div>
)

export default Hero
