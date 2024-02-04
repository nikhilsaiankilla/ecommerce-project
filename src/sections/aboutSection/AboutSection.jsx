import { useNavigate } from 'react-router-dom';
import Button from '../../components/buttons/Button'
import { FaArrowCircleRight } from "react-icons/fa";
import { shoe1, shoe2, shoe3 } from './../../assests/index'
import Img from '../../components/lazyLoadImg/Img';

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full min-h-screen py-10 flex items-center justify-center flex-col gap-10'>
      <div className="w-full flex flex-col sm:flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full h-full flex-1 flex flex-col relative">
          <h1 className='text-2xl text-left sm:text-2xl md:text-4xl lg:text-5xl font-bold py-2'><span className='font-extrabold'>About</span> our company</h1>
          <p className='w-full text-sm sm:text-sm md:text-xl lg:text-xl mt-3 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quia. A similique explicabo beatae sint iure fugit, aperiam optio quasi!</p>
          <h1 className='text-7xl sm:text-7xl text-yellow-300 md:text-8xl lg:text-9xl font-extrabold my-3 overflow-hidden'>2024</h1>
          <h2 className='text-2xl sm:text-2xl lg:text-5xl font-semibold my-3 overflow-hidden capitalize'>top products</h2>
          <Button className='py-2 px-3 mt-5' path='/category/5' title='Explore products' />
        </div>
        <div className="flex-1 w-[600px] sm:w-[600px] md:w-full lg:w-full h-[600px] relative rounded-lg">
          <Img image={shoe1} className='w-full h-full object-cover z-0'/>
          <h1 className='text-xl sm:text-xl md:text-3xl lg:text-6xl text-white font-bold leading-normal text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2] overflow-hidden'>Choose your shoes</h1>
        </div>
      </div>
      <div className="h-1/2 w-full flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex-1 h-[700px] overflow-hidden">
          <div className='h-[30%] overflow-hidden'>
            <h2 className='font-bold text-wrap leading-normal capitalize w-full sm:w-full md:w-full lg:w-4/5 sm:text-3xl md:text-5xl md:leading-normal lg:text-5xl text-3xl overflow-hidden'>where your heart on your feet.</h2>
            <p className='font-thick text-wrap leading-normal mt-4 sm:text-lg md:text-lg lg:text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, commodi? Architecto quos temporibus esse dolorem quaerat aspernatur, libero consequuntur in.</p>
          </div>
          <div className='w-full h-[70%] mt-5 relative rounded-lg'>
            <h6 className='absolute flex items-center justify-between font-thick text-wrap leading-none gap-3 mt-4 sm:text-lg md:text-lg lg:text-2xl text-white right-5 top-1 z-10 cursor-pointer' onClick={() => navigate('/category/5')}>view all <FaArrowCircleRight className='text-lg sm:text-lg lg:text-2xl' /></h6>
            <Img image={shoe3} className='w-full h-full object-cover z-0'/>
          </div>
        </div>
        <div className="flex-1 w-full h-[700px] p-4 bg-red-200 rounded-lg">
          <div className='h-[40%] w-full'>
            <h3 className='text-2xl text-left sm:text-2xl md:text-2xl lg:text-3xl font-bold py-2'>Get best product under <span className='text-5xl font-extrabold leading-normal'>$150.99</span></h3>
            <h1 className='text-4xl font-bold uppercase leading-[1] overflow-hidden'>nike shoes</h1>
            <p className='w-full text-sm sm:text-sm md:text-xl lg:text-xl my-3 text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum maiores eveniet quisquam laborum consectetur deserunt error alias nostrum saepe quo!</p>
          </div>
          <div className='w-full h-[60%] rounded-lg pb-5'>
          <Img image={shoe2} className='w-full h-full object-cover z-0'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection