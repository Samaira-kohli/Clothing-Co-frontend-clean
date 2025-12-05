import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Components/Context/ShopContext';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

function OneProduct() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  // Convert productId to number before matching
  const product = all_product.find((item) => item.id === Number(productId));

  // Handle case where product may not exist (prevents errors on reload)
  if (!product) {
    return <h2 style={{ textAlign: 'center', padding: '250px' , fontSize: '50px'}}><b>Product not found!</b></h2>;
  }

  return <ProductDisplay product={product} />;
}

export default OneProduct;
