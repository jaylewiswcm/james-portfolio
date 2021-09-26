import React from 'react'
import Head from 'next/head'
import Image from 'next/image';

// Components
import BackBtn from '../../components/elements/buttons/BackBtn'

const joules = () => {
    return (
        <div>
        <Head>
          <title>Portfolio - James Thompson-Gorwill</title>
          <meta name="description" content="Printed Textile Designer" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className="portfolio-piece container-regular">
            <h1 className="page-title">Joules</h1>
            <div className=" project-hero">
                <Image
                    alt="Model 1"
                    src="/images/portfolio/project-2/visuals/clothing/model-1.png"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="project-hero-img"
                />
            </div>
            <div className="project-text">
               <p>Working on a live brief for Joules, the theme for this project was about the British seaside, which I decided to look at seagulls to change our perception of them from something annoying to something fun and playful. Using Lino prints was the main media for this project , also adding some playful stripes to fill in space. For this project Joules gave their own palette to work from which was had its challenges when mixing and making these colours in the studio.</p>
            </div>
            <div className="portrait-images">
                <div className="project-image-wrapper">
                    <Image
                        alt="Model 2"
                        src="/images/portfolio/project-2/visuals/clothing/model-2.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Model 3"
                        src="/images/portfolio/project-2/visuals/clothing/model-3.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
            </div>
            <h2 className="project-subheadings">Babt Grows</h2>
            <div className="project-grid-3-cols">
                <div className="project-image-wrapper">
                    <Image
                        alt="Baby Grow 1"
                        src="/images/portfolio/project-2/visuals/clothing/baby-grow.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Baby Grow 2"
                        src="/images/portfolio/project-2/visuals/clothing/baby-grow-2.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Baby Grow 3"
                        src="/images/portfolio/project-2/visuals/clothing/baby-grow-3.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
            </div>
            <div className="project-text">
                <p>By looking at Joules as a company and the products they sell helped me finish my designs from this project. I drew up these templates looking at different how my designs could be used in various ways by looking at interior design pillows, to fashion with baby grows and {"woman's"} jumpers. This will give some variations of how my designs could be used.</p>
            </div>
            <h2 className="project-subheadings">Illustrations</h2>
            <div className="project-small-grid">
                <div className="project-image-wrapper">
                    <Image
                        alt="Chips"
                        src="/images/portfolio/project-2/illustrations/chips.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Icecream"
                        src="/images/portfolio/project-2/illustrations/icecream.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Seagull"
                        src="/images/portfolio/project-2/illustrations/seagull.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Seagulls"
                        src="/images/portfolio/project-2/illustrations/seagulls.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Strips"
                        src="/images/portfolio/project-2/illustrations/strips.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
            </div>
            <h2 className="project-subheadings">Interior</h2>
            <div className="project-grid-3-cols">
                <div className="project-image-wrapper">
                    <Image
                        alt="Interior 1"
                        src="/images/portfolio/project-2/visuals/interior/interior-1.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Interior 2"
                        src="/images/portfolio/project-2/visuals/interior/interior-2.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
                <div className="project-image-wrapper">
                    <Image
                        alt="Interior 3"
                        src="/images/portfolio/project-2/visuals/interior/interior-3.png"
                        layout='fill'
                        objectFit="cover"
                        className="project-image"
                    />
                </div>
            </div> 
            <BackBtn page="portfolio" text="Back to all projects"/>
        </main>
      </div>
    )
}

export default joules