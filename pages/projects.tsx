import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

const projects = () => {
    return (
        <div>
        <Head>
          <title>Projects - James Thompson-Gorwill</title>
          <meta name="description" content="Printed Textile Designer Projects" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
            <div className="projects-wrapper container-regular">
            <h1>My Printed Textile Projects</h1>
                <div className="projects-grid">
                    <div className="project">
                        <div className="overlay"></div>
                        <div className="project-title">
                            <h2>My Project</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                    </div>
                    <div className="project">
                        <div className="overlay"></div>
                        <div className="project-title">
                            <h2>My Project</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                    </div>
                    <div className="project">
                        <div className="overlay"></div>
                        <div className="project-title">
                            <h2>My Project</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                    </div>
                    <div className="project">
                        <div className="overlay"></div>
                        <div className="project-title">
                            <h2>My Project</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                    </div>
                    <div className="project">
                        <div className="overlay"></div>
                        <div className="project-title">
                            <h2>My Project</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                    </div>
                    <div className="project">
                        <div className="overlay"></div>
                        <div className="project-title">
                            <h2>My Project</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
      </div>
    )
}

export default projects;