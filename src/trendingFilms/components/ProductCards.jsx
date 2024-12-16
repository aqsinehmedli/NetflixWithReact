import React from 'react'

const ProductCards = ({product}) => {
  return (
    <div className='rounded-[8px] size-[350px] flex flex-col items-center bg-cover cursor-pointer'>
        <img className='w-[115px] h-[162px] object-scale-down' src={product.gallery[0]} alt="" />
    </div>
  )
}

export default ProductCards