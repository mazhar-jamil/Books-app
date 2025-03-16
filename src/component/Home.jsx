import React, { useEffect, useState } from 'react'
import cardDefultImage from '../assets/Images/Book.WEBP'
import MUTASHABIHAAT from '../assets/Images/MUTASHABIHAAT_UL_QURAN.webp'
import TajQuran from '../assets/Images/TajQuran-Company.jpg'
import showFront from '../assets/Images/images.Png'
import ImageCarousel from './ImageCarousel'


function Home() {
  // const [userImage, setUserImage] = useState(Books);


  useEffect(() => {
    const getStoredFile = localStorage.getItem("adminFileAstore");

    if(getStoredFile){
      setUserImage(getStoredFile)
    }
  })

  return (
    <>
    <div id="home-Card" className='bg-home'>
    <div className="container-fluid">
  <div className="row py-xl-4 py-lg-4 d-flex align-items-center justify-content-center" id="home-page-FirstRow">
    
    {/* Text Section */}
    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-6 d-flex flex-column align-items-center text-white">
      <h1 className="fw-bolder text-uppercase mt-5 mt-md-0 mt-sm-0 fs-1 fs-md-4 fs-sm-4" id="homei-Titel-IslamicBook">
        Islamic Books World
      </h1>

            <p className="responsive-paragraph inline-flex">
        Lorem ipsum dolor sit amet, consectetur adipisicing.
      </p>
      <p className="responsive-paragraph hidden lg:inline-flex">
        Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo asperiores esse quam magnam obcaecati, odio officia in!
      </p>



      <button className="btn my-xl-3 my-lg-3 my-md-3 px-4 py-2 my-0" id="Home-buy-btn">BUY NOW FOR $99.99</button>
    </div>


    {/* Image Section */}
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 text-center">
      <img src={showFront} className="m-auto" alt="Islamic Book" style={{ width: "200px", height: "300px", objectFit: "cover" }} />
    </div>

  </div>
</div>

<ImageCarousel 
  cardDefultImage={MUTASHABIHAAT} 
  cardDefultHeader={"Mutashabihaat ul Quran"} 
  cardDefultTitle={"متشابہات القرآن لتراویح رمضان"} 
  cardDefultFooter={"Quran e Majeed || قرآن مجید"}
  cardDefultFooterEnd={"منتخب موضوع"}
  id={1} // ✅ ID pass karni zaroori hai
/>

<ImageCarousel 
  cardDefultImage={TajQuran} 
  cardDefultHeader={"Al Quran 16 Lines"} 
  cardDefultTitle={"القرآن الکریم 16 لائن والا سادہ – تاج کمپنی"} 
  cardDefultFooter={"Quran e Majeed || قرآن مجید"}
  cardDefultFooterEnd={"منتخب موضوع"}
  id={2} // ✅ ID pass ki
/>

</div>








    {/* <div className='bg-home-swiper'>
    <ImageCarousel onSelect={(img) => setCardImg(img)}/>
    </div> */}
    </>
  )
}

export default Home