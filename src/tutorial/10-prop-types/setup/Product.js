import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ id, image, price, name }) => {
  const url = image && image.url;
  return (
    <article className="product">
      <img src={url || defaultImage} alt="" />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};
Product.propTypes = {
  image: PropTypes.object.isRequired,

  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
Product.defaultProps = {
  image: defaultImage,

  name: "NaN",
  id: 12093810991,
};
export default Product;
