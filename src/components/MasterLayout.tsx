// import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";


const MasterLayout = () =>{

  return (
    <div>
      <NavBar  />
      <Outlet  />
      <Footer />
    </div>
  );
}
export default MasterLayout