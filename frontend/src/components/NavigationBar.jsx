import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import Dropdown from "react-bootstrap/Dropdown";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function NavigationBar() {
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <Navbar
      expand="lg"
      className="px-4 py-2"
      style={{
        background: "linear-gradient(90deg, #4e54c8, #8f94fb)", // gradient color
        borderRadius: "0 0 20px 20px",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
      }}
    >
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand as={Link} to="/" className="text-white fw-bold">
          <img
            src={assets.logo}
            alt="logo"
            style={{ width: "18vh", filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.3))" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className="text-white mx-2 fw-semibold"
              style={{ transition: "0.3s" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/collection"
              className="text-white mx-2 fw-semibold"
              style={{ transition: "0.3s" }}
            >
              Collections
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className="text-white mx-2 fw-semibold"
              style={{ transition: "0.3s" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className="text-white mx-2 fw-semibold"
              style={{ transition: "0.3s" }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Right Icons */}
        <div className="d-flex align-items-center">
          {/* Search */}
          <img
            onClick={() => setShowSearch(true)}
            style={{ height: "1.5rem", cursor: "pointer" }}
            className="mx-3"
            src={assets.search_icon}
            alt="search"
          />

          {/* Profile Dropdown */}
          <Dropdown align="end">
            <Dropdown.Toggle
              variant="outline-light"
              className="rounded-circle border-0 bg-white p-1"
              style={{ width: "40px", height: "40px" }}
            >
              <img
                style={{ height: "1.2rem" }}
                src={assets.profile_icon}
                alt="profile"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu className="shadow-sm rounded-3">
              <Dropdown.Item as={Link} to="/profile">
                My Profile
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/orders">
                Orders
              </Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Cart */}
          <Link to="/cart" className="position-relative mx-3">
            <img
              src={assets.cart_icon}
              style={{ height: "1.8rem" }}
              alt="cart-icon"
            />
            <span
              style={{
                fontSize: "0.75rem",
                transform: "translate(30%, -30%)",
              }}
              className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger text-white"
            >
              {getCartCount()}
            </span>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
