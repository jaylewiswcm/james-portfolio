import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Footer = () => {
    const router = useRouter();
    
    return (
        <footer>
            <p className='footer-name'>James Thomson-Gorwill</p>
            <ul>
                <li><Link href="/"><a className={router.pathname.includes('portfolio') ? "active" : "" || router.pathname == "/" ? "active" : ""}>Portfolio</a></Link></li>
                <li><Link href="/gallery"><a className={router.pathname == "/gallery" ? "active" : "" }>Gallery</a></Link></li>
                <li><Link href="/about"><a className={router.pathname == "/about" ? "active" : "" }>About</a></Link></li>
                <li><Link href="/contact"><a className={router.pathname == "/contact" ? "active" : ""}>Contact</a></Link></li>
            </ul>
            <Link href="mailto:jamesthomson.gorwill@live.co.uk"><a className='footer-contact'>Jamesthomson-gorwill@live.co.uk</a></Link>
            <Link href="tel:07943266481"><a className='footer-contact'>079432 66481</a></Link>
                <a href="https://www.instagram.com/jtg_designs_" rel="noreferrer" className='footer-contact'>
                <div className='icon'><Image src='/images/icons/instagram.svg' alt='instagram' width='40' height='40'/></div>Instagram</a>
        </footer>
    )
}

export default Footer;