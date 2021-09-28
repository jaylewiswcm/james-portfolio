import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
// Components
import Form from '../components/elements/contact/Form';

const contact = () => {
    return (
        <div>
        <Head>
          <title>Projects - James Thomson-Gorwill</title>
          <meta name="description" content="Printed Textile Designer Projects" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
            <div className="contact-wrapper container-regular">
            <h1 className="page-title">Contact</h1>
            <Form />
            </div>
        </main>
      </div>
    )
}

export default contact;