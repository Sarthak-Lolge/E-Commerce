import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import Dropdown from "react-bootstrap/Dropdown";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
function NavigationBar() {
  const {setShowSearch,getCartCount} = useContext(ShopContext)
  return (
    <Navbar expand="lg" className="bg-body-light mx-4" >
      <Container>
        <Navbar.Brand href="#home">
          <img src={assets.logo} alt="logo" style={{ width: "18vh" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/collection">
              Collections{" "}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className=" d-flex my-auto mx-auto ">
          <img
            onClick={()=> setShowSearch(true)}
            style={{ height: "1.3rem", cursor:"pointer" }}
            className="my-auto  px-3"
            src={assets.search_icon}
            alt=""
          />
          <Dropdown>
            <Dropdown.Toggle variant="light" className=" px-3">
             <Link to='/login'>
             <img
                style={{ height: "1.2rem" }}
                src={assets.profile_icon}
                alt=""
                />
                </Link> 
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Orders</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link to="/cart" className="position-relative my-auto px-3">
            <img
              src={assets.cart_icon}
              style={{ height: "1.6rem" }}
              alt="cart-icon"
            />
            <p
              style={{
                fontSize: "0.7rem",
                zIndex: 10,
                transform: "translate(30%, -30%)",
              }}
              className="position-absolute ms-1 mb-2 text-light py-1 px-2 bg-dark rounded-circle"
            >
             {getCartCount()}
            </p>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
