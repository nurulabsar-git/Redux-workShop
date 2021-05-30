import React from 'react';
import { useHistory } from 'react-router';
import './SubProduct.css';
const SubProduct = (props) => {
    console.log(props);
    const {title, image, id} = props.datum;
    const history = useHistory();
    const handleBtn = (serviceId) =>{
      history.push(`/details/${serviceId}`);
    }
    return (
        <div className="product-card mb-3 mx-2 p-3">
           <div>
               <img src={image} alt="" className="fluid"  style={{width: '22%'}}/>
           </div>

           <div>
               <button onClick={()=> {handleBtn(id)}}>Buy Now</button>
           </div>
        </div>
    );
};

export default SubProduct;