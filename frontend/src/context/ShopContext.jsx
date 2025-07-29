/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const ShopContextProvide = (props) =>{

  const currency = "$";
  const delivery_fees = 20;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({})
 const navigate = useNavigate();


  async function addToCart(itemId, size) {
    if(!size){
      toast.error("Select product size")
      return;
    }

    let cartData = structuredClone(cartItems)
    if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size] +=1;
      }
      else{
        cartData[itemId][size] = 1;
      }
    }
    else{
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    } 
    setCartItems(cartData)
  }

  // useEffect(()=>{
  //   console.log(cartItems)
  // },[cartItems])

  // count of products when we press addToCart
  function getCartCount(){
    let totalCount = 0;
    for(const item in cartItems){
      for(const size in cartItems[item]){
        try{
          if(cartItems[item][size]> 0 ){
             totalCount += cartItems[item][size];
          }
        }catch(error){
          console.log(error);
        }
      }
    }
    return totalCount
  }

  // update quantity logic 
  async function updateQuantity({itemId,size,quantity}) {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData)
  }


  // Total amount logic
   function getCartAmount() {
    let totalCartAmount = 0;
    for(const item in cartItems){
      let productInfo = products.find((product)=> product._id === item)
      for(const amount in cartItems[item]){
        try {
          if(cartItems[item][amount] > 0){
            totalCartAmount += productInfo.price * cartItems[item][amount]
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
    return totalCartAmount
  }


  const value={
    products, currency, delivery_fees, search, setSearch, showSearch, setShowSearch, cartItems,addToCart,getCartCount,updateQuantity,getCartAmount,navigate
  }

  return(
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvide