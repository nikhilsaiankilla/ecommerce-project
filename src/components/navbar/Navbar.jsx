import { Link, NavLink } from 'react-router-dom'

import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { openNavbar, closeNavbar } from './../../store/features/homeSlice'
import useFetch from '../../hooks/useFetch'
import { useEffect } from 'react';

const Navbar = () => {
  const { navOpen } = useSelector(state => state.home);
  const dispatch = useDispatch();
  const { data } = useFetch('/api/categories?populate=*');

  useEffect(() => {
  }, [data])

  return (
    <div className='w-full fixed top-0 left-0 z-30 bg-white shadow-sm'>
      <div className="px-10 md:px-24 w-screen py-6 flex items-center justify-between bg-transparent relative z-40">
        <h1 className='text-2xl font-bold text-yellow-400 cursor-pointer select-none'><Link to='/'>Nik Store</Link></h1>
        <ul className='gap-7 sm:hidden md:hidden lg:flex hidden'>
          <li className={`text-black font-semibold cursor-pointer text-xl uppercase`}><Link to='/'>Home</Link></li>
          <li className={`text-black font-semibold cursor-pointer text-xl uppercase`}><Link to='/order'>orders</Link></li>
          {
            data?.data?.map(navlink => <li className='text-black font-semibold cursor-pointer text-xl uppercase' key={navlink?.id}><NavLink to={`/category/${navlink.id}`}>{navlink?.attributes?.title}</NavLink></li>)
          }
        </ul>
        <ul className='flex gap-7'>
          <li className={`text-black font-semibold cursor-pointer text-xl hidden sm:hidden md:hidden lg:block relative`}>
            <Link to='/favourite'>
              <FaRegHeart />
            </Link>
          </li>
          <li className={`text-black font-semibold cursor-pointer text-xl relative hidden sm:hidden md:hidden lg:block`}>
            <Link to='/cart'>
              <FiShoppingCart />
            </Link>
          </li>
          <li className={`text-black font-semibold cursor-pointer text-xl relative sm:block md:block lg:hidden block`}>{navOpen
            ?
            <IoClose onClick={() => dispatch(closeNavbar())} />
            :
            <RiMenu2Line onClick={() => dispatch(openNavbar())} />
          }</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar