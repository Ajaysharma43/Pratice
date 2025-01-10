import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
    const { slug } = useParams(); // Destructure to get slug directly
    const [Single, setSingle] = useState(null); // Initializing with null instead of undefined
    
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
        return <div>Loading...</div>; // Loading state if data isn't ready
    }

    return (
        <div>
            <section>
                {/* Ensure Single.images is available before trying to access it */}
                <img 
                    src={Single.images[0]} 
                    alt="Image not loaded" 
                    className="h-[416px]"
                />
            </section>

            <section>
                <h1>{Single.title}</h1>
                <p>{Single.description}</p>
                <h1>${Single.price}</h1>
            </section>
        </div>
    );
};

export default Product;
