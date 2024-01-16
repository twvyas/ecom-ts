import React from 'react';
import {  Container, Nav, InputGroup, FormControl, Button } from 'react-bootstrap';

const ProductDetails = () => {
  return (
    <header>
      <div className="p-3 text-center bg-white border-bottom">
        <Container>
          <div className="row gy-3">
            <div className="col-lg-2 col-sm-4 col-4">
              <a href="https://mdbootstrap.com/" target="_blank" className="float-start">
                <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="35" alt="MDB Logo" />
              </a>
            </div>

            <div className="order-lg-last col-lg-5 col-sm-8 col-8">
              <div className="d-flex float-end">
                <a href="" className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank">
                  <i className="fas fa-user-alt m-1 me-md-2"></i><p className="d-none d-md-block mb-0">Sign in</p>
                </a>
                <a href="" className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank">
                  <i className="fas fa-heart m-1 me-md-2"></i><p className="d-none d-md-block mb-0">Wishlist</p>
                </a>
                <a href="" className="border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank">
                  <i className="fas fa-shopping-cart m-1 me-md-2"></i><p className="d-none d-md-block mb-0">My cart</p>
                </a>
              </div>
            </div>
 
            <div className="col-lg-5 col-md-12 col-12">
              <InputGroup className="float-center">
                <FormControl type="search" id="form1" className="form-control" />
                <Button variant="primary" className="shadow-0">
                  <i className="fas fa-search"></i>
                </Button>
              </InputGroup>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-primary">
        <Container className="py-4">
          <Nav className="d-flex">
            <h6 className="mb-0">
              <Nav.Link href="#" className="text-white-50">Home</Nav.Link>
              <span className="text-white-50 mx-2">  </span>
              <Nav.Link href="#" className="text-white-50">Library</Nav.Link>
              <span className="text-white-50 mx-2">  </span>
              <Nav.Link href="#" className="text-white"><u>Data</u></Nav.Link>
            </h6>
          </Nav>
        </Container>
      </div>
    </header>
  );
}

export default ProductDetails;
