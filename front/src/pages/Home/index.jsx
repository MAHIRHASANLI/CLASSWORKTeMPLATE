import React from 'react'
import About from './About'
import Start from './Start'
import Requirrems from './Requirrems'
import Features from './Features'
import Latests from './Latests'
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <div className="application">
    <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <>
    <About/>
    <Start/>
    <Requirrems/>
    <Features/>
    <Latests/>
    </>
</div>
   
  )
}

export default Home