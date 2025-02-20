import React, { useState } from 'react'
import UploadFile from './UploadFile'
import ImageCarousel from '../../ImageCarousel'

function Tasting() {
  const [images, setImages] = useState([]); // Image array

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create URL for preview
      setImages([...images, imageUrl]); // Add new image to state
    }
  };

  return (
    <>
     <UploadFile images={images} handleImageUpload={handleImageUpload} />
     <ImageCarousel images={images}/>
    </>
  )
}

export default Tasting