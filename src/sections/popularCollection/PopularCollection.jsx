import { FaLongArrowAltRight } from "react-icons/fa";
import Card from "../../components/card/Card";
import { useNavigate } from "react-router-dom";
import useFetch from './../../hooks/useFetch'
import { CardLoadingSkeleton } from '../../components/loadingSkeleton/LoadingSkeleton'

const PopularCollection = () => {

  const navigate = useNavigate();

  // Fetching the data 

  const { data, loading } = useFetch('/api/products?populate=*&[filters][categories][id]=6');

  const products = data?.data;

  return (
    <div className='w-full py-10'>
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl text-left sm:text-2xl md:text-4xl lg:text-5xl font-bold py-2">popular collection</h1>
        <span className="flex items-center justify-center text-nowrap gap-2 text-gray-600 cursor-pointer" onClick={() => { navigate('/men') }}>
          See more <FaLongArrowAltRight className="text-2xl" />
        </span>
      </div>
      <div className="w-full flex justify-center items-center flex-1 flex-wrap gap-5 sm:gap-5 lg:gap-10 mt-5">
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
            products?.slice(0, 8).map((item) => (<Card item={item} key={item.id}/>))
        }
      </div>
    </div>
  )
}

export default PopularCollection