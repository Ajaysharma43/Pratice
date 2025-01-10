import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { Cart_InitialState, Cart_Reducer } from "../../Reducer/Ecommerce_Reducer/Ecommerce_Reducer";
import { CartData, CartData_Reducer } from "../../Reducer/Ecommerce_Reducer/Ecommerce_CartData";
import Drawers from "../Drawer/Drawer";
import context from "../../../Context/CartContext/Cartcontext";

const Data = () => {
  const [products, setProducts] = useState([]);
  const [Cart, setcart] = useState([]);
  const [Drawerstate, setdrawerstate] = useState(false);
  const [state, dispatch] = useReducer(Cart_Reducer, Cart_InitialState);
  const [cartstate, cartdispatch] = useReducer(CartData_Reducer, CartData);

  useEffect(() => {
    const getdata = async () => {
      const Response = await axios.get("https://api.escuelajs.co/api/v1/products?offset=4&limit=10");
      setProducts(Response.data);
      console.log(products);
    };
    getdata();
  }, []);

  useEffect(() => {
    setcart(state);
    console.log("Cart Updated:", Cart);
  }, [state]);

  const handleAddToCart = (product) => {
    const Existed = Cart.find((existedproduct)=>existedproduct.ProductId === product.id)
    if(Existed)
    {
        console.log("already existed");
        
    }
    else
    {
        const newproduct = {
            ProductId: product.id,
            ProductName: product.title,
            ProductPrice: product.price,
            ProductImage: product.images,
          };
      
          console.log("Product Added:", newproduct);
      
          dispatch({
            type: "ADD_PRODUCT",
            payload: newproduct,
          });
    }
    
  };

  const togglestate = () => {
    console.log("Drawer toggled");
    setdrawerstate(!Drawerstate);
  };

  return (
    <context.Provider value={{ Cart, setcart }}>
      {/* Drawer Component */}
      <Drawers Drawerstate={Drawerstate} togglestate={togglestate} />

      {/* Open Cart Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={togglestate}
          className="py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200 ease-in-out"
        >
          Open Cart
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-full h-64 object-cover transition-all duration-300 ease-in-out hover:opacity-80"
            />
            <div className="p-6 flex flex-col justify-between">
              <h1 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-all duration-200 ease-in-out">
                {item.title}
              </h1>
              <p className="text-lg text-green-600 mt-2 font-semibold">${item.price}</p>
              <button
                onClick={() => handleAddToCart(item)}
                className="mt-4 py-2 bg-blue-500 text-white rounded-md w-full hover:bg-blue-600 transition-all duration-200 ease-in-out focus:outline-none"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </context.Provider>
  );
};

export default Data;
