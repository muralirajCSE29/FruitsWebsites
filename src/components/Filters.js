import React, { useState } from 'react'

const Filters = () => {

    const [selectedItem, setSelectedItem] = useState(1)


  return (
    <section className=' my-10 py-3  w-3/5 md:w-4/6 mx-auto flex flex-col md:flex-row md:gap-3 justify-around'>
        <button onClick={() => setSelectedItem(1)} className={`btnstyle ${selectedItem === 1 ? 'bg-green-400 text-white' : 'text-slate-500'}`}  >Latest</button>
        <button onClick={() => setSelectedItem(2)} className={`btnstyle ${selectedItem === 2 ? 'bg-green-400 text-white' : 'text-slate-500'}`}>Best Seller</button>
        <button onClick={() => setSelectedItem(3)} className={`btnstyle ${selectedItem === 3 ? 'bg-green-400 text-white' : 'text-slate-500'}`}>More</button>

    </section>
  )
}

export default Filters