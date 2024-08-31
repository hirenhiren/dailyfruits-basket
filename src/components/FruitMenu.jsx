import React from 'react';
import productApple from '../assets/fruits/apple.png';
import productAvocado from '../assets/fruits/avocado.png';
import productCherry from '../assets/fruits/cherry.png';
import productOrange from '../assets/fruits/orange.png';
// Import other images as needed

function FruitMenu() {
  return (
    <div className='w-[90%] mx-auto '>
      <h3 className='font-bold text-2xl leading-[60px] sm:leading-[90px]' data-aos="fade-right">OUR MENU</h3>
      <div className='flex flex-col mt-2 sm:flex-row  sm:overflow-hidden'>
        <div data-aos="fade-left" data-aos-delay="0" className='rounded-2xl bg-white flex items-center shadow-md shadow-gray-400 space-y-6 p-4  sm:w-3/12 m-2 my-6'>
          <div className='w-1/3 relative'> {/* Added relative positioning */}
            <img 
              src={productApple} 
              alt="apple" 
              className='-mt-14 w-[80%]' // Adjust the margin-top value as needed
            />
          </div>
          <div className='ml-4'>
            <p className='font-semibold text-lg'>Fresh Red Apples</p>
            <p className='text-[#fb923c] text-lg font-medium'>$3.99</p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="200" className='rounded-2xl bg-white flex items-center shadow-md shadow-gray-400 space-y-6 p-4  sm:w-3/12 m-2 my-6'>
          <div className='w-1/3 relative'> {/* Added relative positioning */}
            <img 
              src={productOrange} 
              alt="apple" 
              className='-mt-14 w-[80%]' // Adjust the margin-top value as needed
            />
          </div>
          <div className='ml-4'>
            <p className='font-semibold text-lg'>Fresh Oranges</p>
            <p className='text-[#fb923c] text-lg font-medium'>$4.99</p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="300" className='rounded-2xl bg-white flex items-center shadow-md shadow-gray-400 space-y-6  p-4  sm:w-3/12 m-2 my-6'>
          <div className='w-1/3 relative'> {/* Added relative positioning */}
            <img 
              src={productAvocado} 
              alt="apple" 
              className='-mt-14 w-[80%]' // Adjust the margin-top value as needed
            />
          </div>
          <div className='ml-4'>
            <p className='font-semibold text-lg'>Fresh Avocado</p>
            <p className='text-[#fb923c] text-lg font-medium'>$5.99</p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="400" className='rounded-2xl bg-white flex items-center shadow-md shadow-gray-400 space-y-6  p-4  sm:w-3/12 m-2 my-6'>
          <div className='w-1/3 relative'> {/* Added relative positioning */}
            <img 
              src={productCherry} 
              alt="apple" 
              className='-mt-14 w-[80%]' // Adjust the margin-top value as needed
            />
          </div>
          <div className='ml-4'>
            <p className='font-semibold text-lg'>Fresh Cherries</p>
            <p className='text-[#fb923c] text-lg font-medium'>$2.99</p>
          </div>
        </div>
        {/* Add other products as needed */}
      </div>
    </div>
  );
}

export default FruitMenu;
