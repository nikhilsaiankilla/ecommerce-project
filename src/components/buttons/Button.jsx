import { BiSolidRightTopArrowCircle } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const Button = ({ title, className, path }) => {
    const navigate = useNavigate();
    return (
        <button onClick={() => {
            navigate(path ? path : '/')
        }} className={`px-3 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 bg-yellow-400 hover:bg-yellow-600 transition-all duration-300 ease-in text-white text-[1rem] sm:text-[1rem] md:text-lg lg:text-xl cursor-pointer font-semibold rounded-full inline-flex items-center justify-center gap-4 ${className}`}>{title}<BiSolidRightTopArrowCircle className='text-xl text-white' /></button>
    )
}

export default Button

