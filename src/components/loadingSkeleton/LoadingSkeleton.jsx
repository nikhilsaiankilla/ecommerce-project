import './style.css'

export const CardLoadingSkeleton = () => {
    return (
        <div className="skeleton-wrapper w-[240px] h-[220px] sm:w-[240px] sm:h-[220px] lg:w-[300px] lg:h-[300px]  flex flex-col items-center justify-center p-5">
            <div className="skeleton w-full h-[70%] rounded-lg"></div>
            <div className="w-full h-[30%] flex items-center justify-between">
                <div className="w-full flex flex-col gap-2 mt-2">
                    <span className="skeleton w-[70%] h-3 rounded-lg"></span>
                    <span className="skeleton w-[60%] h-3 rounded-lg"></span>
                </div>
                <div className="flex items-center gap-5">
                    <span className="skeleton w-[30px] h-[30px] rounded-full"></span>
                    <span className="skeleton w-[30px] h-[30px] rounded-full"></span>
                </div>
            </div>
        </div>)
}

export const BannerLoadingSkeleton = () => {
    return (
        <div className="skeleton-wrapper w-full h-[80vh] lg:h-[60vh] relative flex flex-col justify-center rounded-3xl p-5 sm:p-5 md:p-5 lg:p-10 gap-5 overflow-hidden  z-30">
            <h1 className='skeleton w-4/5 h-8 rounded-xl'>{" "}</h1>
            <h1 className='skeleton w-4/5 h-8 rounded-xl'>{" "}</h1>
            <h1 className='skeleton w-3/5 h-8 rounded-xl'>{" "}</h1>
            <p className='skeleton w-4/5 h-4 rounded-lg'>{" "}</p>
            <p className='skeleton w-3/5 h-4 rounded-lg'>{" "}</p>
            <p className='skeleton w-2/5 h-4 rounded-lg'>{" "}</p>
            <div className='skeleton w-[300px] h-5 sm:h-5 md:h-5 lg:h-10 rounded-lg'>{" "}</div>
        </div>)
}

export const ProductPageLoadingSkeleton = () => {
    return (
        <div className="skeleton-wrapper w-full sm:w-full md:w-full lg:w-[80%] h-[500px] md:h-[500px] lg:h-screen flex items-center justify-center p-5 overflow-hidden" >
            <div className='skeleton w-[95%] h-[95%]'>
            </div>
        </div>)
}

export const ProductSmallLoadingSkeletoon = () => {
    return (
        <div className='skeleton-wrapper w-[70px] h-[70px] sm:w-[70px] sm:h-[70px] lg:w-[100px] lg:h-[100px] p-3 rounded-xl cursor-pointer'>
            <div className='skeleton w-full h-full'></div>
        </div>)
}

export const ProductDetailsSkeleton = () => {
    return (
        <div className='skeleton-wrapper w-full h-[80vh] p-3 rounded-xl flex flex-col gap-5'>
            <div className='skeleton w-3/5 h-10 rounded-md'></div>
            <div className='skeleton w-4/5 h-5 rounded-sm'></div>
            <div className='skeleton w-3/5 h-5 rounded-sm'></div>
            <div className='skeleton w-3/5 h-5 rounded-sm'></div>
            <div className='flex gap-2 overflow-hidden'>
                <span className="skeleton w-[30px] h-[30px] rounded-sm"></span>
                <span className="skeleton w-[30px] h-[30px] rounded-sm"></span>
                <span className="skeleton w-[30px] h-[30px] rounded-sm"></span>
                <span className="skeleton w-[30px] h-[30px] rounded-sm"></span>
                <span className="skeleton w-[30px] h-[30px] rounded-sm"></span>
            </div>
            <div className='flex gap-5 overflow-hidden'>
                <span className="skeleton w-[150px] h-[30px] rounded-sm"></span>
                <span className="skeleton w-[150px] h-[30px] rounded-sm"></span>
            </div>
            <div className='skeleton w-3/5 h-5 rounded-sm'></div>
            <div className='skeleton w-full h-2 rounded-sm'></div>
            <div className='flex gap-2 overflow-hidden'>
                <span className="skeleton w-[50px] h-[50px] rounded-sm"></span>
                <span className="skeleton w-[50px] h-[50px] rounded-sm"></span>
                <span className="skeleton w-[50px] h-[50px] rounded-sm"></span>
                <span className="skeleton w-[50px] h-[50px] rounded-sm"></span>
                <span className="skeleton w-[50px] h-[50px] rounded-sm"></span>
                <span className="skeleton w-[50px] h-[50px] rounded-sm"></span>
                <span className="skeleton w-[50px] h-[50px] rounded-sm"></span>
            </div>
            <div className='flex flex-wrap gap-3 overflow-hidden'>
                <span className="skeleton w-[300px] h-[50px] rounded-sm"></span>
                <span className="skeleton w-[300px] h-[50px] rounded-sm"></span>
            </div>
            <div className='skeleton w-3/5 h-5 rounded-sm'></div>
            <div className='skeleton w-3/5 h-5 rounded-sm'></div>
            <div className='skeleton w-3/5 h-5 rounded-sm'></div>
        </div>
    )
}