// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


// function NavBar(props: {
//   // searchItems(value: string): unknown;
//   // setCategories: (arg0: string) => void;
//   selectionArr: string[];
//   setSearchInput: React.Dispatch<React.SetStateAction<string>>;
//   titlesArr: string[];
// }) 
// {
//   const [selectedValue, setSelectedValue] = useState('All');
  


//   // const [searchProduct, setSearchProduct] = useState(false);
//   const [inputValue, setInputValue] = useState('');
//   const handleSelect = (selectedItem: string) => {
//     setSelectedValue(selectedItem);
//     props.setCategories(selectedItem);
//     props.setSearchInput('');
//     setInputValue('');
//   };
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary fixed-top border-bottom rounded-bottom 
//     shadow mb-5 bg-white rounded">
//       <Container fluid>
//         <Navbar.Brand href="/">Store</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1"></Nav.Link>
//             <Nav.Link href="#action2"></Nav.Link>
//             <Nav.Link href="#" disabled>
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <NavDropdown  title={selectedValue} id="navbarScrollingDropdown" onSelect={handleSelect}>
//               {props.selectionArr.map((Selection: string, index: number) => (
//                 <NavDropdown.Item key={index} eventKey={Selection}>
//                   {Selection}
//                 </NavDropdown.Item>
//               ))}
//             </NavDropdown>
//             <input
//               type="text"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//               list="titlesList"
//               value={inputValue}
//               onChange={(e) => {
//                 setInputValue(e.target.value);
//                 props.setSearchInput(e.target.value);
//                 props.searchItems(e.target.value);
//               }}

//               style={{
//                 width: '400px',
//               }}
//             />
//             <datalist id="titlesList">
//               {props.titlesArr.map((title) => (
//                 <option key={title} value={title} />
//               ))}
//             </datalist>
//             <Button variant="outline-dark"><FaSearch /></Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;

import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAppSelector } from '../utils/hooks';
import { categoryArr } from '../redux/productRedux';

const NavBar= () => {
  const [selectedValue, setSelectedValue] = useState('All');
  const [inputValue, setInputValue] = useState('');
  const [selectionArr, setSelectionArr] = useState([]);

  const catArr = useAppSelector(categoryArr);
  useEffect(() => {
    setSelectionArr(catArr);
  }, [catArr]);

  const handleSelect = (selectedItem: string) => {
    setSelectedValue(selectedItem);
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
          <Form className="d-flex">
            <NavDropdown title={selectedValue} id="navbarScrollingDropdown" onSelect={handleSelect}>
              {selectionArr.map((Selection: string, index: number) => (
                <NavDropdown.Item key={index} eventKey={Selection}>
                  {Selection}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <input
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              list="titlesList"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              style={{
                width: '400px',
              }}
            />
            {/* <datalist id="titlesList">
              {titlesArr.map((title) => (
                <option key={title} value={title} />
              ))}
            </datalist> */}
            <Button variant="outline-dark">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
