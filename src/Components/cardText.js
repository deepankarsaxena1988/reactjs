import React from 'react';

function CardText(props){
    return(
        <>
        {/* {Object.values(props.product)} */}
        <div className='cardText'>
           
            <div>{props.product.productHeading}</div>
            <div className='cardTextDesc'>{props.product.productDescription}</div> 
        </div>
        </>
    );
    
}

export default CardText;