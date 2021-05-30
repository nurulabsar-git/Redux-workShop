import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProducts } from '../../../Redux/Actions/Actions';
import SubProduct from '../SubProduct/SubProduct';
import './Product.css'
const Product = () => {
   
 const products = useSelector((state) => state.allProducts.products);
console.log(products)
 const dispatch = useDispatch();
const fetchProducts = async() => {
    const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch(error => {
        console.log(error);
    })
    dispatch(setProducts(response.data));
    
};

useEffect(() => {
    fetchProducts();
}, [])


    return (
        <div className="product-container">
         {
             products.map(datum => <SubProduct datum={datum}></SubProduct>)
         }
        </div>
    );
};

export default Product;