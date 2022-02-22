import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const about = () => {
    return (
        <div>
        <Head>
          <title>Projects - James Thomson-Gorwill</title>
          <meta name="description" content="Printed Textile Designer Projects" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
            <div className="about-wrapper container-regular">
            <h1 className="page-title">About Me</h1>
            <div className='image-wrapper'>
              <Image 
                src='/images/me/portrait.png'
                alt='Me'
                width='300'
                height='341'
              />
            </div>
            <p>I am a bristol-based designer; having graduated from Plymouth College of Art in 2019, where I studied (BA) Printed Textiles & Surface Pattern Design. During my time at university I learned many skills as a designer, this includes various printing techniques such as screen printing.</p>
            <p>I create illustrative, uplifting prints using bold bright colours within my designs. </p>
            </div>
        </main>
      </div>
    )
}

export default about;