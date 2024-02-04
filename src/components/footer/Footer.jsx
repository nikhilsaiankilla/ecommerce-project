import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full'>
      <div className='w-full px-10 md:px-24 my-5 py-10 flex items-center justify-center sm:justify-center md:justify-between  lg:justify-between gap-6 flex-wrap'>
        <div>
          <h1 className='text-2xl font-bold uppercase text-yellow-400'>About us</h1>
          <ul className='mt-5'>
            <li className='text-md font-light text-gray-500'>careers</li>
            <li className='text-md font-light text-gray-500'>press and news</li>
            <li className='text-md font-light text-gray-500'>partnerships</li>
            <li className='text-md font-light text-gray-500'>privacy policy</li>
            <li className='text-md font-light text-gray-500'>terms and services</li>
          </ul>
        </div>
        <div>
          <h1 className='text-2xl font-bold uppercase  text-yellow-400'>support</h1>
          <ul className='mt-5'>
            <li className='text-md font-light text-gray-500'>careers</li>
            <li className='text-md font-light text-gray-500'>press and news</li>
            <li className='text-md font-light text-gray-500'>investor relations</li>
            <li className='text-md font-light text-gray-500'>programming</li>
          </ul>
        </div>
        <div>
          <h1 className='text-2xl font-bold uppercase  text-yellow-400'>community</h1>
          <ul className='mt-5'>
            <li className='text-md font-light text-gray-500'>careers</li>
            <li className='text-md font-light text-gray-500'>press and news</li>
            <li className='text-md font-light text-gray-500'>partnerships</li>
            <li className='text-md font-light text-gray-500'>privacy policy</li>
            <li className='text-md font-light text-gray-500'>terms and services</li>
          </ul>
        </div>
        <div>
          <h1 className='text-2xl font-bold uppercase  text-yellow-400'>About us</h1>
          <ul className='mt-5'>
            <li className='text-md font-light text-gray-500'>careers</li>
            <li className='text-md font-light text-gray-500'>press and news</li>
            <li className='text-md font-light text-gray-500'>partnerships</li>
            <li className='text-md font-light text-gray-500'>privacy policy</li>
            <li className='text-md font-light text-gray-500'>terms and services</li>
          </ul>
        </div>
      </div>
      <div className='w-full h-[100px] flex items-center justify-between flex-col sm:flex-col md:flex-row lg:flex-row bg-gray-500'>
        <h3 className='text-4xl font-bold leading-normal text-white'>Nik Store</h3>
        <div className="icons flex gap-5 text-white text-lg sm:text-lg md:text-lg lg:text-xl py-3">
          <FaFacebook className="cursor-pointer"/>
          <FaXTwitter className="cursor-pointer"/>
          <FaLinkedin className="cursor-pointer"/>
          <FaInstagram className="cursor-pointer"/>
        </div>
      </div>
    </div>
  )
}

export default Footer