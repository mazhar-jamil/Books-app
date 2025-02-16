import React, { useEffect, useState } from 'react'
import cardDefultImage from '../assets/Images/Book.JPG'
import Books from '../assets/Images/Books Labrery.JPG'
import showFront from '../assets/Images/showFront.PNG'
import ImageCarousel from './ImageCarousel'


function Home() {
  const [userImage, setUserImage] = useState(Books);

  const [cardImg,setCardImg] = useState(cardDefultImage)

  useEffect(() => {
    const getStoredFile = localStorage.getItem("adminFileAstore");

    if(getStoredFile){
      setUserImage(getStoredFile)
    }
  })

  return (
    <>
    <div id="home-Card" className='bg'>
    <div className="container-fluid">
  <div className="row py-xl-4 py-lg-4 d-flex align-items-center justify-content-center" id="home-page-FirstRow">
    
    {/* Text Section */}
    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-6 d-flex flex-column align-items-center text-white">
      <h1 className="fw-bolder text-uppercase mt-5 mt-md-0 mt-sm-0 fs-1 fs-md-4 fs-sm-4" id="homei-Titel-IslamicBook">
        Islamic Books World
      </h1>

      <p className="responsive-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
      </p>


      <button className="btn my-xl-3 my-lg-3 my-md-3 px-4 py-2 my-0" id="Home-buy-btn">BUY NOW FOR $99.99</button>
    </div>


    {/* Image Section */}
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 text-center">
      <img src={showFront} className="m-auto" alt="Islamic Book" style={{ width: "200px", height: "300px", objectFit: "cover" }} />
    </div>

  </div>
</div>


    <div className="container pb-5">
  <div className="row justify-content-center">
    {/* First Card */}
<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mt-5 pt-0 d-flex justify-content-center">
  <div className="card responsive-Home-card">
    <img
      src={cardImg}
      className="card-img-top home-Responsive-CardImg transition-all duration-500 transform hover:scale-105"
      style={{ width: "100%", height: "400px", objectFit: "cover" }}
      alt="Book"
    />
    <div className="card-body text-center">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <label htmlFor="fileInput1" className="btn btn-primary">Upload File</label>
      <input id="fileInput1" type="file" style={{ display: "none" }} />
    </div>
  </div>
</div>



    {/* Second Card */}
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mt-5 pt-0 d-flex justify-content-center gapx5">
      <div className="card responsive-Home-card">
        <img
          src={userImage}
          className="card-img-top home-Responsive-CardImg transition-all duration-500 transform hover:scale-105"
          alt="Book"
        />
          <div className="card-body text-center">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <label htmlFor="fileInput1" className="btn btn-primary">Upload File</label>
          <input id="fileInput1" type="file" style={{ display: "none" }} />
        </div>
      </div>
    </div>
  </div>
</div>
    
<ImageCarousel onSelect={(img) => setCardImg(img)}/>
    </div>
    </>
  )
}

export default Home