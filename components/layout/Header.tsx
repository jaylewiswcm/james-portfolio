import React from 'react'
import Link from 'next/link'
const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/gallery">Gallery</Link></li>
                    <li><Link href="/about">About me</Link></li>
                    <li className="contact-link"><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;