import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    
    return (
        <header>
            <h1 className="header-title">James Thomson-Gorwill / <span className="highlight">Print Designer</span></h1>
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