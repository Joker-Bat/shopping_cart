import React from "react";

function Product({ title, id, price, desciption, image, category }) {
  return (
    <div className='product-card'>
      <div className='badge'>Hot</div>
      <div className='product-tumb'>
        <img src={image} alt={title} style={{ width: "8rem" }} />
        <div className='product-details'>
          <span className='product-catagory'>{category}</span>
          <h4>
            <a href=''>{title}</a>
          </h4>
          <p>{desciption}</p>
          <div className='product-bottom-details'>
            <div className='product-price'>
              <small>${price}</small>
            </div>
            <div className='product-links'>
              <a href=''>
                <i className='fa fa-heart'></i>
              </a>
              <a href=''>
                <i className='fa fa-shopping-cart'></i>
              </a>
            </div>
          </div>
          <div className='btn'>Add to card</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
