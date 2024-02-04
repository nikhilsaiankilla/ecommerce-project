import error from '../../assests/404.jpg'

const Error = () => {
  return (
    <div className='w-full h-[80vh] flex items-center justify-center flex-col select-none'>
        <img src={error} className='w-3/5 h-3/5 object-contain' alt="" />
    </div>
  )
}

export default Error