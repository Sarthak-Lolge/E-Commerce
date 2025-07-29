/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from '../components/Title'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProductItem from '../components/ProductItem'
function BestSellers() {
  const{products } = useContext(ShopContext)
  const [bestseller,setBestSellers] = useState([])
  useEffect(()=>{
    const bestItems = products.filter((items)=>(items.bestseller))
    setBestSellers(bestItems.slice(0,5))
  },[])
  return (
    <div className="my-5">
      <Title text1={'BEST'} text2={'SELLERS'}/>
       <p
        className="text-center mt- mb-5"
        style={{ paddingLeft: "100px", paddingRight: "100px" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, enim
        incidunt? Veritatis, magni vero ducimus, repellendus eos sapiente magnam
        dignissimos ex alias adipisci nemo, reiciendis sed impedit doloremque
        provident illo!
      </p>

        {/* Rendering items */}
      <Row style={{marginTop:"0px"}} className="w-100 mx-0 gap-2 ">
        {bestseller.map((item,index) => (
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
  )
}

export default BestSellers
