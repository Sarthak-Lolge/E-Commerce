/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Title from "./Title";
function LatestCollection() {
  const [latestItems, setLatestItems] = useState([]);
  const { products } = useContext(ShopContext);
  // console.log(products);

  useEffect(() => {
    setLatestItems(products.slice(0, 10));
  }, [ ]);

  return (
    <div className=" my-5">
       <Title text1={'LATEST'} text2={'COLLECTION'}/>
      <p
        className="text-center mt-2  mb-5"
        style={{ paddingLeft: "100px", paddingRight: "100px" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, enim
        incidunt? Veritatis, magni vero ducimus, repellendus eos sapiente magnam
        dignissimos ex alias adipisci nemo, reiciendis sed impedit doloremque
        provident illo!
      </p>

      {/* Rendering items */}
      <Row style={{marginTop:"0px"}} className="w-100 mx-0 gap-2 ">
        {latestItems.map((item,index) => (
          <Col style={{width:"35vh"}}>
            <ProductItem 
            key={index}
              _id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default LatestCollection;
