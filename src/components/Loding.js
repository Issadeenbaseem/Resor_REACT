// @ts-nocheck
import React from 'react'
import LodingGif from '../images/gif/loading-arrow.gif'

export default function Loding() {
    return (
        <div className='loading'>
        <h4>rooms data loding ....</h4>
        <img src={LodingGif} alt=''/>
            
        </div>
    )
}
