import { useParams } from 'react-router-dom'
import Card from '../../components/card/Card';
import useFetch from './../../hooks/useFetch'
import { CardLoadingSkeleton } from '../../components/loadingSkeleton/LoadingSkeleton';
import Banner from '../../components/banner/Banner';
import Img from '../../components/lazyLoadImg/Img';

const Category = () => {
  const { name } = useParams();

  const { data, loading } = useFetch(`/api/products?populate=*&[filters][categories][id]=${name}`);

  const { data: categoryData, loading: categoryLoading } = useFetch(`/api/categories/${name}?populate=*`);

  return (
    <div className='w-full'>
      <div className='w-full h-[80vh] sm:h-[80vh] md:h-[70vh] lg:h-[60vh] relative rounded-3xl' >
        <Banner categoryLoading={categoryLoading} categoryData={categoryData} />
        <div className='w-full h-full absolute top-0 left-0 z-0 rounded-3xl'>
          <Img image={`http://localhost:1337` + categoryData?.data?.attributes?.image?.data?.attributes?.url} className='w-full h-full object-cover rounded-3xl' />
        </div>
      </div>
      <div className='w-full flex items-center justify-center flex-col my-5'>
        <h1 className='text-3xl md:text-5xl font-bold capitalize leading-normal py-5 overflow-hidden'>{categoryData?.data?.attributes?.title}s Shoes</h1>
        <p className='w-full md:w-4/5 text-center text-black text-sm md:text-lg'>{categoryData?.data?.attributes?.description}</p>
      </div>
      <div className="w-full flex items-center justify-center flex-1 flex-wrap gap-1 sm:gap-1 md:gap-1 lg:gap-10 mt-5">
        {
          loading
            ?
            <>
              <CardLoadingSkeleton />
              <CardLoadingSkeleton />
              <CardLoadingSkeleton />
              <CardLoadingSkeleton />
              <CardLoadingSkeleton />
              <CardLoadingSkeleton />
              <CardLoadingSkeleton />
              <CardLoadingSkeleton />
            </>
            :
            data?.data?.map((item) => (<Card item={item} key={item?.id}/>))
        }
      </div>
    </div>
  )
}

export default Category