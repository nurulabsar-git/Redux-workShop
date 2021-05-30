import React from 'react';
import './SubProduct.css';
const SubProduct = (props) => {
    console.log(props);
    const {title, image, id} = props.datum;
    return (
        <div className="product-card mb-3 mx-2 p-3">
           <div>
               <img src={image} alt="" className="fluid"  style={{width: '22%'}}/>
           </div>
        </div>
    );
};

export default SubProduct;