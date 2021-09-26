import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
    const router = useRouter();
    
    return (
        <footer>
            <ul>
                <li className="list-title">Navigation</li>
                <li><Link href="/"><a className={router.pathname.includes('portfolio') ? "active" : "" || router.pathname == "/" ? "active" : ""}>Portfolio</a></Link></li>
                <li><Link href="/gallery"><a className={router.pathname == "/gallery" ? "active" : ""}>Gallery</a></Link></li>
                <li><Link href="/about"><a className={router.pathname == "/about" ? "active" : ""}>About</a></Link></li>
                <li><Link href="/contact"><a className={router.pathname == "/contact" ? "active" : ""}>Contact</a></Link></li>
            </ul>
            <ul>
                <li className="list-title">Email</li>
                <li><Link href="mailto:jamesthomson.gorwill@live.co.uk"><a>Jamesthomson.gorwill@live.co.uk</a></Link></li>
            </ul>
            <ul>
                <li className="list-title">Phone</li>
                <li><Link href="tel:07943266481"><a>07943266481</a></Link></li>
            </ul>
            <ul>
                <li className="list-title">Social</li>
                <li><Link href="/"><a>Instagram</a></Link></li>
            </ul>
        </footer>
    )
}

export default Footer;