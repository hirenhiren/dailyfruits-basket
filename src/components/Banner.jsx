import React from 'react'
import fruitePlateImage from '../assets/fruit-plate.png';
import bagIcon from '../assets/bag-shopping-svgrepo-com.svg';
function Banner() {
  return (
   <div className='w-[90%] mx-auto overflow-hidden'>
   <div className="flex flex-col sm:flex-row py-10 justify-between items-center">
       <div className='text-center md:text-left w-[70%]'>
            <h1 data-aos="fade-right" data-aos-delay="0" className='averia-serif-libre-bold text-5xl sm:text-7xl md:text-4xl lg:text-7xl leading-[60px] sm:leading-[90px]'> Healthy 
            Fresh <span className='text-[#fb923c]'>Fruits!</span></h1>
            <h2 data-aos="fade-right" data-aos-delay="200" className='text-2xl leading-[40px] sm:leading-[50px] py-8 sm:py-4'>Order Now For Fresh Healthy Life</h2>
            <p data-aos="fade-right" data-aos-delay="400" className='text-gray-400'>Healthy and yummy food for fresh morning breakfast. Eat Daily for good health and mind Order now and get 20% off on your first order</p>
            <button data-aos-delay="600" data-aos="fade-right" className='my-8 bg-[#de2c4d] text-white  py-3 px-6 font-bold rounded-xl shadow-md shadow-[#de2c4d]'>  <img src={bagIcon} className="mr-4 inline" alt="" width="20px" />Order Now</button>
       </div>
       <div className='flex justify-center' id="bannerImgDiv" >
        <img id="bannerImg" className="animated-image" src={fruitePlateImage}  alt="fruitPlate" width="80%"/>
       </div>
    </div>
    </div>
    
  )
}

export default Banner