import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../store/features/cartSlics";
import { MdOutlineCurrencyRupee } from 'react-icons/md';
import { runFireworks } from '../../lib/utils'

const Success = () => {

    const { payments, userDetails } = useSelector(state => state.home);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        runFireworks();
        dispatch(clearCart());
    }, [dispatch])

    return (
        <div className='w-full h-[77vh] flex items-center justify-center'>
            <div className="flex flex-col gap-3 p-2 md:p-5 w-4/5 md:w-3/5 border border-yellow-400 rounded-md">
                <h6 className="text-left text-yellow-400 font-bold text-sm md:text-lg">order placed successfully</h6>
                <p className="text-sm md:text-lg text-black capitalize">hey  <span className="font-bold">{userDetails?.name.length > 20 ? userDetails?.name.split(" ")[0] : userDetails?.name}</span>  your Order successfully placed! Thank you for choosing us </p>
                <p className="text-sm md:text-lg text-black flex items-center">Amount to be paid : <MdOutlineCurrencyRupee /> <span className="text-lg md:text-xl">{payments?.totalAmountAfterDiscount}</span></p>
                <div className="w-full flex gap-5 flex-wrap items-center">
                    <button className="px-2 py-1 rounded-sm bg-yellow-400 capitalize hover:bg-yellow-600 transition-all duration-300 ease-linear text-white text-sm md:text-lg font-semibold" onClick={() => navigate('/')}>go to home</button>
                    <button className="px-2 py-1 rounded-sm bg-yellow-400 capitalize hover:bg-yellow-600 transition-all duration-300 ease-linear text-white text-sm md:text-lg font-semibold" onClick={() => navigate('/order')}>go to orders</button>
                </div>
            </div>
        </div>
    )
}

export default Success