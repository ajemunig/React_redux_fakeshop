import React, {useEffect} from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import ProductComponent from './productComponent';
import {setProducts} from '../redux/actions/productActions';
import './styles.css'

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => { 
    const response = await axios.get(`https://fakestoreapi.com/products`) 
    dispatch(setProducts(response.data));
    }
    useEffect(()=>{fetchProducts()}, []);
    console.log("Products:" , products);
    return (<div >
    <ProductComponent/>
    </div>) 
}

export default ProductListing;