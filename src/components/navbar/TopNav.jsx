import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { closeNavbar } from '../../store/features/homeSlice'
import useFetch from '../../hooks/useFetch'

const TopNav = () => {
    const { navOpen } = useSelector(state => state.home);
    
    const dispatch = useDispatch();

    const {data} = useFetch('/api/categories?populate=*');

    return (
        <ul className={`w-full h-screen p-10 md:p-24 bg-white absolute ${navOpen ? 'top-0' : 'top-[-100%]'} left-0 flex sm:flex md:flex lg:hidden items-start justify-center flex-col transition-all duration-500 ease-in-out gap-4 z-30`}>
            <li className={`text-black font-semibold cursor-pointer text-xl uppercase`} onClick={() => dispatch(closeNavbar())}><Link to='/'>Home</Link></li>
            <li className={`text-black font-semibold cursor-pointer text-xl uppercase`} onClick={() => dispatch(closeNavbar())}><Link to='/order'>orders</Link></li>
            {
                data?.data?.map((navlink) => <li className='text-black font-semibold cursor-pointer text-xl uppercase' onClick={() => dispatch(closeNavbar())} key={navlink?.id}><NavLink to={`/category/${navlink.id}`}>{navlink?.attributes?.title}</NavLink></li>)
            }
            <li className={`text-black font-semibold cursor-pointer text-xl`} onClick={() => dispatch(closeNavbar())}><Link to='/favourite' className='flex items-center justify-center gap-5'>Wishlist <FaRegHeart /></Link></li>
            <li className={`text-black font-semibold cursor-pointer text-xl relative`} onClick={() => dispatch(closeNavbar())}><Link to='/cart' className='flex items-center justify-center gap-5'>your Cart <FiShoppingCart /></Link></li>
        </ul>
    )
}

export default TopNav