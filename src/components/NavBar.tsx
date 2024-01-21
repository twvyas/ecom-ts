import { useEffect, useState } from 'react';
import {Button,Container,Form,Nav,Navbar,NavDropdown} from 'react-bootstrap';

import { useAppDispatch,useAppSelector } from '../utils/hooks';
import {  categoryArr , setFilteredProducts, setSelectedCategory, products } from '../redux/productRedux';

const NavBar= () => {
  // const [selectedValue, setSelectedValue] = useState('All');
  const [inputValue, setInputValue] = useState('');
  const [selectionArr, setSelectionArr] = useState([]);

  const dispatch = useAppDispatch();

  const selectedCategory = useAppSelector((state) => state.productRedux.selectedCategory);
  const productList = useAppSelector(products);
  const catArr = useAppSelector(categoryArr);
  // const products=useAppSelector(P);
  useEffect(() => {
    setSelectionArr(catArr);
  }, [catArr]);

  const searchProducts = (searchValue: string) => () => {
    // const { products } = getState().productRedux;
    if (searchValue !== '') {
      const filteredProducts = productList.filter((item) => {
        return (
          Object.values(item)
            .filter((value) => typeof value === 'string')
            .join('')
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        );
      });
      dispatch(setFilteredProducts(filteredProducts));
    } else {
      dispatch(setFilteredProducts(productList));
    }
  };

  const handleSearch = () => {
    dispatch(searchProducts(inputValue));
  };

  // const handleSelect = (selectedItem: string) => {
  //   const filteredProducts = selectedItem === 'All'
  //   ? productList 
  //   : productList.filter((product) => product.category === selectedItem);
  //   setSelectedCategory(selectedItem);  
  // dispatch(setFilteredProducts(filteredProducts));
  // };
  const handleSelect = (selectedItem: string) => {
    dispatch(setSelectedCategory(selectedItem));
    dispatch(setFilteredProducts(
      selectedItem === 'All' ? productList : productList.filter((product) => product.category === selectedItem)
    ));
  };



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };


  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default form submission behavior
      dispatch(searchProducts(inputValue));
    }
  };
  


  return (
    <Navbar  style={{ backgroundColor: 'rgba(0, 0, 0, 0.09)' }}
      expand="lg"
      className="bg-body-tertiary fixed-top border-bottom rounded-bottom shadow mb-5 bg-white rounded">
      <Container fluid >
        <Navbar.Brand href="/">Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1"></Nav.Link>
            <Nav.Link href="#action2"></Nav.Link>
            <Nav.Link href="#" disabled></Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <NavDropdown title={selectedCategory} id="navbarScrollingDropdown" onSelect={handleSelect}>
              {selectionArr.map((Selection: string, index: number) => (
                <NavDropdown.Item key={index} eventKey={Selection}>
                  {Selection}
                </NavDropdown.Item>
              ))}
            </NavDropdown>


                 {/* <select value={selectedCategory} onChange={(e) => handleSelect(e.target.value)}>
        {selectionArr.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select> */}
      
            <input
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              list="titlesList"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              style={{
                width: '400px',
              }}
            />
           {/* <datalist id="titlesList" onClick={handleSearch} >
               {selectionArr.map((title) => (
                <option key={title} value={title} />
              ))} 
            </datalist> */}
     
            <Button variant="outline-dark" onClick={handleSearch}>
            <i className="fa fa-search" aria-hidden="true"></i>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

