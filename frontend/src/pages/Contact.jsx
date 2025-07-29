import Title from "../components/Title";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { assets } from "../assets/frontend_assets/assets";
function Contact() {
  async function handlesubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="my-5 px-5">
      <Title text1={"CONTACT "} text2={"US"} />

      <div className="container my-5">
        <Row className="justify-content-center">
          {/* Image Column - 2/12 on large */}
          <Col lg={4} md={4} sm={12} className="mb-4 mb-lg-0">
            <img
              src={assets.contact_img}
              alt="About"
              style={{ width: "55vh", height: "57vh" }}
            />
          </Col>

          {/* Text Column - 4/12 on large */}
          <Col lg={5} md={7} sm={12}>
          <div className="d-flex flex-column gap-3">

            <b className="my-1">Our Store</b>

            <p>
              54709 Willms Station <br />
              Suite 350, Washington, USA
            </p>
            <p>
              Tel: (415) 555-0132 <br />
              Email: admin@forever.com
            </p>
            <h5 className="mt-4">Careers at Forever</h5>
            <p>
             Learn more about our teams and job openings.
            </p>
            <button className="w-25 py-2 bg-transparent" > Explore Jobs</button>
          </div>
          </Col>
        </Row>
      </div>

     

      <div className="text-center my-5">
        <h3>Subscribe now & get 20% off</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div>
          <form onSubmit={handlesubmit}>
            <input
              type="text"
              placeholder="Enter your mail"
              className="w-25 ps-2 py-2"
            />
            <button type="submit" className="py-2 bg-dark text-light">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
