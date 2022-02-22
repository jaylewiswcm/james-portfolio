import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Image from 'next/image';
// Components
import MobileMenu from '../navigation/MobileMenu';

const Header = () => {
    const [mobileDropDown, setMobileDropDown] = useState(false);
    const [menuIcon, setMenuIcon] = useState('burger-menu');
    const router = useRouter();
    
    useEffect(() => {
        if(mobileDropDown === false ) {
            setMenuIcon('burger-menu')
        } else {
            setMenuIcon('burger-close')
        }
    },[mobileDropDown, setMenuIcon])

    const toggleDropDown = () => {
        if(mobileDropDown === false) {
            setMobileDropDown(true)
        } else {
            setMobileDropDown(false)
        }
    }

    return (
        <header>
            <Link  href='/' >
                <a className="header-title">James Thomson-Gorwill <span className='divide'>/</span> <br /><span className="highlight">Print Designer</span></a>
            </Link>
            <div className="burger-icon">
                <button onClick={() => toggleDropDown()}>
                    <Image
                        src={`/images/svgs/${menuIcon}.svg`}
                        alt="burger menu"
                        width="40px"
                        height="40px"
                    ></Image>
                </button>
            </div>
            <MobileMenu toggleDown={mobileDropDown} setMobileDropDown={setMobileDropDown}/> 
            <nav>
                <ul>
                    {/* <li><Link href="/">Home</Link></li> */}
                    <li><Link href="/"><a className={router.pathname.includes('portfolio') ? "active" : "" || router.pathname == "/" ? "active" : ""}>Portfolio</a></Link></li>
                    <li><Link href="/gallery"><a className={router.pathname == "/gallery" ? "active" : ""}>Gallery</a></Link></li>
                    <li><Link href="/about"><a className={router.pathname == "/about" ? "active" : ""}>About</a></Link></li>
                    {/* <li className="contact-link"><Link href="/contact">Contact</Link></li> */}
                </ul>
                <div className="contact-link">
                    <Link href="/contact"><a className={router.pathname == "/contact" ? "active" : ""}>Contact</a></Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;