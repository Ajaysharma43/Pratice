import { Drawer } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import context from "../../../Context/CartContext/Cartcontext";
import { ToastContainer, toast } from "react-toastify";
import { updateQuantity } from "../CartFunctions/CartFunctions";

const Drawers = ({ Drawerstate, togglestate }) => {
  const { Cart, setcart } = useContext(context);
  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(() => {
    const calculateTotal = () => {
      const total = Cart.reduce(
        (sum, item) => sum + item.ProductPrice * item.ProductQuantity,
        0
      );
      setTotalPrice(total);
    };
    calculateTotal();
  }, [Cart]);

  const Quantity = (index, operation) => {
    const result = updateQuantity(index, operation,Cart)
    setcart(result)
  }

  const RemoveCart = (index) => {
    const updatedCart = Cart.filter((_, i) => i !== index); // Remove the item at the given index
    setcart(updatedCart);
  }


  return (
    <Drawer open={Drawerstate} onClose={() => togglestate()} anchor="right">
      <div className="p-6 w-80 bg-gray-50 h-full">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Your Cart</h1>

        {Cart.length > 0 ? (
          <>
            {Cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center mb-6 border-b pb-4 border-gray-200"
              >
                <img
                  src={item.ProductImage[0]}
                  alt={item.ProductName}
                  className="w-16 h-16 object-cover rounded-md shadow-sm"
                />
                <div className="ml-4 flex-grow">
                  <h2 className="text-lg font-medium text-gray-700">
                    {item.ProductName}
                  </h2>
                  <p className="text-sm text-gray-500">${item.ProductPrice}</p>
                  <div className="flex items-center mt-3">
                    <button
                      onClick={() => Quantity(index, "decrease")}
                      className="px-2 py-1 bg-gray-100 text-gray-700 border border-gray-300 rounded-l-md hover:bg-gray-200 transition-all"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-t border-b text-gray-800">
                      {item.ProductQuantity}
                    </span>
                    <button
                      onClick={() => Quantity(index, "increase")}
                      className="px-2 py-1 bg-gray-100 text-gray-700 border border-gray-300 rounded-r-md hover:bg-gray-200 transition-all"
                    >
                      +
                    </button>
                    <button
                      onClick={() => RemoveCart(index)}
                      className="ml-2 px-3 py-1 text-sm font-medium bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-700">
                Total:{" "}
                <span className="text-green-600 font-bold">
                  ${totalPrice.toFixed(2)}
                </span>
              </h2>
            </div>
          </>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}

        <button
          onClick={() => togglestate()}
          className="w-full mt-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-all"
        >
          Close
        </button>
      </div>
    </Drawer>
  );
};

export default Drawers;
