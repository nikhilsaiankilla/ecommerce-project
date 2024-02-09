import { useState } from "react";
import { FaShoppingCart, FaRegHeart, FaHeart } from "react-icons/fa"
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addToWishlist, removeFromWishlist } from "../../store/features/wishlistSlice";
import { addToCart } from "../../store/features/cartSlics";
import { showToast } from '../../store/features/homeSlice'
import Img from '../../components/lazyLoadImg/Img'

const Card = ({ item }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [presentInWishlist, setPresentInWishlist] = useState(false);

    // adding product to the cart 
    const addingProductToCart = (item) => {
        dispatch(addToCart(item));
        dispatch(showToast('added to cart'))

        setTimeout(() => {
            dispatch(showToast(null))
        }, 3000)
    }

    // adding product to the wishlist 
    const addingProductToWishlist = (item) => {
        dispatch(addToWishlist(item));
        setPresentInWishlist(true);
        dispatch(showToast('added to wishlist'))

        setTimeout(() => {
            dispatch(showToast(null))
        }, 3000)
    }

    // removing from wishlist 
    const removingProductFromWishlist = (item) => {
        dispatch(removeFromWishlist(item));
        setPresentInWishlist(false);
        dispatch(showToast('removed from wishlist'))

        setTimeout(() => {
            dispatch(showToast(null))
        }, 3000)
    }

    return (
        <div className='card relative w-[240px] h-[240px] sm:w-[240px] sm:h-[240px] lg:w-[300px] lg:h-[300px] border border-yellow-300 rounded-lg select-none cursor-pointer'>
            <div className="w-full h-[75%] p-2" onClick={() => navigate(`/product/${item?.id}`)}>
                <Img image={item?.attributes?.images?.data[0]?.attributes?.url}  className='w-full h-full object-cover'/>
            </div>
            <div className="w-full h-[25%] px-2 flex items-center justify-between border-t-[1px] border-yellow-300 overflow-hidden">
                <div>
                    <h1 className="text-sm sm:text-sm md:text-lg font-bold text-yellow-400" onClick={() => navigate(`/product/${item?.id}`)}>{item?.attributes?.title.slice(0, 15)}</h1>
                    <div className="flex items-center gap-3">
                        <span className="flex items-center text-sm sm:text-sm md:text-lg line-through text-gray-400"><MdOutlineCurrencyRupee />{item?.attributes?.oldPrice}</span>
                        <span className="flex items-center text-sm sm:text-sm md:text-lg font-bold text-gray-400"><MdOutlineCurrencyRupee />{item?.attributes?.newPrice}</span>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-5">
                    <FaShoppingCart className="text-xl cursor-pointer text-yellow-400" onClick={() => addingProductToCart(item)} />
                    {presentInWishlist
                        ?
                        <FaHeart className="text-xl cursor-pointer text-yellow-400" onClick={() => removingProductFromWishlist(item)} />
                        :
                        <FaRegHeart className="text-xl cursor-pointer text-yellow-400" onClick={() => addingProductToWishlist(item)} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Card