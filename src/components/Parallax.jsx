import React from 'react'

function Parallax() {
  return (
    <div className="overflow-hidden">
      <div className='py-[50px] mt-[50px]'>
      <div className="w-[90%] mx-auto">
        <div className="rounded-2xl bg-[url('./assets/banner-bg.jpg')] h-[450px]  bg-cover bg-fixed bg-center bg-no-repeat shadow-lg flex  justify-end items-center">
        <div className="flex justify-end">
          <div className='w-full sm:w-[60%] flex flex-col justify-end'>
            <h1 data-aos="fade-up" data-aos-delay="0" className='text-3xl sm:text-6xl md:text-4xl lg:text-6xl mb-4 font-bold sm:text-left'>GET FRESH <br /> FRUITS TODAY</h1>
            <p data-aos="fade-up" data-aos-delay="200" className='mb-4 text-center sm:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!</p>
            <div data-aos="fade-up" data-aos-delay="400" className='flex sm:justify-start justify-center'>
              <button className='bg-[#de2c4d] text-white py-3 px-6 font-bold rounded-xl shadow-md shadow-[#de2c4d] hover:bg-[#c91f3b]'>
               Order Now
              </button>
            </div>
          </div>
        </div>
      </div> 
      </div>
    </div>
    </div>
  )
}

export default Parallax