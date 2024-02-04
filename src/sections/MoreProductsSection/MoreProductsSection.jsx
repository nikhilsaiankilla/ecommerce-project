import Button from '../../components/buttons/Button'
import { shoe4, shoe5, shoe6 } from '../../assests/index'
import Img from '../../components/lazyLoadImg/Img'

const MoreProductsSection = () => {

  return (
    <div className='w-full flex flex-col sm:flex-col md:flex-col lg:flex-row gap-5'>
      < div className='flex-1 h-screen w-full rounded-3xl select-none relative' >
        <Img image={shoe5} className='w-full h-full object-cover absolute top-0 left-0' />
        <Button title='Male Products' path='men' className='absolute bottom-[5%] right-[5%]' />
      </div >

      <div className='flex-1 w-full min-h-screen flex flex-col gap-5'>
        <div className="w-full flex flex-col sm:flex-col md:flex-row lg:flex-row gap-5">
          < div className='flex-1 h-[350px] sm:h-[350px] md:h-[400px] w-full  rounded-3xl select-none relative' >
            <Img image={shoe6} className='w-full h-full object-cover absolute top-0 left-0' />
            <Button title='Male Products' path='men' className='absolute bottom-[5%] right-[5%]' />
          </div >
          <div className='flex-1 h-[350px] sm:h-[350px] md:h-[400px] w-full rounded-3xl select-none relative'>
            <Img image={shoe4} className='w-full h-full object-cover absolute top-0 left-0' />
            <Button title='Male Products' path='men' className='absolute bottom-[5%] right-[5%]' />
          </div>
        </div>
        <div className='w-full'>
          <h3 className='font-bold text-wrap leading-normal capitalize w-full sm:w-full md:w-full sm:text-3xl md:text-5xl md:leading-normal lg:text-5xl text-3xl overflow-hidden'>Adventure start with the right shoe ware your future</h3>
          <div className='w-full items-center justify-center gap-5 flex flex-wrap my-4'>
            <div className='flex items-center justify-center flex-col mb-2'>
              <h4 className='text-md font-bold'>1000</h4>
              <p className='text-sm font-light text-gray-500'>World wide store</p>
            </div>
            <div className='flex items-center justify-center flex-col mb-2'>
              <h4 className='text-md font-bold'>99%</h4>
              <p className='text-sm font-light text-gray-500'>customer satisfication</p>
            </div>
            <div className='flex items-center justify-center flex-col mb-2'>
              <h4 className='text-md font-bold'>160</h4>
              <p className='text-sm font-light text-gray-500'>available Products</p>
            </div>
            <div className='flex items-center justify-center flex-col mb-2'>
              <h4 className='text-md font-bold'>72%</h4>
              <p className='text-sm font-light text-gray-500'>yearly growth</p>
            </div>
            < div className='w-full flex items-center justify-between mt-5 flex-col sm:flex-col lg:flex-row' >
              <Button title='start shopping' path='men' className='mb-5' />
              <p className='w-full sm:w-full md:w-4/5 lg:w-3/5 text-gray-500 font-light text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, nulla.</p>
            </div >
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreProductsSection