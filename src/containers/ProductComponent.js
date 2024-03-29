import React from 'react'
import { useSelector } from 'react-redux';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.initialState.products);
  const {id, title} = products[0]
 
  return (
    <div className='four column wide'>
   <div className='ui link card'>
     <div className='card'>
       <div className='image'>
       </div>
       <div className='content'>
           <div className='header'>
            {title}
            {id}
           </div>
         </div>
     </div>
   </div>
    </div>
  )
}

export default ProductComponent