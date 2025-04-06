import React from 'react'
import './NewProduct.css'
import ProductFrom from './ProductFrom'

const NewProduct = (props) => {

  function saveProduct(product) {
    console.log('Product Saved');
    console.log(product)

    //calling the parent component function
    props.printProduct(product)
  }


  return (
    <div className='new-product' >
      <ProductFrom onSaveProduct={saveProduct} />
    </div>
  )
}

export default NewProduct
