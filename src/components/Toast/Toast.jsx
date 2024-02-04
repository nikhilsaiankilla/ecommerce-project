import React from 'react'
import { useSelector } from 'react-redux'

const Toast = () => {
    const { toastTitle } = useSelector(state => state.home);

    return (
        <p className={`fixed top-18 left-[50%] transform -translate-x-1/2 transition-all duration-300 ease-in px-3 py-1 rounded-lg bg-black border-[3px] border-yellow-400 text-white text-sm font-semibold uppercase z-50 ${toastTitle ? 'opacity-100' : 'opacity-0 hidden'}`}>
            {toastTitle}
        </p>
    );
};

export default Toast;
