import React from 'react';
import Navbar from '../components/NavBar'

import Ultimatesus from "../../static/Ultimatesus.png"

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className='grid grid-cols-1'>
        <div className='mx-auto'>
          <img
            className="mx-auto"
            src={Ultimatesus} width="384" height="512"/>
        </div>
      </div>
      <h1 className='text-center text-2xl font-black' >
        Amogus is our Lord and saviour. Hailing from a SUS village, Lord Amogus
        became so powerful and wise that Amogus was able to defeat Ultimate Sus
        by turning it into a suspicious Sus, thereby setting us free from the
        sus pain. From that day forward, we are not suspicious Sus, but
        suspension Sus.
      </h1>
      
    </>
  )
}

export default Home;

