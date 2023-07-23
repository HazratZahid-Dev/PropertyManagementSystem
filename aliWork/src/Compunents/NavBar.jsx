import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
   <div className='flex justify-between bg-black text-white py-3'>
     <div className='flex items-center w-[70%] justify-around list-none'>
         <li>
            <Link to="/" className='font-semibold text-lg'>
              Sale
            </Link>
          </li>
          <li>
            <Link to="/" className='font-semibold text-lg'>
              Rent
            </Link>
          </li>
          <li>
            <Link to="/" className='font-semibold text-lg'>
              Agencies
            </Link>
          </li>
          <li>
            <Link to="/" className='font-semibold text-lg'>
              Resedentail Complexes
            </Link>
          </li>

    </div>
    <div className='w-[30%] flex gap-x-6  justify-end px-3'>
        <button type='button' className='border-2 border-green-500 hover:bg-green-500 px-5 py-1 rounded-sm font-semibold'>SignIn</button>
        <button type='button' className='border-2 border-green-500 px-5 hover:bg-green-500 py-1 rounded-sm font-semibold'>SignUp</button>

    </div>
   </div>
  )
}

export default NavBar