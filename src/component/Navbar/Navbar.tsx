import { useState } from 'react'
import Login from '../Login/Login'
import './Navbar.css'

const Navbar = () => {
  const [loginPop , setLoginPop]= useState<Boolean>(false)
  return (
    <>
    <div className='flex  navbar justify-between bg-gray-200'>
       <img src="/logo.png" alt="Logo" className='w-12' />
       <div className='flex border border-spacing-1 w-64 p-2 border-black items-center gap-2 bg-white'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text"  placeholder='Location' className='search-input'/>
        <i className="fa-solid fa-chevron-down"></i>
       </div>
       <div className='bg-black w-100 search-div'>
        <input type="text" name="" id="" placeholder='find Cars, Mobilephones and More ... ' className='p-2' />
        <i className="fa-solid fa-magnifying-glass text-white mr-3"></i>
       </div>
       <div className="flex items-center">
        <span>ENGLISH</span>
        <i className="fa-solid fa-chevron-down"></i>

       </div>
       <div className='flex items-center gap-4'>
       <p className='underline font-bold text-gray-600 hover:text-black' onClick={()=>setLoginPop(true)}>Login</p>
       <button className="custom-button">

      <span className='custom-span'>
      <span className="icon">+</span> SELL
      </span>
</button>
       </div>
       
    </div>
    {loginPop ? <Login setLoginPop={setLoginPop}/> : null}
   
    </>
  )
}

export default Navbar
