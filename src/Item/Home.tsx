import { useEffect, useState } from 'react'
import Item from './Item'
import Grid from '@mui/material/Grid';
import { Wrapper } from './Item.styles';
import { CartItemType } from './CartItemType'

import { useSelector } from "react-redux";

import { filteredProducts } from "../redux/productRedux";

const Home = () => {
  const [products, setProducts] = useState([] as CartItemType[]);

  const productList = useSelector(filteredProducts);
  useEffect(() => {
    setProducts(productList);
  }, [productList]);

  // const filterProducts = async () => {
  //   if (categories === "All") {
  //     setProducts(data);
  //   } else {
  //     const filterData = data.filter((d) => d.category === categories);
  //     setProducts(filterData);
  //   }
  // }

  //   const searchItems = (searchValue: string) => {
  //   setSearchInput(searchValue);
  //   if (searchValue !== '') {
  //     const filteredProducts = products.filter((item) => {
  //       return (
  //         Object.values(item)
  //           .filter((value) => typeof value === 'string')
  //           .join('')
  //           .toLowerCase()
  //           .includes(searchValue.toLowerCase())
  //       );
  //     });
  //     setProducts(filteredProducts);
  //   } else {
  //     filterProducts(); 
  //   }
  // };

  //  useEffect(() => {
  //   setProducts(productList);
  // }, [productList]);

  // useEffect(() => {
  //   getProducts();
  // }, []);

  // useEffect(() => {
  //   filterProducts();
  // }, [data, categories]);

  // useEffect(() => {
  //   console.log("hello");    
  //   const uniqueTitlesArr = [...new Set(products.map((d) => d.title))];
  //   console.log(uniqueTitlesArr);

  //     setTitlesArr([...uniqueTitlesArr]);
  // }, [products]);

  const handleAddToCart = () => null;
  return (
    <div>
    <Wrapper style={{backgroundColor:'',margin:'5rem'}}>
      <Grid container spacing={3}>
        {products?.map(item => (
          <Grid item key={item.id} xs={12} sm={3}>
            <Item item={item} handleAddToCart={handleAddToCart}></Item>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
    </div>
  );
}
export default Home

