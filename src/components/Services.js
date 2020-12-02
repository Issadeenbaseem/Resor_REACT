import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'


export default class Services extends Component {

   state={
       service:[
        {
            icons:<FaCocktail/>,
            title:'Coctails',
            info:'Our records indicate that you are a Non-Resident Alien and sometime in the past submitted a form W-8BEN for your Tax exemption status and withholding, your form may have exceeded its succeeding calendar year and therefore has expired'
        },
        {
         icons:<FaHiking/>,
         title:'Endless Hiking',
         info:'Our records indicate that you are a Non-Resident Alien and sometime in the past submitted a form W-8BEN for your Tax exemption status and withholding, your form may have exceeded its succeeding calendar year and therefore has expired'
     },
     {
         icons:<FaShuttleVan/>,
         title:'Suttle Van',
         info:'Our records indicate that you are a Non-Resident Alien and sometime in the past submitted a form W-8BEN for your Tax exemption status and withholding, your form may have exceeded its succeeding calendar year and therefore has expired'
     },
     {
         icons:<FaBeer/>,
         title:'Beer Services',
         info:'Our records indicate that you are a Non-Resident Alien and sometime in the past submitted a form W-8BEN for your Tax exemption status and withholding, your form may have exceeded its succeeding calendar year and therefore has expired'
     }
       ]
   }
    render() {
        return (
            <section className='services'>
               <Title title='services'/>

              <div className='services-center'>
              {this.state.service.map((item,id) =>{
                   return(
                       <article key={id} className='service'>
                           <span>{item.icons}</span>
                           <h6>{item.title}</h6>
                           <p>{item.info}</p>

                       </article>
                   )
               })}

              </div>
               
            </section>
        )
    }
}
