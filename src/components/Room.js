import React from 'react'
import {Link} from 'react-router-dom'
// @ts-ignore
import defaultImg from '../images/room-3.jpeg'
import propsType from 'prop-types'

export default function Room({room}) {
   const {name,slug,images,price} = room

    return (
       <article className='room'>
           <div  className='img-container'>
               <img src={images[0] || defaultImg} alt=''/>
              
               <div  className='price-top'>
               <h6>${price}</h6>
               <p>per night</p>
           </div>
           <Link to={`/rooms/${slug}`} className='btn-primary room-link'>Featured</Link>
           </div>
          <p className='room-info'>{name}</p>
          
          
       </article>
    )
}
Room.prototype = {
    room:propsType.shape({
        name:propsType.string.isRequired,
        slug:propsType.string.isRequired,
        images:propsType.arrayOf(propsType.string).isRequired,
        price:propsType.number.isRequired

    })
}
