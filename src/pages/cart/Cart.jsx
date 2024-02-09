import { useEffect, useRef, useState, useCallback, useId } from 'react';

import { IoMdClose } from 'react-icons/io';
import { FiShoppingCart } from 'react-icons/fi';
import { FaPlus, FaMinus, FaRegCopy } from "react-icons/fa6";
import { MdOutlineCurrencyRupee } from 'react-icons/md';

import { emptyCart } from '../../assests';
import Img from '../../components/lazyLoadImg/Img'

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addToWishlist } from '../../store/features/wishlistSlice';
import { removeFromCart, addToCart, clearCart } from '../../store/features/cartSlics';
import { showToast, addPayments } from '../../store/features/homeSlice';
import { addOrder } from '../../store/features/orderSlice'

const Cart = () => {
    const uniqueId = useId();
    const navigate = useNavigate();
    const [isCopied, setIsCopied] = useState(false);
    const discountCode = useRef(null);
    const discountCodeApplied = useRef(null);

    const [selectedSize, setSelectedSize] = useState(10);
    const [totalAmount, setTotalAmount] = useState(0);
    const [platFormFeeApplied, setPlatFormFeeApplied] = useState(0);
    const [discountApplied, setDiscountApplied] = useState(0);
    const [shippingFeeApplied, setShippingFeeApplied] = useState(0);
    const [totalAmountAfterDiscount, setTotalAmountAfterDiscount] = useState(0);

    const { cart } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    // adding product to the wishlist
    const addingProductToWishlist = useCallback((item) => {
        dispatch(addToWishlist(item));

        dispatch(showToast('added to wishlist'));

        setTimeout(() => {
            dispatch(showToast(null));
        }, 2000)
    }, [dispatch]);

    // removing product from the cart
    const removingProductFromCart = useCallback((item) => {
        dispatch(removeFromCart(item));

        dispatch(showToast('removed from cart'));

        setTimeout(() => {
            dispatch(showToast(null));
        }, 2000)
    }, [dispatch]);

    // adding product to the cart
    const addingProductToCart = useCallback((item) => {
        const cartItem = {
            selectedSize: selectedSize,
            ...item,
        };

        dispatch(addToCart(cartItem));

        dispatch(showToast('quantity increased by 1'));

        setTimeout(() => {
            dispatch(showToast(null));
        }, 2000)
    }, [dispatch, selectedSize]);

    // calculating the total amount of products
    const calculateTotal = useCallback((items) => {
        const Total = items.reduce((total, item) => {
            const quantity = item?.quantity || 1;
            const price = item?.attributes?.newPrice || 0;
            return total + price * quantity;
        }, 0);
        return Total;
    }, []);

    // calcumating the discount 
    const calculatingDiscount = useCallback((discount) => {
        let discountAmount = 0;
        switch (discount) {
            case 'NIK300': {
                discountAmount = 300;
                break;
            }
            case 'NIK400': {
                discountAmount = 400;
                break;
            }
            case 'NIK500': {
                discountAmount = 500;
                break
            }
            case 'NIK1000': {
                discountAmount = 1000;
                break;
            }
            case 'NIK3000': {
                discountAmount = 3000;
                break;
            }
            case 'NIK5000': {
                discountAmount = 5000;
                break;
            }
            default:
                discountAmount = 0;
                break;
        }
        return discountAmount;
    }, []);

    // calculating the platform fee 
    const calculatingPlanformFee = useCallback(() => {
        let platformAmount = 20;
        if (totalAmount >= 10000) {
            platformAmount = 0;
        }
        return platformAmount;
    }, [totalAmount]);

    // calculating the shipping fee 
    const calculatingShippingFee = useCallback(() => {
        let shippingAmount = 100;
        if (totalAmount >= 15000) {
            shippingAmount = 0;
        }
        return shippingAmount;
    }, [totalAmount]);

    // handling the checkout 
    const handleCheckout = () => {
        if (totalAmountAfterDiscount > 0) {
            const updatedPayment = {
                totalAmountBeforeDiscount: totalAmount,
                totalAmountAfterDiscount: totalAmountAfterDiscount,
                platFormFeeApplied: platFormFeeApplied,
                discountApplied: discountApplied,
                shippingFeeApplied: shippingFeeApplied,
            }

            if (cart.length > 0) {

                //BEFORE CREATING NEW FEILDS IN THE ORDER_ITEMS STORING THE ORGINAL CART
                // const orginalCart = [...cart];

                //CREATING THE NEW ORDER_ITEMS OBJECT WITH ADDITITONAL NEW FIELDS
                const orderItems = {
                    orderId: uniqueId,
                    totalOrderAmount: totalAmountAfterDiscount,
                    items: [...cart],
                }

                //ADDING THE NEW ORDER_ITEMS OBJECTS TO THE ORDERS
                dispatch(addOrder(orderItems));

                dispatch(addPayments(updatedPayment));
                navigate('/checkout');
            }
        }
    };

    // applying the discount 
    const applyDiscount = useCallback(() => {
        const discountCodeValue = discountCodeApplied.current?.value.trim();
        const calculatedDiscount = calculatingDiscount(discountCodeValue || 0);
        setDiscountApplied(calculatedDiscount);
        setTotalAmountAfterDiscount(totalAmount - calculatedDiscount + shippingFeeApplied + platFormFeeApplied);
    }, [calculatingDiscount, totalAmount, shippingFeeApplied, platFormFeeApplied]);

    // executes whenever the products are added and removed
    useEffect(() => {
        const calculatedTotalAmount = calculateTotal(cart);
        const calculatedPlatformFee = calculatingPlanformFee();
        const calculatedShippingFee = calculatingShippingFee();
        const discountCodeValue = discountCodeApplied.current?.value.trim() || 'NIK0';
        const calculatedDiscount = calculatingDiscount(discountCodeValue);

        setTotalAmount(calculatedTotalAmount);
        setPlatFormFeeApplied(calculatedPlatformFee);
        setShippingFeeApplied(calculatedShippingFee);
        setDiscountApplied(calculatedDiscount);
        setTotalAmountAfterDiscount(calculatedTotalAmount - calculatedDiscount + calculatedShippingFee + calculatedPlatformFee);
    }, [cart, calculatingPlanformFee, calculatingShippingFee, calculateTotal, calculatingDiscount]);

    // copies the coupon code
    const handleCopy = async () => {
        try {
            setIsCopied(false);
            const discountCodeElement = discountCode.current;
            if (discountCodeElement) {
                await navigator.clipboard.writeText(discountCodeElement.innerText);
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 3000);
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <div className='w-full min-h-[60vh] my-5 relative'>
            {cart.length > 0 ? (
                <div className='w-full'>
                    <div className='w-full flex items-center justify-between flex-wrap'>
                        <h1 className='text-2xl font-bold leading-normal flex items-center gap-5 my-4'>Your Cart <FiShoppingCart className='text-yellow-400 font-bold' /></h1>
                        <button className='btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-yellow-400 hover:bg-yellow-600 text-white font-normal py-2 px-4 mr-1 rounded' onClick={() => dispatch(clearCart())}>clear cart</button>
                    </div>
                    <div className='w-full flex flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row justify-between gap-2'>
                        <ul style={{ flex: 2 }} className='flex gap-5 flex-col'>
                            {cart.map(item => (
                                <li className="w-full h-auto sm:h-auto lg:h-[320px] gap-3 md:gap-4 lg:gap-10 my-1 flex items-center justify-center flex-col sm:flex-col md:flex-row p-3 lg:p-2 border-2 border-gray-200 overflow-hidden relative"
                                    key={item?.id}
                                >
                                    <IoMdClose className="absolute text-3xl top-2 right-2 md:top-6 md:right-6 cursor-pointer" onClick={() => removingProductFromCart(item)} />
                                    <div className='w-full h-full sm:w-full sm:h-full md:w-[250px] md:h-[250px]'>
                                        <Img image={item?.attributes?.images?.data[0].attributes?.url} className='w-full h-full object-cover' />
                                    </div>

                                    <div className='w-full md:w-[70%] h-full flex flex-col items-start justify-center gap-3 mt-3'>

                                        <h3 className="text-2xl font-semibold capitalize leading-loose overflow-hidden">{item?.attributes?.title}</h3>
                                        <p className='text-sm text-gray-500 leading-loose overflow-hidden'>{item?.attributes?.description}</p>

                                        <div className='w-full flex flex-col justify-center gap-2'>

                                            <div className='w-full h-auto flex gap-2 md:gap-4 flex-wrap'>
                                                <div className='flex items-center gap-1'>
                                                    <span className='px-3 py-1 bg-yellow-400 text-white rounded-sm text-lg'>size</span>
                                                    <select className='w-9 h-9 flex items-center justify-center bg-gray-400 text-white rounded-sm text-lg outline-none border-none cursor-pointer' onChange={(e) => setSelectedSize(e.target.value)}>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                    </select>
                                                </div>

                                                <div className='flex items-center gap-1'>
                                                    <span className='px-3 py-1 bg-yellow-400 text-white rounded-sm text-lg'>quantity</span>
                                                    <div className='flex gap-1'>
                                                        <span className='w-9 h-9 flex items-center justify-center bg-gray-400 text-white rounded-sm text-lg outline-none border-none cursor-pointer' onClick={() => removingProductFromCart(item)}><FaMinus /></span>
                                                        <span className="w-9 h-9 flex items-center justify-center text-black border-2 border-gray-500 rounded-sm text-lg outline-none cursor-pointer select-none">{item?.quantity}</span>
                                                        <span className='w-9 h-9 flex items-center justify-center bg-gray-400 text-white rounded-sm text-lg outline-none border-none cursor-pointer' onClick={() => addingProductToCart(item)}><FaPlus /></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full h-auto flex flex-wrap gap-3 mt-3'>
                                                <span className="font-extrabold leading-loose overflow-hidden">price : </span>
                                                <div className='flex flex-wrap gap-4'>
                                                    <span className='text-lg lg:text-xl font-light leading-loose overflow-hidden text-gray-300 line-through flex items-center justify-center'><MdOutlineCurrencyRupee /> <span>{item?.attributes?.oldPrice}</span></span>
                                                    <span className='text-lg lg:text-xl font-bold leading-loose overflow-hidden text-black flex items-center justify-center'><MdOutlineCurrencyRupee /> <span>{item?.attributes?.newPrice}</span></span>
                                                </div>
                                            </div>

                                            <div className='w-full h-auto flex items-center justify-center md:justify-start gap-2 mt-3 flex-wrap'>
                                                <button className='btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-yellow-400 hover:bg-yellow-600 text-white font-normal py-2 px-4 mr-1 rounded' onClick={() => removingProductFromCart(item)}>Remove from cart</button>
                                                <button className='btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-yellow-400 hover:bg-yellow-600 text-white font-normal py-2 px-4 mr-1 rounded' onClick={() => addingProductToWishlist(item)}>Move to wishlist</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="w-full h-fit border border-yellow-400 py-3 px-5" style={{ flex: 1 }}>
                            <div className='w-full flex flex-col mb-3'>
                                <span className='text-lg font-bold capitalize mb-2'>Enter Discount coupons</span>
                                <div className='w-full flex items-center justify-between gap-2'>
                                    <input
                                        type="text"
                                        name=""
                                        placeholder='NIK200'
                                        className='w-[60%] px-3 py-2 outline-none border border-yellow-300 text-lg font-semibold uppercase'
                                        ref={discountCodeApplied}
                                    />
                                    <button
                                        className='w-[40%] h-f btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-yellow-400 hover:bg-yellow-600 text-white font-normal py-2 px-4 mr-1 rounded'
                                        onClick={applyDiscount}
                                    >
                                        Apply
                                    </button>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span className='text-sm capitalize font-bold'>
                                        Try this coupon code
                                    </span>
                                    <div className='flex items-center justify-center gap-3 relative'>
                                        <span className='mt-3 font-semibold uppercase' ref={discountCode}>NIK300</span>
                                        <span className={`absolute z-20 font-bold text-sm ${isCopied ? 'visible' : 'invisible'} left-0 -top-1 text-yellow-400`}>
                                            Copied
                                        </span>
                                        <span className={`relative ${isCopied ? 'text-yellow-400' : 'text-gray-500'} cursor-pointer`}>
                                            <FaRegCopy onClick={handleCopy} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <hr className='border border-yellow-400 my-5' />
                            <h1 className='text-lg capitalize font-bold mb-3'>price details {`( 1 item )`}</h1>
                            <hr className='border border-yellow-400' />
                            <ul className='w-full mt-5'>
                                <li className='w-full flex items-center justify-between mb-3'>
                                    <span className='text-lg font-bold capitalize'>Total price</span>
                                    <span className='text-lg font-bold text-gray-500 flex items-center justify-center' ><MdOutlineCurrencyRupee /> <span>{totalAmount || 0}</span></span>
                                </li>
                                <li className='w-full flex items-center justify-between mb-3'>
                                    <span className='text-lg font-bold capitalize' >discount on MRP</span>
                                    <span className='text-lg font-bold text-gray-500 flex items-center justify-center'><MdOutlineCurrencyRupee /> <span>{discountApplied || 0}</span></span>
                                </li>
                                <li className='w-full flex items-center justify-between mb-3'>
                                    <span className='text-lg font-bold capitalize'>platform fee</span>
                                    <span className='text-lg font-bold text-gray-500 flex items-center justify-center'><MdOutlineCurrencyRupee /> <span>{platFormFeeApplied || 0}</span></span>
                                </li>
                                <li className='w-full flex items-center justify-between mb-3'>
                                    <span className='text-lg font-bold capitalize'>shipping fee</span>
                                    <span className='text-lg font-bold text-gray-500 flex items-center justify-center'><MdOutlineCurrencyRupee /> <span>{shippingFeeApplied || 0}</span></span>
                                </li>
                            </ul>
                            <hr className='my-3 border border-yellow-400' />
                            <div className='flex items-center justify-between'>
                                <span className='text-lg font-bold capitalize'>total amount</span>
                                <span className='text-lg font-bold text-gray-500 flex items-center justify-center'><MdOutlineCurrencyRupee /> <span>{totalAmountAfterDiscount || 0}</span></span>
                            </div>
                            <button className='w-full mt-3 btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-yellow-400 hover:bg-yellow-600 text-white font-normal py-2 px-4 mr-1 rounded'
                                onClick={handleCheckout}
                            >
                                checkout
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center flex-col'>
                    <img src={emptyCart} alt="" className='w-[250px] h-[250px] object-contain mt-8' />
                    <h1 className='text-2xl mt-5 uppercase font-bold '>your cart is empty</h1>
                </div>
            )}
        </div>
    );
};

export default Cart;