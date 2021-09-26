import React from 'react'
import Link from 'next/link'
const Header = () => {
    return (
        <header>
            <h1 className="header-title">James Thompson-Gorwill / Print Designer </h1>
            <nav>
                <ul>
                    {/* <li><Link href="/">Home</Link></li> */}
                    <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
                    <li><Link href="/gallery"><a>Gallery</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    {/* <li className="contact-link"><Link href="/contact">Contact</Link></li> */}
                </ul>
                <div className="contact-link">
                    <Link href="/contact"><a>Contact</a></Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;