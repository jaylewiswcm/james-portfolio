import React from 'react'
import Image from 'next/image';

// interface ComponentProps {
//     item : {
//         imgSrc: string,
//         alt: string,
//         description: string
//     }
// }

const Slideshow = () => {
    return (
        <div className="slideshow-container">
            <div className="slide">
                {/* <Image
                    src={`/images/gallery/${item.imgSrc}`}
                    alt={item.alt}
                    width={200}
                    height={285}
                    className="item-image"
                /> */}
            </div>
        </div>
    )
}

export default Slideshow;