import React from 'react';
import FruitPlate2 from "../assets/fruit-plate2.png";

function OnlineStore() {
  return (
    <div className='bg-[#fff] py-[50px] mt-[50px] overflow-hidden'>
      <div className='w-[90%] mx-auto'>
        <div className='flex flex-col sm:flex-row'>
          
          {/* Text Content Container */}
  <div className='w-full sm:w-[40%] flex flex-col justify-center sm:justify-start'>
  <h1 data-aos="fade-up" data-aos-delay="0" className='text-3xl sm:text-6xl md:text-4xl lg:text-6xl mb-4 font-bold sm:text-left'>ONLINE FRUIT STORE</h1>
  <p data-aos="fade-up" data-aos-delay="200" className='mb-4 text-center sm:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!</p>
  <p data-aos="fade-up" data-aos-delay="400" className='mb-8 text-center sm:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!</p>
  <div data-aos="fade-up" data-aos-delay="600" className='flex justify-center sm:justify-start'>
    <button className='bg-[#de2c4d] text-white py-3 px-6 font-bold rounded-xl shadow-md shadow-[#de2c4d] hover:bg-[#c91f3b]'>
      Download the App
    </button>
  </div>
</div>


          {/* Image Container */}
          <div className='w-full sm:w-1/2 flex justify-end items-center' data-aos="fade-up-left" data-aos-delay="200">
            <img src={FruitPlate2} alt="banner" className='w-full sm:w-[60%]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnlineStore