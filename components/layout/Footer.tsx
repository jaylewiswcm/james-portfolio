import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <ul>
                <li className="list-title">Navigation</li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
            <ul>
                <li className="list-title">Email</li>
                <li><Link href="mailto:jamesthomson.gorwill@live.co.uk">Jamesthomson.gorwill@live.co.uk</Link></li>
            </ul>
            <ul>
                <li className="list-title">Phone</li>
                <li><Link href="tel:07943266481">07943266481</Link></li>
            </ul>
            <ul>
                <li className="list-title">Social</li>
                <li><Link href="/">Instagram</Link></li>
            </ul>
        </footer>
    )
}

export default Footer;