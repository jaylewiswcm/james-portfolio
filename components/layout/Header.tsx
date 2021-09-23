import React from 'react'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/about">About me</a></li>
                    <li className="contact-link"><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;