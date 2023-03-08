import React from 'react';
import image1 from '../images/image1.jpg';

function CardImage( props){
    return(
        <div className='cardImage'> 
               
          {/*
            <h1>Image {props.imageURL} </h1>      
          //user image url
            
            //Use local stored images. need to import image and then use 
            //to use images from local project repositry store then inside public folder */}
        <img src={'/images/'+props.imageURL} alt={props.imageURL}/>
        
       </div>
    );
}

export default CardImage;