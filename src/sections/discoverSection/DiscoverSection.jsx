import './style.css'

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import useFetch from './../../hooks/useFetch';
import Card from './../../components/card/Card';
import { CardLoadingSkeleton } from '../../components/loadingSkeleton/LoadingSkeleton';
import { addProducts, setLoading } from '../../store/features/productSlice';

const DiscoverSection = () => {
  const dispatch = useDispatch();

  const { productsData } = useSelector(state => state?.products);

  // Getting Data 
  const { data, loading } = useFetch('/api/products?populate=*');

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading('loading'));
      try {
        if (!loading && data?.data) {
          dispatch(addProducts(data?.data));
          dispatch(setLoading(null));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch, data?.data, loading]);

  return (
    <div className='w-full h-[80vh] flex-1 py-10 overflow-hidden'>
      <div className='flex flex-1 flex-col items-end justify-center'>
        <h1 className='uppercase font-bold leading-normal '>discover</h1>
        <h3 className='uppercase font-thick mt-[-20px]'>new</h3>
      </div>
      <div className="controls-wrapper flex gap-10">
        <span className='cursor-pointer'><FaAngleLeft className='text-3xl' /></span>
        <span className='cursor-pointer'><FaAngleRight className='text-3xl' /></span>
      </div>
      <div className="items-carousel w-full my-5 px-0 sm:px-0 md:px-0 lg:px-5 overflow-x-hidden">
        <div className={`carousel w-full h-full overflow-x-scroll`}>
          <div className="card-wrapper w-fit flex gap-5 sm:gap-5 md:gap-5 lg:gap-10">
            {
              loading
                ?
                Array.from({ length: 6 }).map((_, index) => <CardLoadingSkeleton key={index} />)
                :
                productsData?.slice(0, 8).map(item => <Card item={item} key={item.id} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
