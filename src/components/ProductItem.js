import React,{useState} from 'react';
import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {

  const [title,newTitle] = useState(props.title);

  function clickHandler (){
    let name = prompt("enter the product name u want");
    newTitle(name);
    // alert("fuck u")
  }

  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{title}</h2>
      </div>
      <button onClick={clickHandler}>Add to Cart</button>
    </Card>
  );
}

export default ProductItem;