import React from 'react'

const Checkout = () => {
  return (
    <article className='text-dark text-xs md:text-sm h-screen px-2'>
      <h3 className='text-sm md:text-md font-bold pt-4 pb-6 md:pb-10'>Shopping Checkout</h3>

      <h4 className='font-semibold'>Your Details</h4>
      <hr></hr>
      <aside className='flex flex-col md:flex-row md:justify-between'>
        <label>Name <input className='border w-80' /></label>
        <label>Email <input/></label>
      </aside>
      <br></br>
      <br></br>

      <h4 className='font-semibold'>Address Details</h4>
      <hr></hr>
      <aside>
        <label>Billing Address
          <br></br>
          <input/>
        </label>
        <br></br>
        <label>Shipping Address
          <br></br>
          <input/>
        </label>
        <br></br>
      </aside>
      
      <section className='flex p-2 justify-between'>
        <button className='text-green font-medium border rounded-md px-6 py-1.5 hover:text-white hover:bg-green hover:border-none'>Clear</button>
        <button className='text-green font-medium border rounded-md px-5 py-1.5 hover:text-white hover:bg-green hover:border-none'>Confirm Order</button>
      </section>
    </article>
  )
}

export default Checkout