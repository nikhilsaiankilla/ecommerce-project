import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './style.css'

const Img = ({ image, className }) => {
    return (
        <div className='main-div w-full h-full relative'>
            <LazyLoadImage
                alt={'shoe-images'}
                effect="blur"
                src={image}
                className={className || ' '}
            />
        </div>
    )
}

export default Img;
