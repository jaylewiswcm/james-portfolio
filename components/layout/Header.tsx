import React from 'react'
import Link from 'next/link'
const Header = () => {
    return (
        <header>
            <h1 className="header-title">James Thompson-Gorwill</h1>
            <nav>
                <ul>
                    {/* <li><Link href="/">Home</Link></li> */}
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/gallery">Gallery</Link></li>
                    <li><Link href="/about">About</Link></li>
                    {/* <li className="contact-link"><Link href="/contact">Contact</Link></li> */}
                </ul>
                {/* <Link href="/contact">Contact</Link> */}
            </nav>
        </header>
    )
}

export default Header;