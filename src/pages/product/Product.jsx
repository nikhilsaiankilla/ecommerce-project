import { useEffect, useState } from "react"
import { FaRegStar, FaShoppingCart, FaHeart, FaLongArrowAltRight, FaAngleRight } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from 'react-icons/md'
import { useNavigate, useParams } from "react-router-dom";
import { CardLoadingSkeleton, ProductPageLoadingSkeleton, ProductSmallLoadingSkeletoon, ProductDetailsSkeleton } from "../../components/loadingSkeleton/LoadingSkeleton";
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from "../../store/features/cartSlics";
import { addToWishlist } from "../../store/features/wishlistSlice";
import { showToast } from "../../store/features/homeSlice";
import useFetch from "../../hooks/useFetch";
import Card from '../../components/card/Card'
import Img from "../../components/lazyLoadImg/Img";

const Product = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { productsData: data, ProductsLoading: loading } = useSelector(state => state?.products);

  //getting the product id from url
  const { id } = useParams();

  //fetching the product details
  const { data: productData, loading: productLoading } = useFetch(`/api/products/${id}?populate=*`);

  //storing all the details
  const productDetails = productData?.data?.attributes;

  //storing images
  const productImages = productDetails?.images?.data;

  //declaring the available shoe sizes
  const sizes = [6, 7, 8, 9, 10, 11];

  useEffect(() => {
    setSelectedSize(null);
  }, [id])

  //setting the main image
  const handleChangeImage = (index) => {
    setActiveImage(index);
  }

  const addingProductToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(showToast('add to cart'));

    setTimeout(() => {
      dispatch(showToast(null));
    }, 3000);
  }

  const addingProductToWishlist = (item) => {
    dispatch(addToWishlist(item));

    dispatch(showToast('add to wishlist'));

    setTimeout(() => {
      dispatch(showToast(null));
    }, 3000);
  }

  return (
    <div className="w-full min-h-screen flex flex-col gap-5">
      <div className="w-full min-h-screen flex flex-col sm:flex-col md:flex-col lg:flex-row gap-5">

        <div className="w-full lg:h-screen flex flex-col sm:flex-col md:flex-col lg:flex-row-reverse  gap-2">

          {
            productLoading
              ?
              <ProductPageLoadingSkeleton />
              :
              <div className="w-full sm:w-full md:w-full lg:w-[80%] h-[500px] md:h-[500px] lg:h-[82vh] select-none">
                <div className="w-full h-full flex items-center justify-center">
                  {productImages && productImages.length > 0 && (
                    <Img image={productImages[activeImage]?.attributes?.url} className="w-full h-full object-cover" />
                  )}
                </div>
              </div>
          }



          <div className="w-full sm:w-full md:w-full lg:w-[20%] flex flex-row sm:flex-row md:flex-row lg:flex-col flex-wrap gap-2 lg:gap-5">
            {
              productLoading
                ?
                <>
                  <ProductSmallLoadingSkeletoon />
                  <ProductSmallLoadingSkeletoon />
                  <ProductSmallLoadingSkeletoon />
                  <ProductSmallLoadingSkeletoon />
                </>
                :
                <>
                  {
                    productImages?.map((image, index) => (
                      <div className="w-[70px] h-[70px] sm:w-[70px] sm:h-[70px] lg:w-[100px] lg:h-[100px] rounded-xl cursor-pointer select-none" key={index} onClick={() => handleChangeImage(index)}>
                        <div className="w-full h-full flex items-center justify-center overflow-hidden">
                          <Img image={image?.attributes?.url} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    ))
                  }
                </>
            }
          </div>
        </div>
        {
          productLoading
            ?
            <ProductDetailsSkeleton />
            :
            <div className="w-full flex flex-col gap-5">
              <h2 className="text-2xl lg:text-3xl font-bold text-wrap leading-normal overflow-hidden text-yellow-400">{productDetails?.title}</h2>
              <p className="text-md text-gray-500 font-light text-wrap leading-normal">{productDetails?.description}</p>
              <div className="flex items-center gap-1 lg:gap-5">
                <div className="flex items-center gap-1 lg:gap-5">
                  <FaRegStar className="text-2xl cursor-pointer" />
                  <FaRegStar className="text-2xl cursor-pointer" />
                  <FaRegStar className="text-2xl cursor-pointer" />
                  <FaRegStar className="text-2xl cursor-pointer" />
                  <FaRegStar className="text-2xl cursor-pointer" />
                </div>
                <span className="text-lg font-bold">{productDetails?.rating ? productDetails?.rating : 0} stars</span>
              </div>
              <hr className="border border-yellow-300" />

              <div>
                <h5 className="text-xl md:text-2xl font-bold capitalize overflow-hidden">price</h5>
                <div className="w-full flex items-center gap-6">
                  <span className="text-3xl leading-normal text-black font-bold flex items-center justify-between"><MdOutlineCurrencyRupee /> {productDetails?.newPrice}</span>
                  <span className="text-3xl leading-normal text-black font-thin flex items-center justify-between"><MdOutlineCurrencyRupee className="text-3xl font-thin" /> <span className="line-through">{productDetails?.oldPrice ? productDetails?.oldPrice : productDetails?.newPrice + 3000}</span></span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-10">
                  <h5 className="text-xl md:text-2xl font-bold capitalize overflow-hidden leading-[1]">Available sizes</h5>
                  <h6 className="text-sm md:text-lg text-nowrap gap-1 flex items-center justify-center text-yellow-400">select size <FaAngleRight /></h6>
                </div>
                <div className="w-full flex items-center justify-start gap-2 flex-wrap mt-5">
                  {
                    sizes?.map((size, index) => <button className={`block w-10 h-10 border-none outline-none cursor-pointer rounded-md text-xl ${selectedSize === size ? "bg-yellow-200 shadow-sm shadow-yellow-400 text-white" : "bg-gray-200"}`}
                      onClick={() => setSelectedSize(size)}
                      key={index}
                    >
                      {size}
                    </button>)
                  }
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start flex-wrap gap-5 mt-2">
                <button className="flex items-center justify-between gap-5 px-5 py-3 bg-yellow-300 text-white text-sm lg:text-lg rounded-lg uppercase font-bold" onClick={() => { addingProductToCart(productData?.data) }}><FaShoppingCart /> add to cart</button>
                <button className="flex items-center justify-between gap-5 px-5 py-3 bg-yellow-300 text-white text-sm lg:text-lg rounded-lg uppercase font-bold" onClick={() => { addingProductToWishlist(productData?.data) }}><FaHeart /> add to wishlist</button>
              </div>
              <hr className="border border-yellow-300" />

              <ul className="w-full flex flex-col gap-2">
                <li className="text-lg text-gray-400 leading-noraml">100% Original Products</li>
                <li className="text-lg text-gray-400 leading-noraml">Pay on delivery might be available</li>
                <li className="text-lg text-gray-400 leading-noraml">Easy 14 days returns and exchanges</li>
                <li className="text-lg text-gray-400 leading-noraml">Try & Buy might be available</li>
              </ul>
            </div>
        }

      </div>
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-2xl text-left sm:text-2xl md:text-4xl lg:text-5xl font-bold py-2">popular collection</h1>
          <span className="flex items-center justify-center text-nowrap gap-2 text-gray-600 cursor-pointer" onClick={() => { navigate('/category/4') }}>
            See more <FaLongArrowAltRight className="text-2xl" />
          </span>
        </div>
        <div className="w-full flex flex-1 flex-wrap gap-10 mt-10">
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
              data?.slice(0, 8).map((item) => (<Card item={item} key={item.id} />))
          }
        </div>
      </div>
    </div>
  )
}

export default Product