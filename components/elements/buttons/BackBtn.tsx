import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

interface ComponentProps {
    page: string,
    text : string
}

const BackBtn = ({page, text}: ComponentProps) => {
    const [arrowColour, setArrowColour] = useState('orange')

    const changeArrowColour = (colour: string) => {
        setArrowColour(colour);
    }
    
    return (
        // <div className="container-regular button-wrapper">
            <Link href={`/${page}`}>
                <a className="back-btn" onMouseOver={() => changeArrowColour('white')} onMouseOut={() => changeArrowColour('orange')}> 
                    <div className="hover-bg"></div>
                    <div className="arrow-svg">
                        <Image
                            src={`/images/svgs/${arrowColour}-arrow.svg`}
                            alt='Back Arrow'
                            width={25}
                            height={20}
                        />
                    </div>
                    <span>{text}</span>
                </a>
            </Link>
        // </div>
    )
}

export default BackBtn;