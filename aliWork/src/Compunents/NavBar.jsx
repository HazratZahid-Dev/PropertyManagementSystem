import React from 'react'
import img from '../Images/th.jpg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
   <div className='flex justify-between bg-black text-white py-3'>
     <div className='flex items-center w-[70%] gap-x-3 list-none px-2'>
     <div className='w-12 h-9 rounded-full '><img src={img} className='rounded-lg h-full w-full object-cover'/></div>
        <div className='flex gap-x-4'>
        <li>
            <Link to="/" className='font-semibold text-lg'>
              Individual
            </Link>
          </li>
          <li>
            <Link to="/" className='font-semibold text-lg'>
              Agencies
            </Link>
          </li>
        </div>
          
          

    </div>
    <div className='w-[30%] flex gap-x-6  justify-end px-3'>
        <button type='button' className='border-2 border-green-500 hover:bg-green-500 px-5 py-1 rounded-sm font-semibold'>SignIn</button>
        <button type='button' className='border-2 border-green-500 px-5 hover:bg-green-500 py-1 rounded-sm font-semibold'>SignUp</button>

    </div>
   </div>
  )
}

export default NavBar
   {/* {!showMore && products.length > 10 && (
        <div className="flex justify-end px-5 py-3">
          <button
            type="button"
            className="px-4 py-1 border bg-green-500 text-white font-semibold flex justify-end"
            onClick={handleShowMore}
          >
            More
          </button>
        </div>
      )} */}