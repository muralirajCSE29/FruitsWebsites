import React, { useState } from 'react'
import FruitCards from './FruitCards'
import Divider from './Divider'



const Seasonspecials = () => {

    const [fruits,setFruits] = useState([
        [
            {
              id: 7,
              image: "7",
              name: "Orange",
              price: 100,
            },
            {
              id: 1,
              image: "1",
              name: "Green Grapes",
              price: 100,
            },
            {
              id: 6,
              image: "6",
              name: "lemon",
              price: 150,
            },
          ]
    ])

  return (
    <section className='w-5/6 mx-auto my-10'> 
    
    <Divider title={'Season Specials'} />
    
    
    </section>
  )
}

export default Seasonspecials