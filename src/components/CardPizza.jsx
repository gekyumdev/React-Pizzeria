import React from 'react'
import { PiEyesFill } from "react-icons/pi"
import { FaShoppingCart } from "react-icons/fa"
import { formatCurr } from '../utils/formateador'


const CardPizza = (props) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white border-2 divide-y'> 
      <img className='w-full' src={props.img} alt="" />
      <div className='px-6 py-4'>
        <div className='text-xl mb-2 font-bold text-center'>
        Pizza {props.name}
        </div>
      </div>
      <div className='px-6 py-4'>
        <p className='text-center text-gray-700'>Ingredientes: </p>
        <p className='text-gray-700 text-base text-center'>{props.ingredients}</p>
      </div>
      <div className='px-6 pt-4 pb-2 text-center'>
        <p className='text-2xl font-bold'>Precio: ${formatCurr(props.price)}</p>
        <div>
          <div className='ml-2 flex items-center text-black justify-between mt-3 mb-2'>
                  <button className='flex items-center gap-2 px-3 py-1 border border-gray-500 rounded-lg hover:bg-gray-800 hover:text-white transition duration-200'>
                      <span className='font-medium'>Ver Más</span>
                      <PiEyesFill />
                  </button>
                  <button className='flex items-center gap-2 px-3 py-1 border border-gray-500 rounded-lg hover:bg-gray-800 hover:text-white transition duration-200'>
                      <span className='font-medium mr-2'>Añadir</span>
                      <FaShoppingCart />
                  </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPizza