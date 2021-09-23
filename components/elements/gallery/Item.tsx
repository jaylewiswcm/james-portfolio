import React, { useState } from 'react';
import Image from 'next/image';


interface ComponentProps {
    item: {
        imgSrc: string,
        description: string,
        alt: string
    }
}

const Item = ({item }: ComponentProps) => {
    const [slideShowOn, toggleSlideShow] = useState(false);
    const [slideSrc, setSlideSrc] = useState("");

    const toggleSlideShowPopup = (imgSrc: string) => {
        if(slideShowOn === false) {
            toggleSlideShow(true)
            setSlideSrc(imgSrc)
        } else {
            toggleSlideShow(false)
            setSlideSrc('')
        }
    }

    return (
    <div className="grid-item" onClick={() => toggleSlideShowPopup(item.imgSrc)}>
        <Image
        src={`/images/gallery/${item.imgSrc}`}
        alt={item.alt}
        width={200}
        height={285}
        className="item-image"
      />
    <div className="item-overlay">
      <p>{item.description}</p>
    </div>
  </div>
   
  )
}


export default Item;