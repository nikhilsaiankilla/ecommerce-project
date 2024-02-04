import './style.css';
import { TestImg } from './../../assests/index';
import Button from '../../components/buttons/Button';
import {MdOutlineCurrencyRupee} from 'react-icons/md'

const HeroSection = () => {
  return (
    <div className='w-full h-full flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between gap-5'>
      <div className="w-full flex flex-1 flex-col py-6 sm:py-6 md:py-6 lg:py-12">
        <h1 className='font-extrabold text-wrap leading-normal capitalize w-full sm:w-full md:w-full lg:w-4/5 sm:text-3xl md:text-5xl md:leading-normal lg:text-7xl text-3xl overflow-hidden'>shoes as unique as the human who wears it.</h1>
        <p className='font-thick text-wrap leading-normal w-4/5 mt-4 sm:text-lg md:text-lg lg:text-2xl'>we pride ourselves on offering a vast collection of shoes that cater to every taste, occasion, and budget</p>
        <h2 className='text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-yellow-400 mt-1 sm:mt-1 md:mt-1 lg:mt-5 leading-normal text-center flex items-center justify-center overflow-hidden'><MdOutlineCurrencyRupee className='mr-[-10px]'/> 10999</h2>
      </div>
      <div className="w-full flex-1 relative overflow-hidden">
        <h1 className='absolute right-3 text text-yellow-300'>Mens</h1>
        <h1 className='absolute right-8 bottom-[30%] text-effect'>Shoes</h1>
        <div className='img-div'>
          <img src={TestImg} alt='img' />
        </div>
        <Button title='Shop now' path='/product/23' className='absolute bottom-[20%] right-[10%]'/>
      </div>
    </div>
  );
};

export default HeroSection;
