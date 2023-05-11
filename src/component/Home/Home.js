import React, { Fragment, useEffect } from "react";
import "./Home.css";
// import logo from "../../images/logo.png";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import {useSelector, useDispatch} from "react-redux"
<img src={<book />} alt="" />

const producst = {
    name: "Tshirt",
    images: [{ url:"https://tse2.mm.bing.net/th?id=OIP.MFkjKALdNDzXLrJLu1KlRAHaIw&pid=Api&P=0" }] ,
    price: "$25",
    _id: "raviraj",
};
const Home = () => {
    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.products);
 
    useEffect(() => {
        dispatch(getProduct());

    }, [dispatch]);
    return (


        <Fragment>
            <MetaData title="HOME" />
          <h1>home</h1>

            <div className="homes ">

                <h2 className="homeHeading">FEATURED PRODUCTS</h2>
            </div>
  
            <div className="container" id="container">
              {products && products.map((product) => <Product product={product}/>)}
              <Product product={producst}/>
            </div>
        </Fragment>

    )
};
export default Home;