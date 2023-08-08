import React from 'react'


const Home = () => {
  
        return (
          <div className='bg-tent w-full h-[80vh] bg-cover bg-no-repeat flex flex-col flex-grow overflow-auto items-center justify-center text-white'>
          <p className='w-4/5  m:w-1/2 text-4xl sm:text-5xl font-extrabold py-5 '>You got the travel plans,<br/> we got the travel vans.</p>
          <p className='text-xl w-4/5 py-5'>Add adventure to your life by joining the #vanlife movement.Rent the perfect van to make your perfect road trip.</p>
          <button className='bg-btnColor w-4/5 py-4 m:w-1/2 rounded-sm' >Find your van</button>
          </div>
        )
}

export default Home
