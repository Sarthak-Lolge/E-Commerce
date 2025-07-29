/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import "../components/css/Collection.css";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ProductItem from "../components/ProductItem";

function Collection() {
  const { products,search,showSearch } = useContext(ShopContext);

  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategroy, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  // Toggle for Category (e.g., Men, Women)
  function toggleCategory(e) {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  }

  // Toggle for SubCategory / Type (e.g., Topwear)
  function toggleSubCategory(e) {
    const value = e.target.value;
    if (subCategroy.includes(value)) {
      setSubCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setSubCategory((prev) => [...prev, value]);
    }
  }

  // Filter Logic
 function applyFilter() {
  let productCopy = products.filter((item) => {
    const matchCategory =
      category.length === 0 || category.includes(item.category);
    const matchSubCategory =
      subCategroy.length === 0 || subCategroy.includes(item.subCategory);
    return matchCategory && matchSubCategory;
  });

  if (search && showSearch) {
    productCopy = productCopy.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  setFilterProducts(productCopy);
}


  function sortProduct(){
    const sortProductItem = filterProducts.slice();
    switch(sortType)
    {
      case 'low-to-high':
        setFilterProducts(sortProductItem.sort((a,b)=>(a.price -b.price)));
        break;
      
      case 'high-to-low':
        setFilterProducts(sortProductItem.sort((a,b)=>(b.price - a.price)));
        break;

      default:
        applyFilter();
        break;  
    }
  }

  // Initial Load
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  // Re-run filter when category/type changes
  useEffect(() => {
    applyFilter();
  }, [category, subCategroy,search,showSearch]);

  // re-run when the user select the sort-options
  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className="d-flex gap-5">
      {/* Left Filters */}
      <div className="filters">
        <p className="fs-5">FILTERS</p>

        {/* Category Filter */}
        <div style={{ width: "22vh" }} className="pt-3 pe-2 ps-3 border">
          <p className="">CATEGORIES</p>
          <p>
            <input
              type="checkbox"
              className="me-2"
              value="Men"
              onChange={toggleCategory}
            />
            Men
          </p>
          <p>
            <input
              type="checkbox"
              className="me-2"
              value="Women"
              onChange={toggleCategory}
            />
            Women
          </p>
          <p>
            <input
              type="checkbox"
              className="me-2"
              value="Kids"
              onChange={toggleCategory}
            />
            Kids
          </p>
        </div>

        {/* Subcategory / Type Filter */}
        <div className="mt-4 pt-3 pe-2 ps-3 border">
          <p className="">TYPE</p>
          <p>
            <input
              type="checkbox"
              className="me-2"
              value="Topwear"
              onChange={toggleSubCategory}
            />
            Topwear
          </p>
          <p>
            <input
              type="checkbox"
              className="me-2"
              value="Bottomwear"
              onChange={toggleSubCategory}
            />
            Bottomwear
          </p>
          <p>
            <input
              type="checkbox"
              className="me-2"
              value="Winterwear"
              onChange={toggleSubCategory}
            />
            Winterwear
          </p>
        </div>
      </div>

      {/* Right Products Section */}
      <div className="all-collections flex-grow-1">
        <div className="d-flex justify-content-between align-items-center my-3">
          <Title text1={"ALL"} text2={"COLLECTION"} />

          <select onChange={(e)=>setSortType(e.target.value)} className="form-select w-auto mx-5">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-to-high">Sort by: Low to High</option>
            <option value="high-to-low">Sort by: High to Low</option>
          </select>
        </div>

        <div>
          <Row style={{ marginTop: "0px" }} className="w-100 mx-0 gap-2">
            {filterProducts.map((item, index) => (
              <Col key={item._id || index} style={{ width: "35vh" }}>
                <ProductItem
                  _id={item._id}
                  image={ item.image}
                  name={item.name}
                  price={item.price}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Collection;
