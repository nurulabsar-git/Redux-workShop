import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { setProducts } from '../../../Redux/Actions/Actions';

const ProductDetails = () => {
    const {serviceId} = useParams()
    console.log(serviceId);

    const certainProduct = useSelector((state) => state.allProducts.products);
    console.log(certainProduct);
    const dispatch = useDispatch();
    const fetchProducts = async() => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch(error => {
            console.log(error);
        })
        dispatch(setProducts(response.data));
        const compareWithServiceId = certainProduct.find(datum => datum.id === serviceId)
         console.log(compareWithServiceId);
        
    };
    useEffect(() => {
        fetchProducts();
    }, [])

     
    return (
        <div style={{margin: '200px'}}>
            <h4>Service details </h4>
            <p>{serviceId}</p>
            {
                certainProduct?.map(datum => <p>{datum.id}</p>)
            }
        </div>
    );
};

export default ProductDetails;