import React from 'react'
import Head from 'next/head'
import Image from 'next/image';

// Components
import BackBtn from '../../components/elements/buttons/BackBtn'

const fmpUniversity = () => {
    return (
        <div>
        <Head>
          <title>Portfolio - James Thomson-Gorwill</title>
          <meta name="description" content="Printed Textile Designer" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className="portfolio-piece container-regular">
            <h1 className="page-title">Fmp University</h1>
            <div className=" project-hero">
                <Image
                    alt="Final Shirt 1"
                    src="/images/portfolio/project-1/visuals/clothing/shirt-final-1.png"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="project-hero-img"
                />
            </div>
            <div className="project-text">
               <p>The final product for my end-of-year show. To show my interest in menswear fashion I have designed this from my collection for my final project &quot;traditional summer&quot;. Material is a medium-weight silk shirt, added the white border to break up the design to make it look less busy.</p>
            </div>
            <div className="portrait-images">
                <div className="project-image-wrapper">
                    <Image
                        alt="Final Shirt 2"
                        src="/images/portfolio/project-1/visuals/clothing/shirt-final-2.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Final Shirt 3"
                        src="/images/portfolio/project-1/visuals/clothing/shirt-final-3.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
            </div>
            <h2 className="project-subheadings">Concepts</h2>
            <div className="project-grid-3-cols">
                <div className="project-image-wrapper">
                    <Image
                        alt="Shirt Tigers Pattern"
                        src="/images/portfolio/project-1/visuals/clothing/concept-1.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Final Shirt Concept"
                        src="/images/portfolio/project-1/visuals/clothing/concept-2.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Shirt Light Blue Visual"
                        src="/images/portfolio/project-1/visuals/clothing/concept-3.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
            </div>
            <h2 className="project-subheadings">Patterns</h2>
            <div className="project-small-grid">
                <div className="project-image-wrapper">
                    <Image
                        alt="Pattern 1"
                        src="/images/portfolio/project-1/patterns/design-3.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Pattern 2"
                        src="/images/portfolio/project-1/patterns/parrot-design-a2.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Pattern 3"
                        src="/images/portfolio/project-1/patterns/tigers-stars-and-dots.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Pattern 4"
                        src="/images/portfolio/project-1/patterns/star-dot-design.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Pattern 5"
                        src="/images/portfolio/project-1/patterns/flower-dots.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Pattern 6"
                        src="/images/portfolio/project-1/patterns/final-design-1.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
            </div>
            <h2 className="project-subheadings">Interior</h2>
            <div className="project-full-width">
                <Image
                    alt="Barber Shop"
                    src="/images/portfolio/project-1/visuals/interior/barber-shop-tiles.png"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="project-hero-img"
                />  
            </div> 
            <BackBtn page="" text="Back to all projects"/>
        </main>
      </div>
    )
}

export default fmpUniversity