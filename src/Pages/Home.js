// @ts-nocheck
import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRoom from '../components/FeaturedRoom'

export default function Home() {
    return (
    <>
      <Hero >
    
    <Banner title='luxurius rooms' subtitle='All the rooms are stating from 11 000' >

    

             <Link to='/rooms'  className='btn-primary'> our room</Link>
    </Banner>

    
</Hero>
<Services/>
<FeaturedRoom/>

    </>
      
        
    )
}
