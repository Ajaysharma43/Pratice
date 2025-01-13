import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import {
  Cart_InitialState,
  Cart_Reducer,
} from "../../Reducer/Ecommerce_Reducer/Ecommerce_Reducer";
import {
  CartData,
  CartData_Reducer,
} from "../../Reducer/Ecommerce_Reducer/Ecommerce_CartData";
import Drawers from "../Drawer/Drawer";
import context from "../../../Context/CartContext/Cartcontext";
import { Link } from "react-router-dom";

const Data = () => {
  const [products, setProducts] = useState([]);
  const [Cart, setcart] = useState([]);
  const [Drawerstate, setdrawerstate] = useState(false);
  const [state, dispatch] = useReducer(Cart_Reducer, Cart_InitialState);
  const [cartstate, cartdispatch] = useReducer(CartData_Reducer, CartData);

  useEffect(() => {
    const getdata = async () => {
      const Response = await axios.get(
        "https://api.escuelajs.co/api/v1/products?offset=6&limit=10"
      );
      setProducts(Response.data);
      console.log(products);
    };
    getdata();
  }, []);

  useEffect(() => {
    setcart(state);
  }, [state]);

  const handleAddToCart = (product) => {
    const Existed = Cart.find(
      (existedproduct) => existedproduct.ProductId === product.id
    );
    if (Existed) {
      console.log("already existed");
    } else {
      const newproduct = {
        ProductId: product.id,
        ProductName: product.title,
        ProductPrice: product.price,
        ProductImage: product.images,
        ProductQuantity: 1
      };

      dispatch({
        type: "ADD_PRODUCT",
        payload: newproduct,
      });
    }
  };

  const togglestate = () => {
    setdrawerstate(!Drawerstate);
  };

  return (
    <context.Provider value={{ Cart, setcart }}>
      {/* Drawer Component */}
      <Drawers Drawerstate={Drawerstate} togglestate={togglestate} />

      {/* Open Cart Button */}
      <div className="flex justify-end p-6 bg-gray-100">
      <button
          onClick={togglestate}
          className="py-2 px-8 text-lg font-medium text-gray-800 bg-white rounded-md border border-gray-300 hover:bg-gray-100 hover:shadow-md transition-all duration-300 focus:ring focus:ring-gray-200"
        >
          🛒 Open Cart
        </button> 
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-gray-50">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <Link to={`/product/${item.id}`}>
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-full h-60 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h1 className="text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-200">
                {item.title}
              </h1>
              <p className="text-gray-600 text-sm mt-1 truncate">
                {item.description}
              </p>
              <p className="text-green-500 font-semibold mt-3">${item.price}</p>
              </div>
              </Link>
              <button
                onClick={() => handleAddToCart(item)}
                className="mt-4 py-2 w-full bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all duration-200 focus:ring focus:ring-gray-500"
              >
                ➕ Add to Cart
              </button>
            
          </div>
        ))}
      </div>
    </context.Provider>
  );
};

export default Data;
