import { BrowserRouter, Routes, Route } from "react-router-dom";
import MasterLayout from "./components/MasterLayout";
import Home from "./Item/Home";
import ProductPage from './Item/ProductPage'

import NoPage from "./Item/NoPage";
import { useAppDispatch, useAppSelector } from "./utils/hooks";
import { instance } from "./utils/function";
import { categoryArr, productFetchFailure, productFetchSuccess, setCategoryArr } from "./redux/productRedux";
import { useEffect } from "react";
import { CartItemType } from "./Item/CartItemType";

function App() {
  const catArr = useAppSelector(categoryArr)
  const dispatch = useAppDispatch();
  const getProducts = async () => {
    try {
      const productsArr = await instance.get("");
      dispatch(productFetchSuccess(productsArr.data));
      const uniqueCategories = [...new Set(productsArr.data.map((d:CartItemType) => d.category))];
      dispatch(setCategoryArr([...catArr, ...uniqueCategories]));
    } catch (error) {
      console.log("Error fetching products:", error);
      dispatch(productFetchFailure());
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MasterLayout />}>
            <Route index element={<Home />} />
            <Route path="/productPage" element={<ProductPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;