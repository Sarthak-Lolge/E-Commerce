
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { useState } from "react";

function PlaceOrder() {
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const navigate = useNavigate();
  return (
    <div className="container my-5">
      <div className="row">
        {/* Delivery Info */}
        <div className="col-md-7 mb-4">
          <div className="d-flex justify-content-start">

          <Title text1="DELIVERY " text2="INFORMATION" />
          </div>
          <form className="mt-4">
            <div className="d-flex gap-3 my-2">
              <input type="text" placeholder="First Name" className="ps-2 py-2" />
              <input type="text" placeholder="Last Name" className="ps-2 py-2 " />
            </div>
            <input
              type="email"
              placeholder="Email"
              className=" ps-2 my-2 py-2" 
              style={{ width: "54vh" }}
            />
            <input
              type="text"
              placeholder="Street"
              className=" ps-2 my-2 py-2"
              style={{ width: "54vh" }}
            />

            <div className="d-flex gap-3 my-2">
              <input type="text" placeholder="City" className="ps-2 py-2" />
              <input type="text" placeholder="State" className="ps-2 py-2 " />
            </div>
            <div className="d-flex gap-3 my-2">
              <input type="number" placeholder="ZipCode" className="ps-2 py-2 " />
              <input type="text" placeholder="Country" className="ps-2 py-2 " />
            </div>
            <input
              type="text"
              placeholder="Mobile number"
              className=" ps-2 my-2 py-2"
              style={{ width: "54vh" }}
            />
          </form>
        </div>

        {/* Cart + Payment */}
        <div className="col-md-5">
          {/* Cart Summary */}

          <div className="d-flex justify-content-start mb-4">
            <CartTotal />
          </div>

          {/* Payment Method */}
          <div className="d-flex justify-content-start ">

          <Title text1="PAYMENT " text2="METHOD" />
          </div>
          <div className="d-flex flex-wrap gap-3 mb-4 mt-2">
            {/* Stripe */}
            <label
              className={`border px-2 py-1 rounded d-flex align-items-center gap-2 ${
                paymentMethod === "stripe" ? "border-dark" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "stripe"}
                onChange={() => setPaymentMethod("stripe")}
              />
              <img
                src={assets.stripe_logo}
                alt="Stripe"
                style={{ width: "70px" }}
              />
            </label>

            {/* Razorpay */}
            <label
              className={`border px-3 py-2 rounded d-flex align-items-center gap-2 ${
                paymentMethod === "razorpay" ? "border-dark" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "razorpay"}
                onChange={() => setPaymentMethod("razorpay")}
              />
              <img
                src={assets.razorpay_logo}
                alt="Razorpay"
                style={{ width: "100px" }}
              />
            </label>

            {/* COD */}
            <label
              className={`border px-3 py-2 rounded d-flex align-items-center gap-2 ${
                paymentMethod === "cod" ? "border-dark" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />
              <span className="text-success fs-4"></span>{" "}
              <span>CASH ON DELIVERY</span>
            </label>
          </div>

          {/* Place Order Button */}
          <button onClick={()=>navigate('/orders')} className="btn btn-dark w-100">PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
