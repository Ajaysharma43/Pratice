import { Drawer } from "@mui/material";
import { useContext } from "react";
import context from "../../../Context/CartContext/Cartcontext";

const Drawers = ({ Drawerstate, togglestate }) => {
  const { Cart } = useContext(context); // Accessing Cart from context

  console.log("Cart data:", Cart);

  return (
    <Drawer
      open={Drawerstate}
      onClose={() => togglestate()}
      anchor="right" // Drawer opens from the right
    >
      <div className="p-4 w-80">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

        {Cart.length > 0 ? (
          Cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center mb-4 border-b pb-4"
            >
              <img
                src={item.ProductImage[0]} // Assuming ProductImage is an array
                alt={item.ProductName}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{item.ProductName}</h2>
                <p className="text-green-600 font-semibold">${item.ProductPrice}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">Your cart is empty.</p>
        )}

        <button
          onClick={() => togglestate()}
          className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
        >
          Close
        </button>
      </div>
    </Drawer>
  );
};

export default Drawers;
