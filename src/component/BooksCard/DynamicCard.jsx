import React from 'react'
import { useParams, useLocation } from "react-router-dom";
import './DynamicCard.css'

function DynamicCard() {
    const { id } = useParams(); // ✅ URL se ID get karo
      const location = useLocation();
      const {cardDefultHeader, cardDefultImage, cardDefultTitle, cardDefultFooter, cardDefultFooterEnd} = location.state || {};
  return (
    <>
     <div className='DynamicCard-container'>
      <div className='DynamicCard-body'>
         <h1>{cardDefultHeader}</h1>
       <div className='DynamicCard-image'>
        <img src={cardDefultImage} alt="" />
        <button className='btn'>Read online</button>
        <button className='btn'>Download</button>
      </div>
      <p className='DynamicCard-pera'>{cardDefultTitle}</p>
      <div className='DynamicCard-Footer'>
        <p>{cardDefultFooter}</p>
        <p>{cardDefultFooterEnd}</p>
      </div>
      </div>
     </div>
    </>
  )
}

export default DynamicCard;



