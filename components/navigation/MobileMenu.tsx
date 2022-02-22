import React, {useEffect, useState} from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

interface ComponentProps {
    toggleDown: boolean
    setMobileDropDown: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMenu = ({toggleDown, setMobileDropDown}:ComponentProps) => {
    const [menuClass, setMenuClass] = useState('menu-closed') 
    const router = useRouter();

    useEffect(() => {
        if(toggleDown === true) {
            setMenuClass('menu-open')
        } else {
            setMenuClass('menu-closed')
        }
    },[toggleDown])

    const closeMenuDropDown = () => {
        setMobileDropDown(false)
    }

    return (
        <div className={"mobile-menu " + menuClass }>
            <nav>
            <ul>
                    {/* <li><Link href="/">Home</Link></li> */}
                    <li><Link href="/"><a className={router.pathname.includes('portfolio') ? "active" : "" || router.pathname == "/" ? "active" : ""} onClick={() => closeMenuDropDown()}>Portfolio</a></Link></li>
                    <li><Link href="/gallery"><a className={router.pathname == "/gallery" ? "active" : ""} onClick={() => closeMenuDropDown()}>Gallery</a></Link></li>
                    <li><Link href="/about"><a className={router.pathname == "/about" ? "active" : ""} onClick={() => closeMenuDropDown()}>About</a></Link></li>
                    <li><Link href="/contact"><a className={router.pathname == "/contact" ? "active" : ""} onClick={() => closeMenuDropDown()}>Contact</a></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default MobileMenu;