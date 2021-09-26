import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
    <Head>
      <title>Portfolio - James Thompson-Gorwill</title>
      <meta name="description" content="Printed Textile Designer Projects" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
        <div className="projects-wrapper container-regular">
        <h1 className="page-title">Portfolio</h1>
            <div className="projects-grid">
                <div className="project-wrapper">
                    <Link href="/portfolio/fmp-university">
                      <a className="project-link">
                        <div className="project-full-width">
                        <Image
                            alt="Final Shirt 1"
                            src="/images/portfolio/project-1/visuals/clothing/shirt-final-1.png"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            className="project-hero-img"
                        />
                        </div> 
                      </a>
                    </Link>
                    <div className="project-title">
                            <h2>FMP Univeristy</h2>
                            <p>My Final Year Piece - incoporating mens fashion and pattern design</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
  </div>
  )
}

export default Home
