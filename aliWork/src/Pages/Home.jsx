import React, { useEffect, useState } from "react";
import NavBar from "../Compunents/NavBar";
import "../Style/Home.css";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import Footer from "../Compunents/Footer";
import Checkbox from '@mui/material/Checkbox';

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
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const productsPerPage = 5; // Number of products to show per page
  const totalPages = Math.ceil(products.length / productsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    // Calculate the range of products to display based on the current page
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const visibleProducts = products.slice(startIndex, endIndex);
    setVisibleProducts(visibleProducts);
  }, [currentPage, products]);
  return (
    <div>
      <NavBar />
      <div className="bg-image opacity-70 w-full h-[100vh] flex items-center justify-center ">
        {/* <div className=" flex flex-col gap-y-4">
          <h2 className="text-white text-xl text-center font-semibold">
            Search properties for sale in Pakistan
          </h2>
          <div className="flex gap-x-5 items-center justify-center">
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
          <div className="flex gap-x-5  justify-center">
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
        </div> */}
        <form className="p-4 flex flex-col gap-y-2 text-opacity-100 ">
          <div className="w-full ">
            <div className="grid grid-cols-4 w-full gap-x-5">
            <div className="flex flex-col w-full gap-y-1">
              <label className="text-white px-1 font-semibold">Object Type</label>
              <select className="py-1 px-2 outline-none rounded-md">
                <option>House</option>
                <option>Apartement</option>

                <option>Office</option>
              </select>
            </div>
            <div className="flex flex-col w-full  gap-y-1">
            <label className="text-white font-semibold ">Document Type</label>
              <input type="text" className="px-2 py-1 rounded-md outline-none"></input>
            </div>
            <div className="flex flex-col w-full  gap-y-1">
              <label className="text-white font-semibold">Type Of Building</label>
              <select className="py-1 px-2 outline-none rounded-md">
                <option>Resedentail Building</option>
                <option>Commercial Building</option>

                
              </select>
            </div>
            <div className="flex flex-col w-full  gap-y-1">
            <label className="text-white font-semibold ">Credit Condition</label>
              <input type="text" className="px-2 py-1 rounded-md outline-none"></input>
            </div>
            </div>
            
          </div>
          <div className="w-full ">
            <div className="grid grid-cols-4 w-full gap-x-5">
            <div className="flex flex-col w-full gap-y-1">
              <label className="text-white px-1 font-semibold">Type Ad</label>
              <select className="py-1 px-2 outline-none rounded-md">
                <option>Sale</option>
                <option>Rent</option>

                
              </select>
            </div>
            <div className="flex flex-col w-full  gap-y-1">
            <label className="text-white font-semibold ">Number of Room</label>
              <input type="text" className="px-2 py-1 rounded-md outline-none"></input>
            </div>
            <div className="flex flex-col w-full  gap-y-1">
              <label className="text-white font-semibold">Seller Type</label>
              <select className="py-1 px-2 outline-none rounded-md">
                <option>Individual</option>
                <option>Agencies</option>

              </select>
            </div>
            <div className="flex flex-col w-full  gap-y-1">
            <label className="text-white font-semibold ">Editing</label>
              <input type="text" className="px-2 py-1 rounded-md outline-none"></input>
            </div>
            </div>
            
          </div>
          <div className="w-full ">
            <div className="grid grid-cols-4 w-full gap-x-5 items-center">
           
            <div className="flex flex-col w-full  gap-y-1">
            <label className="text-white font-semibold ">City</label>
              <input type="text" className="px-2 py-1 rounded-md outline-none"></input>
            </div>
            <div className="flex flex-col w-full  gap-y-1">
            <label className="text-white font-semibold ">Floor</label>
              <input type="text" className="px-2 py-1 rounded-md outline-none"></input>
            </div>
            <div className="flex flex-col w-full  gap-y-1">
            <label className="text-white font-semibold ">District</label>
              <input type="text" className="px-2 py-1 rounded-md outline-none"></input>
            </div>
            <div className=" w-full  gap-y-1  mt-7 flex gap-x-1 items-center">
            <Checkbox {...label} />
            <label className="text-white">Not the top floor</label>
            </div>
            </div>
            
          </div>
          <div className="w-full ">
            <div className="grid grid-cols-4 w-full gap-x-5 items-center">
           
            <div className="flex flex-col w-full  gap-y-1">
            <label className="text-white font-semibold ">Metro</label>
              <input type="text" className="px-2 py-1 rounded-md outline-none"></input>
            </div>
            <div className="flex flex-col w-full  gap-y-1">
            <label className="text-white font-semibold ">Number Floor Of The Building</label>
              <input type="text" className="px-2 py-1 rounded-md outline-none"></input>
            </div>
            <div className="flex flex-col w-full  gap-y-1">
            <label className="text-white font-semibold ">Township</label>
              <input type="text" className="px-2 py-1 rounded-md outline-none"></input>
            </div>
            <div className="flex flex-col w-full  gap-y-1">
            <label className="text-white font-semibold ">Price</label>
              <input type="text" className="px-2 py-1 rounded-md outline-none"></input>
            </div>
            </div>
            
          </div>
          <div className="w-full ">
            <div className="grid grid-cols-4 w-full gap-x-5 items-center">
           
            <div className="flex flex-col w-full  gap-y-1">
            <label className="text-white font-semibold ">Home Addition</label>
              <input type="text" className="px-2 py-1 rounded-md outline-none"></input>
            </div>
            <div className="flex flex-col w-full  gap-y-1">
            <label className="text-white font-semibold ">{`Aria(m2)`}</label>
              <input type="text" className="px-2 py-1 rounded-md outline-none"></input>
            </div>
            <div className="flex flex-col w-full  gap-y-1">
            <label className="text-white font-semibold ">Township</label>
              <input type="text" className="px-2 py-1 rounded-md outline-none"></input>
            </div>
            <div className="flex flex-col w-full  gap-y-1">
            <label className="text-white font-semibold ">Price</label>
              <input type="text" className="px-2 py-1 rounded-md outline-none"></input>
            </div>
            </div>
            
          </div>
        </form>
      </div>
      <div className="flex flex-wrap mt-4 gap-4 justify-center ">
        {/* Map the products data and display each product's information */}
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="product-card border w-[20%] py-3 rounded-md  "
          >
            <div className="flex gap-x-5 items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="product-image w-12 h-12"
              />
              <p className="product-price">${product.price}</p>
            </div>
            <h3 className="product-title text-center ">{product.title.substring(1,20)}</h3>
            {/* You can add more product details here */}
          </div>
        ))}
      </div>
      <div className="flex justify-center py-4 border ">
        <ul className="pagination flex gap-x-4 ">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <li
              key={pageNumber}
              className={`page-item ${pageNumber === currentPage ? 'active flex items-center justify-center bg-green-300 w-12 h-12 rounded-full' : 'flex items-center justify-center w-12 h-12 '}`}
              onClick={() => handlePageChange(pageNumber)}
            >
              <button className="page-link">{pageNumber}</button>
            </li>
          ))}
        </ul>
      </div>
   
      <Footer />
    </div>
  );
};

export default Home;
