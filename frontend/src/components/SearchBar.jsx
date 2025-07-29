import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection") && showSearch) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location.pathname, showSearch]);

  return showSearch && visible ? (
    <div
      className="d-flex justify-content-center py-3 "
      style={{ backgroundColor: "#f0ededff" }}
    >
      <div
        className="d-flex align-items-center rounded-4  overflow-hidden border border-dark"
        style={{ width: "400px", backgroundColor: "#fff" }}
      >
        <input
          type="text"
          placeholder="Search"
          className="form-control border-0 ps-3"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          style={{ height: "40px", borderRadius: 0, boxShadow: "none" }}
        />
        <img
          src={assets.search_icon}
          alt="search"
          className="p-2"
          style={{
            height: "40px",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
        />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        alt=""
        className="h-50 mt-2 ms-4 cursor-pointer "
        style={{ cursor: "pointer" }}
      />
    </div>
  ) : null;
}

export default SearchBar;
