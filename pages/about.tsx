import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

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

            </div>
        </main>
      </div>
    )
}

export default about;