import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
    <Head>
      <title>Portfolio - James Thomson-Gorwill</title>
      <meta name="description" content="Printed Textile Designer Projects" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
            <div className="projects-wrapper container-regular">
            <h1 className="page-title">Portfolio</h1>
                <div className="projects-grid">
                    <div className="project-wrapper">
                        <Link href="/portfolio/fmp-university" >
                            <a className="project-link">
                            {/* <div className="overlay"></div> */}
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
                    <div className="project-wrapper">
                        <Link href="/portfolio/joules" >
                            <a className="project-link">
                            <div className="project-full-width">
                            <Image
                                alt="Model with bird clothing"
                                src="/images/portfolio/project-2/visuals/clothing/model-1.png"
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                                className="project-hero-img"
                            />
                            </div> 
                            </a>
                        </Link>
                        <div className="project-title">
                                <h2>Joules Live Brief</h2>
                                <p>A live brief for Joules, the theme for this project was the British seaside.</p>
                        </div>
                    </div>
                    <div className="project-wrapper">
                        <Link href="/portfolio/traditional-tattoos" >
                            <a className="project-link">
                            <div className="project-full-width">
                            <Image
                                alt="Traditional Pattern"
                                src="/images/portfolio/project-3/patterns/pattern-5.png"
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                                className="project-hero-img"
                            />
                            </div> 
                            </a>
                        </Link>
                        <div className="project-title">
                                <h2>Tradiontal Tattoos</h2>
                                <p>Project inspired by traditional tatoos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
  </div>
  )
}

export default Home
