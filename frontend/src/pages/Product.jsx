import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";
// import Title from "../components/Title";

function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  async function fetchProductData() {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);
        return null;
      }
    });
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="my-5  px-5">
      <div
        className="w-100 d-flex px-5 justify-content-center  "
        style={{ height: "80vh", width: "90%" }}
      >
        {/* product images */}
        <div className="d-flex flex-column  " style={{ width: "70vh" }}>
          <div className="m-1">
            <img src={image} alt="" style={{ width: "60vh", height: "60vh" }} />
          </div>

          <div className="d-flex justify-content-start flex-wrap ">
            {productData.image.map((item, index) => (
              <img
                src={item}
                onClick={() => setImage(item)}
                key={index}
                alt=""
                className="mx-1"
                style={{ width: "14vh" }}
              />
            ))}
          </div>
        </div>

        <div className=" d-flex flex-column w-50">
          <h1 className="fs-4 mt-3">{productData.name}</h1>
          <div className="d-flex ">
            {Array.from({ length: 5 }, (_, i) => (
              <img
                key={i}
                src={assets.star_icon}
                alt="star"
                style={{ height: "21px" }}
              />
            ))}
            <p className="ms-2">(122)</p>
          </div>
          <p className="fs-3 mt-4">
            <b>
              {" "}
              {currency}
              {productData.price}
            </b>
          </p>
          <p className="w-75 mt-4">{productData.description}</p>

          <div>
            <p>Select Size</p>
            <div className="d-flex ">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`mx-1 px-3 py-2 ${
                    item === size ? "border border-dark" : "border-none"
                  } `}
                  style={{ border: "none" }}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button onClick={()=> addToCart(productData._id , size)} className=" bg-dark text-light w-25 py-2 mt-4">
            Add To Cart
          </button>

          <hr className="me-5" />
          <p>100% Original product.</p>
          <p>Cash on delivery is available on this product.</p>
          <p>Easy return and exchange policy within 7 days.</p>
        </div>
      </div>

      {/* review and description section */}
      <div className="mt-5">
        <div className="d-flex">
          <b className="p-2 border">Description</b>
          <b className=" p-2 border">Reviews (122)</b>
        </div>
        <div className="border p-2">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.<br/> E-commerce websites
            typically display products or services along with detailed
            descriptions, images, prices, and any available variations (e.g.,
            sizes, colors). Each product usually has its own dedicated page with
            relevant information.
          </p>
        </div>
      </div>

      
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : (
    <div></div>
  );
}

export default Product;
