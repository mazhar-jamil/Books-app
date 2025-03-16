import React from "react";
import { useNavigate } from "react-router-dom";

function ImageCarousel({id, cardDefultImage, cardDefultHeader, cardDefultTitle, cardDefultFooter, cardDefultFooterEnd }) {
  const navigate = useNavigate(); // ✅ React Router ka navigate function

  return (
    <div className="container-fluid parent-container">
      <div className="card">
        <div className="row g-0 h-100">
          <div className="col-lg-1 col-md-2 col-2 p-0">
            <img src={cardDefultImage} className="img-fluid rounded-start card-img-custom"
              style={{ height: "200px", width: "200px", objectFit: "cover" }} alt="..." />
          </div>
          <div className="col-9">
            <div className="card-body">
              <h4 className="card-title">{cardDefultHeader}</h4>
              <p className="card-text">{cardDefultTitle}</p>
              <button onClick={() => navigate(`/read-online/${id}`, {
                state :{
                  cardDefultImage,
                  cardDefultHeader,
                  cardDefultTitle,
                  cardDefultFooter,
                  cardDefultFooterEnd,
                }
              })}>Read Online</button> {/* ✅ Navigate */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
