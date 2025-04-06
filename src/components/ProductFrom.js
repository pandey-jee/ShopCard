import React, { useState } from 'react'
import './ProductForm.css'

const ProductFrom = (props) => {

  const [newTitle,setTitle] = useState('');
  const [newDate,setDate] = useState('');

  function titleChangeHandler(event){
    setTitle(event.target.value);
  }

  function dateChangeHandler(event){
    setDate(event.target.value); 
  }

  function submitHandler(event){
    event.preventDefault();

    const productData = {
      title:newTitle,
      date:newDate,
    }
    // console.log(productData);

    props.onSaveProduct(productData);
    setTitle('');
    setDate('');

   }


  return (
    <form onSubmit={submitHandler}>
      <div className='new-product__controls'>

      <div className='new-product__control' >
        <label>Title</label>
        <input type="text" value={newTitle}  onChange={titleChangeHandler}/>
      </div>
      <div className='new-product__control'>
        <label>Date</label>
        <input type="date" value={newDate} min='2025-01-01' max='2025-12-31' onChange={dateChangeHandler} />
      </div>

      <div className='new-product_Button'>
        <button type='submit'>Add Product</button>
      </div>
      </div>
    </form>
  )
}

export default ProductFrom
