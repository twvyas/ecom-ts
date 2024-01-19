import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetails: React.FC = () => {
    const location = useLocation();
  const selectedItem = location.state?.selectedItem || {}; 
   const renderStars = () => {
    const filledStars = Math.round(selectedItem.rating.rate); 
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= filledStars ? 'fa-solid fa-star' : 'fa-regular fa-star';
      stars.push(<i key={i} className={starClass} />);
    }
    return stars;
  };

    return (
        <div className="container-fluid bg-light py-5 "  style={{backgroundColor:'',margin:'5rem'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className=" rounded-lg  mb-4">
                            <img className="w-50 h-50 object-cover"  src={selectedItem.image} alt="Product Image" />
                        </div>                   
                    </div>
                    <div className="col-md-6 mb-4">
                        <h2 className="h2 text-dark font-weight-bold mb-2">{selectedItem.title}</h2>
                        <p className="text-secondary text-sm mb-4">
                        </p>
                        <div className="row mb-4">
                            <div className="col-6">
                                <span className="font-weight-bold text-dark">Price: </span>
                                <span className="text-secondary">${selectedItem.price}</span>
                            </div>                 
                        </div>

                        <div className="row mb-4">
                            <div className="col-6">
                                <span className="font-weight-bold text-dark"> </span>
                                <span className="text-secondary">{renderStars()}</span>
                            </div>                 
                        </div>
                        <div className="mb-4">
                            <span className="font-weight-bold text-dark">Select Size:</span>
                            <div className="d-flex mt-2">
                            <button className="btn btn-dark rounded-pill font-weight-bold mr-2">XS</button>
                                <button className="btn btn-dark rounded-pill font-weight-bold mr-2">S</button>
                                <button className="btn btn-dark rounded-pill font-weight-bold mr-2">M</button>
                                <button className="btn btn-dark rounded-pill font-weight-bold mr-2">L</button>
                                <button className="btn btn-dark rounded-pill font-weight-bold mr-2">XL</button>
                            </div>
                        </div>
                        <div>
                            <span className="font-weight-bold text-dark">Product Description:</span>
                            <p className="text-secondary text-sm mt-2">{selectedItem.description}
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <button className="btn btn-dark btn-block mb-2">Add to Cart</button>
                            </div>
                            <div className="col-md-3">
                                <button className="btn btn-secondary btn-block mb-2">Add to Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
            </div> */}
        </div>   
    );
};
export default ProductDetails;

