import Title from "../components/Title";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { assets } from "../assets/frontend_assets/assets";
function About() {
  async function handlesubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="my-5 px-5">
      <Title text1={"ABOUT"} text2={"US"} />
      {/* <div>
        <Row>
          <Col md={2}>
            <div>
              <img src={assets.about_img} style={{ width: "50vh" }} alt="" />
            </div>
          </Col>

          <Col md={4}>
            <div>
              <p>
                Forever was born out of a passion for innovation and a desire to
                revolutionize the way people shop online. Our journey began with
                a simple idea: to provide a platform where customers can easily
                discover, explore, and purchase a wide range of products from
                the comfort of their homes.
              </p>

              <p>
                Since our inception, we've worked tirelessly to curate a diverse
                selection of high-quality products that cater to every taste and
                preference. From fashion and beauty to electronics and home
                essentials, we offer an extensive collection sourced from
                trusted brands and suppliers.
              </p>
            </div>
            <div>
              <b>Our Mission</b>
            </div>

            <div>
              <p>
                Our mission at Forever is to empower customers with choice,
                convenience, and confidence. We're dedicated to providing a
                seamless shopping experience that exceeds expectations, from
                browsing and ordering to delivery and beyond.
              </p>
            </div>
          </Col>
        </Row>
      </div> */}

      <div className="container my-5">
        <Row className="justify-content-center">
          {/* Image Column - 2/12 on large */}
          <Col lg={4} md={4} sm={12} className="mb-4 mb-lg-0">
            <img
              src={assets.about_img}
              alt="About"
              style={{ width: "55vh", height: "57vh" }}
            />
          </Col>

          {/* Text Column - 4/12 on large */}
          <Col lg={5} md={7} sm={12}>
            <p>
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>

            <p>
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>

            <h5 className="mt-4">Our Mission</h5>
            <p>
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </Col>
        </Row>
      </div>

      <div className="my-5" >
        <div >
          <Title text1={"WHY"} text2={"CHOOSE US"} />
        </div>
        <Row className="mt-4">
          <Col lg={4} md={4} sm={12}>
            <div className="px-4 py-3 border">
              <b>Quality Assurance:</b>
              <p className="mt-3">
                We meticulously select and vet each product to ensure it meets
                our stringent quality standards.
              </p>
            </div>
          </Col>

          <Col lg={4} md={4} sm={12}>
            <div className="px-4 py-3 border">
              <b>Convenience:</b>
              <p className="mt-3">
                With our user-friendly interface and hassle-free ordering
                process, shopping has never been easier.
              </p>
            </div>
          </Col>

          <Col lg={4} md={4} sm={12}>
            <div className="px-4 py-3 border">
              <b>Exceptional Customer Service:</b>
              <p className="mt-3">
                Our team of dedicated professionals is here to assist you the
                way, ensuring your satisfaction is our top priority.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      
      <div className="text-center my-5">
        <h3>Subscribe now & get 20% off</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div>
          <form onSubmit={handlesubmit} >
            <input type="text" placeholder="Enter your mail" className="w-25 ps-2 py-2" />
            <button type="submit" className="py-2 bg-dark text-light">Subscribe</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default About;
