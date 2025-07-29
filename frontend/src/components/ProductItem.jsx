import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function ProductItem({ _id, image, name, price }) {
  const { currency } = useContext(ShopContext);
  // console.log(_id)
  return (
    <Link
      key={_id}
      className="px-auto  text-decoration-none "
      style={{ width: "40vh" }}
      to={`product/${_id}`}
    >
      <div className="px-auto">
        <img style={{ width: "35vh" }} src={image[0]} alt="" />
        <p className="text-dark">{name}</p>
        <p className="text-dark">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
}

export default ProductItem;
