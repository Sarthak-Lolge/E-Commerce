import Row from "react-bootstrap/esm/Row";
import { assets } from "../assets/frontend_assets/assets";
import Col from "react-bootstrap/esm/Col";

function OurPolicy() {
  return (
    <div className="px-auto ms-5">
      <Row className="w-100 ">
        <Col  >
          <div
            style={{ width: "45vh" }}
            className="d-flex justify-content-center flex-column align-items-center  my-4 py-3 mx-5"
          >
            <img
              style={{ height: "10vh", width: "10vh" }}
              src={assets.exchange_icon}
              alt="policy1"
            />
            <b>Easy Exchange Policy</b>
            <p>We offer hassle free exchange policy</p>
          </div>
        </Col>
        <Col>
          <div
            style={{ width: "45vh" }}
            className="d-flex justify-content-center flex-column align-items-center  my-4 py-3 mx-5"
          >
            <img
              style={{ height: "10vh", width: "10vh" }}
              src={assets.quality_icon}
              alt="policy1"
            />
            <b>7 Days Return Policy</b>
            <p>We provide 7 days free return policy</p>
          </div>
        </Col>
        <Col>
          <div
            style={{ width: "45vh" }}
            className="d-flex justify-content-center flex-column align-items-center  my-4 mx-5 py-3"
          >
            <img
              style={{ height: "10vh", width: "10vh" }}
              src={assets.support_img}
              alt="policy1"
            />
            <b>Best customer support</b>
            <p>we provide 24/7 customer support</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default OurPolicy;
