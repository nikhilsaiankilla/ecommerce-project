import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { cancelOrder } from '../../store/features/orderSlice'
import Img from '../../components/lazyLoadImg/Img'

const Orders = () => {
    const { orderList } = useSelector(state => state.order)
    const dispatch = useDispatch();

    const cancelingOrder = (item) => {
        dispatch(cancelOrder(item));
    }

    return (
        <div className='w-full h-full py-5'>
            {
                orderList.length > 0
                    ?
                    <div className="w-full h-full">
                        <h1 className='text-2xl font-bold leading-normal flex items-center gap-5 my-4 text-yellow-400 '>Your orders</h1>
                        <ul className='w-full'>
                            {
                                orderList?.map(order => (

                                    <li
                                        className='w-full my-3'
                                        key={order?.orderId}
                                    >
                                        <div className='flex flex-wrap gap-5 border border-gray-200 p-2 rounded-md'>
                                            <div className='w-full px-4 flex flex-wrap items-center justify-between'>
                                                <div className='flex gap-5'>
                                                    <h5 className='text-lg lg:text-2xl font-bold capitalize text-yellow-400'>
                                                        your total order price
                                                    </h5>
                                                    <span className='flex gap-1 items-center text-lg lg:text-2xl text-gray-700'>
                                                        <MdOutlineCurrencyRupee />
                                                        {order?.totalOrderAmount}
                                                    </span>
                                                </div>
                                                <div className='flex gap-5'>
                                                    <span className='text-xl text-bold'>
                                                        order Id
                                                    </span>
                                                    <span className='text-xl font-semibold text-yellow-400'>
                                                        {order?.orderId}
                                                    </span>
                                                </div>
                                            </div>

                                            <ul className='w-full flex flex-col'>

                                                {
                                                    order?.items?.map(item => (
                                                        <li className="w-full h-auto sm:h-auto lg:h-[320px] gap-3 md:gap-4 lg:gap-10 my-1 flex flex-col sm:flex-col md:flex-row p-3 lg:p-2 border-2 border-gray-200 overflow-hidden relative"
                                                            key={item?.id}
                                                        >
                                                            <div className='w-full h-full md:w-[300px] md:h-[300px]'>
                                                                <Img image={item?.attributes?.images?.data[0].attributes?.url} className='w-full h-full object-cover' />
                                                            </div>

                                                            <div className='w-full md:w-[70%] h-full flex justify-center flex-col gap-3 mt-3'>
                                                                <h1 className='text-xl md:text-4xl overflow-hidden font-semibold'>
                                                                    {item?.attributes?.title}
                                                                </h1>
                                                                <p>{item?.attributes?.discription}</p>
                                                                <div className='flex w-full flex-wrap gap-1 lg:gap-10 items-center justify-center lg:justify-start lg:items-start'>
                                                                    <div className='flex gap-2 items-center justify-center lg:justify-start lg:items-start'>
                                                                        <span className='px-3 py-1 bg-gray-400 text-white capitalize leading-normal rounded-lg'>quantity</span>
                                                                        <span className='px-3 py-1 bg-gray-400 text-white capitalize leading-normal rounded-lg'>{item?.quantity}</span>
                                                                    </div>
                                                                    <div className='flex gap-3 items-center justify-center lg:justify-start lg:items-start'>
                                                                        <span className='px-3 py-1 bg-gray-400 text-white capitalize leading-normal rounded-lg'>size</span>
                                                                        <span className='px-3 py-1 bg-gray-400 text-white capitalize leading-normal rounded-lg'>8</span>
                                                                    </div>
                                                                </div>
                                                                <span className='text-black text-3xl flex gap-5 items-center uppercase'><span className="flex gap-2 items-center"><MdOutlineCurrencyRupee /> <span className="font-semibold">{item?.attributes?.newPrice}  </span> </span> paid</span>
                                                                <p className='text-gray-600 leading-normal'>Your order is arriving soon...</p>
                                                            </div>
                                                        </li>
                                                    ))
                                                }

                                            </ul>
                                            <button
                                                onClick={() => cancelingOrder(order)}
                                                className='transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-yellow-400 hover:bg-yellow-600 text-white font-normal py-2 px-4 rounded'>
                                                cancel order
                                            </button>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    :
                    <div className="w-full h-[77vh] flex items-center justify-center">
                        <h3 className="capitalize text-3xl leading-normal font-bold text-yellow-400">No orders yet</h3>
                    </div>
            }
        </div>
    )
}

export default Orders