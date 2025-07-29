import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { assets } from "../assets/frontend_assets/assets";

function Hero() {
  return (
    <div className="border mt-1 px-3 ">
      <Row className="align-items-center" style={{ minHeight: "80vh" }}>
        {/* Text column */}
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center align-items-start ps-md-5 mb-4 mb-md-0"
        >
          <p>OUR BESTSELLERS</p>
          <h1 className="prata-regular" style={{ fontSize: "3.4rem" }}>
            Latest Arrivals
          </h1>
          <p>SHOP NOW</p>
        </Col>

        {/* Image column */}
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img
            src={assets.hero_img}
            alt="hero"
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Hero;
