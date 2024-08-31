import { useState, useEffect } from "react";
import Card from "./Components/Card";
import Sign from "./Components/Sign";
import Navbar from "./Components/Navbar";
import axios from "axios";

function App() {
    const url = 'https://db-50022068137.development.catalystappsail.in/api/v1'; // API URL
    const [items, setItems] = useState([{}]); // State for the fetched items

    const getData = async () => {
        try {
            const response = await axios.get(`${url}/products`); // Fetch data from API
            const data = response.data; // Extract data from response
            console.log(data);
            setItems(data); // Set the fetched items to state
        } catch (error) {
            console.error("Error fetching data:", error); // Log errors
        }
    }

    useEffect(() => {
        getData(); // Fetch data on component mount
    }, []);

    return (
        <>
            <Navbar />
            <h1 className="text-white text-center p-3">Thalapathy Vijay Collection</h1>
            <div className="main">
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <Card 
                            key={item.id} 
                            id={item.id} 
                            imgUrl={item.imgUrl} 
                            title={item.title} 
                            director={item.director} 
                            year={item.year} 
                            rating={item.rating} 
                            runtime={item.runtime} 
                        />
                    ))
                ) : (
                    <p className="text-white text-center">No items available</p>
                )}
            </div>
            <Sign />
        </>
    );
}

export default App;
