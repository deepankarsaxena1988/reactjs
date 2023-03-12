import React from 'react';
import CardImage from './cardImage.js';
import CardText from './cardText.js';
import '../css/card.css';
function Card(props){
  console.log(props.product);
    return (
        <>
            <div className='card' >
                {/* <h1>test{props.product.id}</h1> */}
                <CardImage imageURL={props.product.imageURL}/>
            
                {/*  <CardText product={props.product.productText}/>   */} 
            </div>
        </>
    );
}

export default Card;