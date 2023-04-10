import React from 'react'

const FruitCards = ({fruit}) => {
  return (
    <div className='rounded-2xl overflow-hidden shadow-lg transform group hover:scale-110 duration-100 relative '>

       <img src={require (`../assests/${fruit.image}.jpeg`)} alt={`${fruit.image}`} className=' w-full h-52 object-cover my-2 py-2'/>  
        
        <div className='flex flex-col items-center my-1  space-y-1'>
            <span className='font-body text-slate-500 block'>{fruit.name}</span>
            <span className='font-body text-slate-500'>Rs.{fruit.price}</span>
            <span className='font-body text-lime-400 text-xs group-hover:visible invisible'>ADD TO CART</span>
        </div>
            <span className='absolute top-3 right-3  bg-sky-300 text-white border-sky-300 p-1 rounded-lg text-sm'>1% off</span>

    </div>
  )
}

export default FruitCards