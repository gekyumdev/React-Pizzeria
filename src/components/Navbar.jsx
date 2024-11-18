import React from 'react'
import { formatCurr } from '../utils/formateador'
import { LuPizza } from "react-icons/lu"
import { PiLockKeyFill } from "react-icons/pi"
import { FaShoppingCart } from "react-icons/fa"

const Navbar = () => {

    const total=25000;
    const token=false;

  return (
    <div className='bg-stone-900 flex justify-between'>
        <div className='flex ml-2 bg-stone-900 rounded-sm'>
            <button className='text-white'>Pizzería Mamma Mia!</button>
            {/*Button Home*/}
            <div className='ml-2 flex items-center text-white'>
                <button className='flex items-center gap-2 px-3 py-1 border border-gray-500 rounded-lg hover:bg-gray-800 hover:text-white transition duration-200'>
                    <LuPizza />
                    <span className='font-medium'>Home</span>
                </button>
            </div>
            
            <div className='ml-2'>
                {token ? (
                    <div className='m-2 flex'>
                        {/*Button Login*/}
                        <div className='ml-2 flex items-center text-white'>
                            <button className='flex items-center gap-2 px-3 py-1 border border-gray-500 rounded-lg hover:bg-gray-800 hover:text-white transition duration-200'>
                                <PiLockKeyFill />
                                <span className='font-medium'>Login</span>
                            </button>
                        </div>
                        {/*Button Register*/}
                        <div className='ml-2 flex items-center text-white'>
                            <button className='flex items-center gap-2 px-3 py-1 border border-gray-500 rounded-lg hover:bg-gray-800 hover:text-white transition duration-200'>
                                <PiLockKeyFill />
                                <span className='font-medium'>Register</span>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='m-2 flex'>
                        {/*Button Profile*/}
                        <div className='ml-2 flex items-center text-white'>
                            <button className='flex items-center gap-2 px-3 py-1 border border-gray-500 rounded-lg hover:bg-gray-800 hover:text-white transition duration-200'>
                                <PiLockKeyFill />
                                <span className='font-medium'>Profile</span>
                            </button>
                        </div>
                        {/*Button Logout*/}
                        <div className='ml-2 flex items-center text-white'>
                            <button className='flex items-center gap-2 px-3 py-1 border border-gray-500 rounded-lg hover:bg-gray-800 hover:text-white transition duration-200'>
                                <PiLockKeyFill />
                                <span className='font-medium'>Logout</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
        {/*Button Total*/}
        <div className='ml-2 mr-2 flex items-center text-cyan-400'>
            <button className='flex items-center gap-2 px-3 py-1 border border-gray-500 rounded-lg hover:bg-gray-800 hover:text-white transition duration-200'>
                <FaShoppingCart />
                <span className='font-medium mr-2'>{formatCurr(total)}</span>
            </button>
        </div>
    </div>
  )
}

export default Navbar