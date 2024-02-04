import React, { useState } from 'react'
import { MdPayment, MdOutlineCurrencyRupee } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteCurrentOrder } from '../../store/features/orderSlice'
import { addUserDetails } from '../../store/features/homeSlice';

const Checkout = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { payments } = useSelector(state => state.home)
  const { currentOrder } = useSelector(state => state.order);

  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [landmark, setLandmark] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [pincode, setPincode] = useState(null);
  const [error, setError] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const isValid = validateInputs();

    const userDetails = {
      name : name + " " + lastName,
      email : email,
      phone : phone,
    }

    if (isValid) {
      //STORING THE USER DETAILS
      dispatch(addUserDetails(userDetails));
      navigate('/success');
    }
  }

  const handleCancel = () => {

    //IF current exists 
    if (currentOrder) {
      //DELETE THE CURRENTORDER
      dispatch(deleteCurrentOrder()); 
      navigate('/cart');
    }

  }

  const validateInputs = () => {
    if (!name || !lastName || !phone || !email || !address || !landmark || !city || !country || !state || !pincode) {
      setError('Please fill in all fields.');

      setTimeout(() => {
        setError('')
      }, 1500);
      return false;
    }

    setError('');
    return true;
  };

  return (
    <div className='w-full min-h-screen my-5'>
      <h1 className='text-2xl font-bold leading-normal flex items-center gap-5 my-4'>checkout <MdPayment className='text-yellow-400 font-bold' /></h1>
      <div className='w-full h-full flex flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row  gap-5 sm:gap-5 lg:gap-10'>
        <div style={{ flex: 1 }} className='w-full h-full'>
          <form className="address w-full mt-4 flex flex-col gap-4">
            <p className='text-xs capitalize w-full text-wrap text-red-600'>{error}</p>
            <div className='w-full flex gap-5'>
              <label
                htmlFor="name" className='w-1/2'>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder='enter your first name'
                  className='w-full px-3 py-2 text-md text-black outline-none border border-black rounded-md placeholder:capitalize'
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label
                htmlFor="lastname"
                className='w-1/2'>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder='enter your last name'
                  onChange={(e) => setLastName(e.target.value)}
                  className='w-full px-3 py-2 text-md text-black outline-none border border-black rounded-md placeholder:capitalize' />
              </label>
            </div>
            <label
              htmlFor="phone">
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder='enter your mobile number'
                onChange={(e) => setPhone(e.target.value)}
                className='w-full px-3 py-2 text-md text-black outline-none border border-black rounded-md placeholder:capitalize' />
            </label>
            <label
              htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder='enter your email'
                onChange={(e) => setEmail(e.target.value)}
                className='w-full px-3 py-2 text-md text-black outline-none border border-black rounded-md placeholder:capitalize' />
            </label>
            <label
              htmlFor="address">
              <input
                type="text"
                name="address"
                id="address"
                placeholder='enter your address'
                onChange={(e) => setAddress(e.target.value)}
                className='w-full px-3 py-2 text-md text-black outline-none border border-black rounded-md placeholder:capitalize' />
            </label>
            <label
              htmlFor="landmark">
              <input
                type="text"
                name="landmark"
                id="landmark"
                placeholder='enter your landmark'
                onChange={(e) => setLandmark(e.target.value)}
                className='w-full px-3 py-2 text-md text-black outline-none border border-black rounded-md placeholder:capitalize' />
            </label>
            <label
              htmlFor="city">
              <input
                type="text"
                name="city"
                id="city"
                placeholder='enter your city'
                onChange={(e) => setCity(e.target.value)}
                className='w-full px-3 py-2 text-md text-black outline-none border border-black rounded-md placeholder:capitalize' />
            </label>
            <div
              className='w-full flex items-center justify-between gap-1'>
              <label
                htmlFor="country">
                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder='country'
                  onChange={(e) => setCountry(e.target.value)}
                  className='w-full px-3 py-2 text-md text-black outline-none border border-black rounded-md placeholder:capitalize' />
              </label>
              <label
                htmlFor="state">
                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder='state'
                  onChange={(e) => setState(e.target.value)}
                  className='w-full px-3 py-2 text-md text-black outline-none border border-black rounded-md placeholder:capitalize' />
              </label>
              <label
                htmlFor="pincode">
                <input
                  type="number"
                  name="pincode"
                  id="pincode"
                  placeholder='pincode'
                  onChange={(e) => setPincode(e.target.value)}
                  className='w-full px-3 py-2 text-md text-black outline-none border border-black rounded-md placeholder:capitalize' />
              </label>
            </div>
          </form>
          <hr className='w-full my-10 border-b-1 border-yellow-400' />
          <div className='w-full flex flex-col'>
            <h1 className='text-2xl font-bold leading-normal flex items-center gap-5 my-4'>card details <FaRegCreditCard className='text-yellow-400 font-bold' /></h1>
            <form className='flex flex-col gap-3' onSubmit={(e) => submitHandler(e)}>
              <label
                htmlFor="cardHolderName">
                <input
                  type="text"
                  name="cardHolderName"
                  id="cardHolderName"
                  placeholder='customer name'
                  required
                  className='w-full px-3 py-2 text-md text-black outline-none border border-black rounded-md placeholder:capitalize' />
              </label>
              <label
                htmlFor="cardNumber">
                <input
                  type="number"
                  name="cardNumber"
                  id="cardNumber"
                  placeholder='1111 1111 1111 1111'
                  required
                  className='w-full px-3 py-2 text-md text-black outline-none border border-black rounded-md placeholder:capitalize placeholder:text-gray-400' />
              </label>
              <div className='w-full flex items-center justify-between gap-3'>
                <label
                  htmlFor="expireDate"
                  className='w-1/2'
                >
                  <input
                    type="month"
                    id="expireDate"
                    name="expireDate"
                    min="2024-01"
                    max="2034-01"
                    value="2024-01"
                    className='w-full px-3 py-2 text-md text-black outline-none border border-black rounded-md placeholder:capitalize'
                  />

                </label>
                <label
                  htmlFor="cvvNumber"
                  className='w-1/2'
                >
                  <input
                    type="number"
                    name="cvvNumber"
                    id="cvvNumber"
                    placeholder='123'
                    required
                    className='w-full px-3 py-2 text-md text-black outline-none border border-black rounded-md placeholder:capitalize' />
                </label>
              </div>
              <button
                type='submit'
                className='w-full mt-2 btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-yellow-400 hover:bg-yellow-600 text-white font-normal py-2 px-4 mr-1 rounded'>
                Pay
              </button>
              <button
                onClick={handleCancel}
                className='w-full mt-2 btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-yellow-400 hover:bg-yellow-600 text-white font-normal py-2 px-4 mr-1 rounded'>
                cancel payment
              </button>
            </form>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <ul className='flex items-center justify-center flex-col' >
            <li className='w-full flex items-center justify-between mb-3'>
              <span className='text-lg font-bold capitalize'>Total price</span>
              <span className='text-lg font-bold text-gray-500 flex items-center justify-center'><MdOutlineCurrencyRupee /> <span>{payments?.totalAmountBeforeDiscount || 0}</span></span>
            </li>
            <li className='w-full flex items-center justify-between mb-3'>
              <span className='text-lg font-bold capitalize'>discount on MRP</span>
              <span className='text-lg font-bold text-gray-500 flex items-center justify-center'><MdOutlineCurrencyRupee /> <span>{payments?.discountApplied || 0}</span></span>
            </li>
            <li className='w-full flex items-center justify-between mb-3'>
              <span className='text-lg font-bold capitalize'>platform fee</span>
              <span className='text-lg font-bold text-gray-500 flex items-center justify-center'><MdOutlineCurrencyRupee /> <span>{payments?.platformFeeApplied || 0}</span></span>
            </li>
            <li className='w-full flex items-center justify-between mb-3'>
              <span className='text-lg font-bold capitalize'>shipping fee</span>
              <span className='text-lg font-bold text-gray-500 flex items-center justify-center'><MdOutlineCurrencyRupee /> <span>{payments?.shippingFeeApplied || 0}</span></span>
            </li>
          </ul>
          <hr className='my-3 border-[2px] border-b-yellow-400' />
          <div className='flex items-center justify-between'>
            <span className='text-lg font-bold capitalize'>total amount</span>
            <span className='text-lg font-bold text-gray-500 flex items-center justify-center'><MdOutlineCurrencyRupee /> <span>{payments?.totalAmountAfterDiscount || 0}</span></span>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Checkout