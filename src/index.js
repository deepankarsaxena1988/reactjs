import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Components/card.js';
import { useState } from 'react';
import { useEffect } from 'react';


function HomePage(){
 // const [data,setData] = useState([]);
  
const [data,setData] =useState([]);
const [data1,setData1]=  useState(require("./data/product.json"));
        console.log(data);
        /* useEffect(()=>{
          const jsonFile = require("./data/product.json");
         // console.log(new Date().getMilliseconds());
        console.log(typeof(jsonFile));
        console.log(jsonFile.products);

        setData1((prevState)=>{
          //console.log("set data called");
          //console.log(jsonFile.products);
          prevState={...prevState,products:jsonFile.products[0]}});
        console.log('data1'+data1);
        }); */ 
  
  /* for(let prod in data.products){
      console.log(prod.id);
  } */
  return (
     <>
     <h1>{data1.products.length}</h1>
        {data1.products.map((prod)=><Card product={prod}/>)}
         
     </>
      
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    
    <HomePage/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

