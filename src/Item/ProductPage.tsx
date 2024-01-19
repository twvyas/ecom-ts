// import React from 'react';
// const ProductDetails: React.FC = () => {
//     return (
//         <div className="container-fluid bg-light py-5">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-6 mb-4">
//                         <div className="h-100 rounded-lg bg-secondary mb-4">
//                             <img className="w-100 h-100 object-cover" src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="Product Image" />
//                         </div>                   
//                     </div>
//                     <div className="col-md-6 mb-4">
//                         <h2 className="h2 text-dark font-weight-bold mb-2">Product Title</h2>
//                         <p className="text-secondary text-sm mb-4">
//                         </p>
//                         <div className="row mb-4">
//                             <div className="col-6">
//                                 <span className="font-weight-bold text-dark">Price:</span>
//                                 <span className="text-secondary">$29.99</span>
//                             </div>                 
//                         </div>
//                         <div className="mb-4">
//                             <span className="font-weight-bold text-dark">Select Size:</span>
//                             <div className="d-flex mt-2">
//                             <button className="btn btn-dark rounded-pill font-weight-bold mr-2">XS</button>
//                                 <button className="btn btn-dark rounded-pill font-weight-bold mr-2">S</button>
//                                 <button className="btn btn-dark rounded-pill font-weight-bold mr-2">M</button>
//                                 <button className="btn btn-dark rounded-pill font-weight-bold mr-2">L</button>
//                                 <button className="btn btn-dark rounded-pill font-weight-bold mr-2">XL</button>
//                             </div>
//                         </div>
//                         <div>
//                             <span className="font-weight-bold text-dark">Product Description:</span>
//                             <p className="text-secondary text-sm mt-2">
//                             </p>
//                         </div>
//                         <div className="row">
//                             <div className="col-md-3">
//                                 <button className="btn btn-dark btn-block mb-2">Add to Cart</button>
//                             </div>
//                             <div className="col-md-3">
//                                 <button className="btn btn-secondary btn-block mb-2">Add to Wishlist</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img src="..." className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="..." className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="..." className="d-block w-100" alt="..."/>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
//             </div>
//         </div>   
//     );
// };
// export default ProductDetails;


import React from 'react';
import NoDataFound from '../Item/NoDataFound.jpg'
const ProductDetails: React.FC = () => {
    return (
        <div className="container-fluid bg-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="h-100 rounded-lg bg-secondary mb-4">
                            <img className="w-100 h-100 object-cover" src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="Product Image" />
                        </div>
                    
                        </div>
                <div className="col-md-4 mb-4">
                        <h2 className="h2 text-dark font-weight-bold mb-2">Product Title</h2>
                        <p className="text-secondary text-sm mb-4"></p>
                        <div className="row mb-4">
                            <div className="col-6">
                                <span className="font-weight-bold text-dark">Price:</span>
                                <span className="text-secondary">$29.99</span>
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

                        {/* Product description */}
                        <div>
                            <span className="font-weight-bold text-dark">Product Description:</span>
                            <p className="text-secondary text-sm mt-2"></p>
                        </div>

                        {/* Add to Cart and Add to Wishlist buttons */}
                        <div className="row">
                            <div className="col-md-4">
                                <button className="btn btn-dark btn-block mb-2">Add to Cart</button>
                            </div>
                            <div className="col-md-3">
                                <button className="btn btn-secondary btn-block mb-2">Add to Wishlist</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={NoDataFound} className=" w-100" alt="....1" />
                                </div>
                                <div className="carousel-item">
                                <img src={NoDataFound} className=" w-100" alt="....2" />
                                </div>
                                <div className="carousel-item">
                                <img src={NoDataFound} className=" w-100" alt="....3" />      
                                </div>
                            </div>
 
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

