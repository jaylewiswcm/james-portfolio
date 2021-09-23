import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import gallery_data from "../data/gallery_data.json";

// Components
import Item from "../components/elements/gallery/Item";
import Slideshow from"../components/elements/gallery/Slideshow";

interface ComponentProps {
  launches : any
}

type GalleryItem = {
  imgSrc : string,
  description: string,
  alt: string,
}

const gallery = ({launches}: ComponentProps) => {
  console.log('launches', launches);
    return (
        <div>
        <Head>
          <title>Projects - James Thompson-Gorwill</title>
          <meta name="description" content="Printed Textile Designer Projects" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
            <div className="gallery-wrapper container-regular">
              <h1 className="page-title">My Gallery</h1>
              <div className="gallery-grid">
                { gallery_data.map((item:GalleryItem) => 
                   <Item key={item.imgSrc} item={item}></Item>
                  )
                }
               <div className="grid-item"></div>
               <div className="grid-item"></div>
              </div>
            </div>
            {/* <Slideshow /> */}
        </main>
      </div>
    )
}

export default gallery;