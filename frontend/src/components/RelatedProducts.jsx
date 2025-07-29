import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ProductItem from "./ProductItem";
import Title from "./Title";
function RelatedProducts({ category = [], subCategory = [] }) {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length === 0) {
      setRelated([]);
      return;
    }

    const filtered = products.filter((item) => {
      const matchCategory =
        category.length === 0 || category.includes(item.category);

      const matchSubCategory =
        subCategory.length === 0 || subCategory.includes(item.subCategory);

      return matchCategory && matchSubCategory;
    });

    // store only the first five
    setRelated(filtered.slice(0, 5));
    // console.log(filtered.slice(0,5))
  }, [products, category, subCategory]); // ← all relevant deps

  return (
    <div className="my-5">
      <Title text1={"RELATED"} text2={"PRODUCTS"} />
      <div className="my-2">
        <Row style={{ marginTop: "0px" }} className="w-100 mx-0 gap-2">
          {related.map((item, index) => (
            <Col key={item._id || index} style={{ width: "35vh" }}>
              <ProductItem
                _id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default RelatedProducts;
