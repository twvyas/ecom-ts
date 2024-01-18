// // import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css'
// import { RouterProvider } from 'react-router-dom'
// import router from "./config/routeConfig";

// function App() {

//   return (
//     <div className="App">
//       <RouterProvider router={router}></RouterProvider>
//     </div>
//   )
// }

// export default App


import { BrowserRouter, Routes, Route } from "react-router-dom";
import MasterLayout from "./components/MasterLayout";
import Home from "./Item/Home";
import ProductPage from './Item/ProductPage'

import NoPage from "./Item/NoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MasterLayout />}>
            {/* <Route index element={<Home />} /> */}
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/productPage" element={<ProductPage />}/>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;