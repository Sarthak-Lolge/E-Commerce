import { useContext, useEffect ,useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";

function Cart() {
  const { products, currency, cartItems, updateQuantity,navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
 
  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const size in cartItems[items]) {
        if (cartItems[items][size] > 0) {
          tempData.push({
            _id: items,
            size: size,
            quantity: cartItems[items][size],
          });
        }
      }
    }
    // console.log(tempData);
    setCartData(tempData);
  }, [cartItems]);
  return (
    <div className="my-5  px-5">
      <div className="d-flex justify-content-start">
        <Title text1={"YOUR"} text2={"PRODUCTS"} />
      </div>
      {/* our products  */}
      <div>
        {cartData.map((items, index) => {
          const productData = products.find(
            (product) => product._id === items._id
          );
          return (
            <>
              <hr></hr>
              <div key={index} className="d-flex justify-content-between">
                <div className="d-flex">
                  <img
                    src={productData.image[0]}
                    alt="image"
                    style={{ width: "18vh" }}
                  />
                  <div className="ms-5">
                    <p>{productData.name}</p>
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p>
                      Size :{" "}
                      <span
                        className="px-2 py-1"
                        style={{ backgroundColor: "#D7D7D7" }}
                      >
                        {items.size}
                      </span>
                    </p>
                  </div>
                </div>

                <input
                  type="number"
                  min={1}
                  className="h-25 mt-5 "
                  style={{ width: "10vh" }}
                  defaultValue={items.quantity}
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity({
                          itemId: items._id,
                          size: items.size,
                          quantity: Number(e.target.value),
                        })
                  }
                />
                <img
                  src={assets.bin_icon}
                  style={{ width: "30px", height: "30px", cursor: "pointer" }}
                  alt=""
                  className="me-5 mt-5 "
                  onClick={() =>
                    updateQuantity({
                      itemId: items._id,
                      size: items.size,
                      quantity: 0,
                    })
                  }
                />
              </div>
            </>
          );
        })}
      </div>

      <div className=" ">
        <CartTotal />
        <div className="d-flex justify-content-end  me-5 mt-3">
          <button 
          onClick={()=>navigate('/place-order')}
          className="bg-dark text-light px-3 py-2 me-2  ">
            PROCCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
