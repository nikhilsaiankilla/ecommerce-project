import { FaHeart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdOutlineCurrencyRupee } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../../store/features/wishlistSlice'
import { emptyWishlist } from '../../assests/index'
import { showToast } from '../../store/features/homeSlice'
import { addToCart } from '../../store/features/cartSlics'
import Img from '../../components/lazyLoadImg/Img'

const Favourite = () => {
  const { wishlist } = useSelector(state => state.wishlist);

  const dispatch = useDispatch()

  const addingProductToCart = (item) => {
    dispatch(addToCart(item));

    dispatch(showToast('add to cart'));

    setTimeout(() => {
      dispatch(showToast(null));
    }, 2000)
  }

  const removingItemFromWishlist = (item) => {
    dispatch(removeFromWishlist(item));

    dispatch(showToast('removed from wishlist'));

    setTimeout(() => {
      dispatch(showToast(null));
    }, 2000)
  }

  return (
    <div className='w-full my-5'>
      <h1 className='text-2xl font-bold leading-normal flex items-center gap-5 my-4 text-yellow-400 '>Your wishlist <FaHeart className='text-black font-bold' /></h1>
      <ul className="w-full flex flex-col gap-3">
        {
          wishlist.length > 0
            ?
            wishlist.map(item =>
              <li className="w-full h-auto sm:h-auto lg:h-[320px] gap-3 md:gap-4 lg:gap-10 my-1 flex flex-col sm:flex-col md:flex-row p-3 lg:p-2 border-2 border-gray-200 overflow-hidden relative"
                key={item?.id}
              >
                <IoMdClose className="absolute text-3xl top-2 right-2 md:top-6 md:right-6 cursor-pointer" onClick={() => removingItemFromWishlist(item)}/>
                <div className='w-full h-full sm:w-full sm:h-full md:w-[300px] md:h-[300px]'>
                  <Img image={'http://localhost:1337' + item?.attributes?.images?.data[0].attributes?.url} className='w-full h-full object-cover' />
                </div>

                <div className='w-full md:w-[70%] h-full flex flex-col items-start justify-center gap-3 mt-3'>
                  <h1 className='text-xl md:text-4xl overflow-hidden font-semibold'>
                    {item?.attributes?.title}
                  </h1>
                  <p>{item?.attributes?.description}</p>
                  <div className="flex items-center flex-wrap gap-4 text-xl font-bold mt-2">
                    <span className="font-extrabold">price : </span>
                    <div className="flex flex-wrap gap-4">
                      <span className="flex items-center text-black"><MdOutlineCurrencyRupee /> {item?.attributes?.newPrice}</span>
                      <span className="flex items-center line-through text-gray-400"><MdOutlineCurrencyRupee /> {item?.attributes?.oldPrice}</span>
                    </div>
                  </div>
                  <div className="w-full flex flex-col sm:flex-col md:flex-row mt-5 gap-2">
                    <button className='transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-yellow-400 hover:bg-yellow-600 text-white font-normal py-2 px-4 mr-1 rounded' onClick={() => addingProductToCart(item)}>move from cart</button>
                    <button className='transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-yellow-400 hover:bg-yellow-600 text-white font-normal py-2 px-4 mr-1 rounded' onClick={() => removingItemFromWishlist(item)}>Remove from wishlist</button>
                  </div>
                </div>
              </li>
            )
            :
            <div className="w-full h-full flex items-center justify-center select-none">
              <img src={emptyWishlist} alt="empty-wishlist" className="w-2/5 h-2/5 object-cover" />
            </div>
        }
      </ul>
    </div>
  )
}

export default Favourite