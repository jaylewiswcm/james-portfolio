import React from 'react'
import Head from 'next/head'
import Image from 'next/image';

// Components
import BackBtn from '../../components/elements/buttons/BackBtn'

const traditionalTattoos = () => {
    return (
        <div>
        <Head>
          <title>Portfolio - James Thomson-Gorwill</title>
          <meta name="description" content="Printed Textile Designer" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className="portfolio-piece container-regular">
            <h1 className="page-title">Tradition Tattoos</h1>
            <div className=" project-hero">
                <Image
                    alt="Model 1"
                    src="/images/portfolio/project-3/patterns/pattern-5.png"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="project-hero-img"
                />
            </div>
            <div className="project-text">
            <p>Traditional artwork is a passion of mine so starting to draw traditional artwork of my own into my pattern design. drawing all of these designs using thick black pen and water colours then developing them further in illustrator.</p>
            </div>
            <div className="portrait-images">
                <div className="project-image-wrapper">
                    <Image
                        alt="Pattern 2"
                        src="/images/portfolio/project-3/patterns/pattern-2.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Pattern 7"
                        src="/images/portfolio/project-3/patterns/pattern-7.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
            </div>
            <h2 className="project-subheadings">More Patterns</h2>
            <div className="project-grid-3-cols">
                <div className="project-image-wrapper">
                    <Image
                        alt="Pattern 6"
                        src="/images/portfolio/project-3/patterns/pattern-6.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Pattern 4"
                        src="/images/portfolio/project-3/patterns/pattern-4.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Pattern 1"
                        src="/images/portfolio/project-3/patterns/pattern-1.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
            </div>
            <h2 className="project-subheadings">Illustrations</h2>
            <div className="project-small-grid">
                <div className="project-image-wrapper">
                    <Image
                        alt="Flower 1"
                        src="/images/portfolio/project-3/illustrations/flower-1.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Flower 2"
                        src="/images/portfolio/project-3/illustrations/flower-2.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Flower 3"
                        src="/images/portfolio/project-3/illustrations/flower-3.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Flower 4"
                        src="/images/portfolio/project-3/illustrations/flower-4.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Flower 5"
                        src="/images/portfolio/project-3/illustrations/flower-5.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Flower 6"
                        src="/images/portfolio/project-3/illustrations/flower-6.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
            </div>
            <div className="project-text">
                <p>Showing off some of my illustrations looking at Japanese peonies using watercolours in two different styles. one style in the traditional tattoo style which involves the bold black lines, and the other with bright colours.</p>
            </div>
            <BackBtn page="" text="Back to all projects"/>
        </main>
      </div>
    )
}

export default traditionalTattoos