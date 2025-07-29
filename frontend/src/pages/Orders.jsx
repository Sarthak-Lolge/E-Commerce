import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

function Orders() {
  const { products, currency, } = useContext(ShopContext);

  return (
    <div className="my-5 px-5">
      <div className="d-flex justify-content-start">
        <Title text1="MY" text2="ORDERS" />
      </div>

      <div>
        {products.slice(1, 4).map((item, index) => (
          <div key={index}>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <img
                  src={item.image[0]}
                  alt="product"
                  style={{ width: "18vh", objectFit: "cover" }}
                />
                <div className="ms-5">
                  <p className="fw-bold">{item.name}</p>
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <div className="d-flex gap-4">
                    <p>
                    Size: M
                    {/* <span
                      className="px-2 py-1"
                      style={{ backgroundColor: "#D7D7D7", borderRadius: "4px" }}
                    >
                      {item.size}
                    </span> */}
                  </p>
                  <p>Quantity : 1</p>
                  </div>
                  <p>Date : <span>15th july 2025</span></p>

                </div>
              </div>
              {/* Add delivery status, order date, or total if needed */}
              <div className="my-5">
                <p>Ready to ship</p>
              </div>

              <button className="border bg-transparent p-2 my-5 me-5">Track Order</button>

            </div>
              
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
