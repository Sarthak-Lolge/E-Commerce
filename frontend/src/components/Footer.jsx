import Row from "react-bootstrap/esm/Row";
import { assets } from "../assets/frontend_assets/assets";
import Copywrite from "./Copywrite";

function Footer() {
  return (
  
      <div style={{ marginTop: "110px", marginLeft: "40px" }}>

        <div className="d-flex justify-content-around ">
          <div className="w-50 ">
            <img src={assets.logo} alt="" style={{ width: "15vh" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="w-25 ms-5">
            <p className="fs-4 font-weight-bold">COMPANY</p>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="w-25">
            <p className="fs-4 font-weight-bold">GET IN TOUCH</p>
            <p></p>
            <p>+1-000-000-0000</p>
            <p>sarthaklolge8@gmail.com</p>
            <p>Instagram</p>
          </div>
        </div>
       <Copywrite/>
      </div>
  
  );
}

export default Footer;
