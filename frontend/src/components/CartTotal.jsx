import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

function CartTotal() {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  return (
    <div className="d-flex  justify-content-end ">
      <div className="me-5">
        <div className="me-5">
          <Title text1={"CART"} text2={"TOTAL"} />
        </div>
        <div className="d-flex justify-content-center ">
          <table className="mt-3 ">
            <tr>
              <td className="border ps-2 pe-5 py-2 ">SubTotal : </td>
              <td className="border px-5 py-2">
                {currency}
                {getCartAmount()}.00
              </td>
            </tr>
            <tr>
              <td className="border  ps-2  pe-5 py-2">Shipping Fees : </td>
              <td className="border px-5  py-2">
                {currency}
                {delivery_fee}.00
              </td>
            </tr>
            <tr>
              <td className="border ps-2 pe-5 py-2">Total :</td>
              <td className="border px-5 py-2">
                {currency}
                {Number(getCartAmount()) === 0
                  ? 0
                  : Number(getCartAmount()) + Number(delivery_fee || 0)}.00
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
