import React from 'react';

function CardText(props){
    return(
        <div className='cardText'>
           
            <div>{props.product.productHeading}</div>
            <div className='cardTextDesc'>{props.product.productDescription}</div> 
        </div>
    );
    
}

export default CardText;