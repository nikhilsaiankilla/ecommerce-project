import React from 'react'
import { BannerLoadingSkeleton } from '../loadingSkeleton/LoadingSkeleton'
import { useNavigate } from 'react-router-dom'

const Banner = ({ categoryLoading, categoryData }) => {
    const navigate = useNavigate();
    return (
        <>{
            !categoryLoading
                ?
                <div className='w-full h-full absolute top-0 left-0  p-5 sm:p-5 lg:px-10 z-10 shadow-lg'>
                    <h1 className='w-full sm:w-full md:w-full lg:w-4/5 text-2xl sm:text-2xl md:text-5xl lg:text-4xl leading-noraml py-2 my-3 font-bold text-white capitalize' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        {categoryData?.data?.attributes?.title}
                    </h1>
                    <p className='w-full sm:w-full md:w-full lg:w-3/5 text-sm sm:text-sm md:text-lg lg:text-lg leading-normal py-1 mb-3 text-white'>{categoryData?.data?.attributes?.description}</p>
                    <button onClick={() => navigate('/category/1')} className='block px-4 py-2 text-sm sm:text-sm md:text-lg lg:text-xl font-bold bg-black text-white rounded-xl capitalize'>shop now</button>
                </div>
                :
                <BannerLoadingSkeleton />
        }</>
    )
}

export default Banner