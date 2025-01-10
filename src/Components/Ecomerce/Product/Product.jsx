import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Drawers from "../Drawer/Drawer";
import context from "../../../Context/CartContext/Cartcontext";

const Product = () => {
    const { slug } = useParams(); // Destructure to get slug directly
    const [Single, setSingle] = useState(null); // Initializing with null instead of undefined
    const [Drawerstate, setdrawerstate] = useState(false);
    const [Cart, setcart] = useState([]);
    
    useEffect(() => {
        const SingleProduct = async () => {
            try {
                const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${slug}`);
                setSingle(response.data);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };
        SingleProduct();
    }, [slug]); // Add slug as a dependency to re-fetch when it changes

    // Check if Single data is available before rendering
    if (!Single) {
        return <div className="flex justify-center items-center h-screen text-lg">Loading...</div>; // Loading state if data isn't ready
    }

    const togglestate = () => {
        setdrawerstate(!Drawerstate);
      };

    return (
        <>
        <context.Provider value={{ Cart, setcart }}>
        <Drawers Drawerstate={Drawerstate} togglestate={togglestate} />
        <button
          onClick={togglestate}
          className="py-2 px-8 text-lg font-medium text-gray-800 bg-white rounded-md border border-gray-300 hover:bg-gray-100 hover:shadow-md transition-all duration-300 focus:ring focus:ring-gray-200"
        >
          🛒 Open Cart
        </button>
        <div className="flex justify-center items-center py-12 px-4">
            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12 bg-white  rounded-lg overflow-hidden w-full max-w-5xl p-6">
                {/* Product Image */}
                <section className="flex-shrink-0">
                    <img 
                        src={Single.images[0]} 
                        alt="Product Image" 
                        className="h-[416px] w-[416px] object-cover rounded-lg shadow-md mx-auto lg:mx-0" 
                    />
                </section>

                {/* Product Details */}
                <section className="w-full">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-4">{Single.title}</h1>
                    <p className="text-lg text-gray-600 mb-4">{Single.description}</p>
                    <h2 className="text-2xl text-green-600 font-bold mb-4">${Single.price}</h2>

                    {/* Add to Cart Button */}
                    <button className="mt-6 py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200 ease-in-out focus:ring focus:ring-offset-1 ring-blue-700">
                        Add to Cart
                    </button>
                </section>
            </div>
        </div>
        </context.Provider>
        </>
    );
};

export default Product;
