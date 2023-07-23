import React, { useEffect, useState } from "react";
import NavBar from "../Compunents/NavBar";
import "../Style/Home.css";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import Footer from "../Compunents/Footer";


const Home = () => {
    // const [products, setProducts] = useState([]);
    
    // useEffect(() => {
    //     // Fetch data from the API using Axios
    //     axios
    //       .get("https://fakestoreapi.com/products")
    //       .then((response) => {
    //         setProducts(response.data);
    //         console.log('dataaaaaaaaa',setProducts);
    //       })
    //       .catch((error) => {
    //         console.error("Error fetching data:", error);
    //       });
    //   }, []);
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showMore, setShowMore] = useState(false);
    
  useEffect(() => {
    // Fetch data from the API using Axios
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setVisibleProducts(response.data.slice(0, 10)); // Show only 10 products initially
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setVisibleProducts(filteredProducts.slice(0, 10)); // Show only 10 filtered products initially
  }, [searchTerm, products]);

  const handleShowMore = () => {
    // Show the remaining products when clicking on the "More" button
    setVisibleProducts(products);
    setShowMore(true);
  };
  return (
    <div>
      <NavBar />
      <div className="bg-image w-full h-[60vh] flex justify-center items-center">
        <div className=" flex flex-col gap-y-4">
          <h2 className="text-white text-xl text-center font-semibold">
            Search properties for sale in Pakistan
          </h2>
          <div className="flex gap-x-4 items-center justify-center">
            <button
              type="button"
              className="border-2 border-white text-white hover:bg-green-500 hover:border-none w-28 py-1 rounded-sm font-semibold"
            >
              Buy
            </button>
            <button
              type="button"
              className="border-2 border-white text-white hover:bg-green-500 hover:border-none w-28 py-1 rounded-sm font-semibold"
            >
              Rent
            </button>
          </div>
          <div className="flex gap-x-4  justify-center">
            <div className="flex items-center justify-between px-2 rounded-sm bg-white">
              <select name="cars" id="cars" className="outline-none">
                <option value="volvo">Karach</option>
                <option value="saab">Islam abad</option>
                <option value="mercedes">Mardan</option>
                <option value="audi">Lahore</option>
              </select>
            </div>
            <div className="flex items-center justify-between px-2 rounded-sm bg-white">
              <input
               type="text"
    className="outline-none px-2 py-2 rounded-sm"
    placeholder="Search..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
              />
              <AiOutlineSearch className="text-xl" />
            </div>
            <button
              type="button"
              className="border-2 border-white text-white w-28 py-1 rounded-sm font-semibold"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-4 gap-4 justify-center ">
        {/* Map the products data and display each product's information */}
        {visibleProducts.map((product) => (
          <div key={product.id} className="product-card border w-[20%] py-3 rounded-md  ">
            <div className="flex gap-x-4 items-center justify-center">
            <img src={product.image} alt={product.title} className="product-image w-16 h-16" />
            <p className="product-price">${product.price}</p>
          
            </div>
            <h3 className="product-title text-center ">{product.title}</h3>
            {/* You can add more product details here */}
          </div>
        ))}

      </div>
      {!showMore && products.length > 10 && (
        <div className="flex justify-end px-5 py-3">
          <button
            type="button"
            className="px-4 py-1 border bg-green-500 text-white font-semibold flex justify-end"
            onClick={handleShowMore}
          >
            More
          </button>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Home;
