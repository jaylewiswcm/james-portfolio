import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
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
            {/* <Form /> */}
            <div className='contact-info'>
                <a href='mailto:Jamesthomson-gorwill@live.co.uk' className='detail'>
                  <div className='icon-wrapper'>
                    <Image 
                      src='/images/icons/email.svg'
                      alt='email'
                      width='40'
                      height='40'
                    />
                  </div>
                  <p>Jamesthomson-gorwill@live.co.uk</p>
                </a>
                <a href='tel:07943266481' className='detail'>
                  <div className='icon-wrapper'>
                    <Image 
                      src='/images/icons/phone.svg'
                      alt='email'
                      width='40'
                      height='40'
                    />
                  </div>
                  <p>079432 66481</p>
                </a>
                <a href='https://www.instagram.com/jtg_designs_' target='_blank' rel="noreferrer" className='detail'>
                  <div className='icon-wrapper'>
                    <Image 
                      src='/images/icons/instagram.svg'
                      alt='email'
                      width='40'
                      height='40'
                    />
                  </div>
                  <p>Instagram</p>
                </a>
          
            </div>
            </div>
        </main>
      </div>
    )
}

export default contact;