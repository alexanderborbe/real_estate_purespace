import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px32 w-full overflow-hidden" 
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl text-center font-bold mb-2">About PureSpace Realty</h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Building Connections Between People and Their Spaces
      </p>


            {/* Numbers/Stats Section */}
      <div className=" flex flex-wrap gap-10 w-full justify-center">
        <div className="text-center">
          <p className="text-4xl font-bold text-blue-600">10+</p>
          <p className="text-gray-500">Years of Excellence</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-blue-600">12+</p>
          <p className="text-gray-500">Projects Completed</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-blue-600">20+</p>
          <p className="text-gray-500">Mn. Sq. Ft. Delivered</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-blue-600">25+</p>
          <p className="text-gray-500">Ongoing Projects</p>
        </div>
      </div>

      {/* Main flex section */}
      <div className=" mt-14 flex flex-col md:flex-row items-stretch md:gap-20 w-full">
        {/* Image */}
        <div className="flex-1">
          <img 
            src={assets.img_about} 
            alt="About PureSpace Realty" 
            className="w-full h-full object-cover rounded-lg mb-6" 
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-start items-center md:items-start text-gray-600">
          {/* Description */}
          <p className="max-w-lg mb-6">
            PureSpace Realty is more than a real estate company — we are a team of dedicated professionals 
            committed to helping families and individuals find their perfect space. With years of local 
            market expertise and a passion for excellence, we provide seamless solutions in buying, 
            selling, and property management.
          </p>

          {/* Mission & Vision */}
          <div className="mb-8 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h2>
              <p>
                To simplify real estate by offering transparent guidance, personalized service, 
                and a commitment to creating meaningful connections between people and their spaces.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h2>
              <p>
                To be the most trusted real estate partner, transforming the way people experience 
                property ownership and investment.
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="bg-blue-600 text-white px-8 py-2 rounded mt-4">
            Learn More
          </button>
        </div>
      </div>


    </div>
  )
}

export default About
