import React from 'react'

const ProducerHome = () => {
  return (
    <div className='bg-red-50' h-screen>
      <div className='p-7  flex flex-col justify-between'>
      <form className='flex items-center gap-5' >
        <h3 className='text-3xl'>Add Items</h3>
        <input
                required
                className='bg-[#eeeeee]  rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
                type="text"
                placeholder='items'
                
              />
      </form>
      </div>

      <div>
        <h3 className='text-3xl'>Items</h3>
      </div>

      <div>

      </div>
    </div>
  )
}

export default ProducerHome
