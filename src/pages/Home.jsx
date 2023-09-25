import React, { useState } from 'react';
import { useProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import AddProductPopup from '../components/AddProductPopup';
import ApiProductList from '../components/ApiProductList';
import "./Home.css"


function Home() {
  const { products, deleteProduct } = useProductContext();
  const [isAddProductPopupOpen, setIsAddProductPopupOpen] = useState(false);

  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">Shopping App</h1>
        <button className="home-button" onClick={() => setIsAddProductPopupOpen(true)}>
          Add Product
        </button>
      </div>
      <ApiProductList />
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index}>
            <ProductCard productId={product.id} product={product} onDelete={deleteProduct} />
          </div>
        ))}
      </div>
      <AddProductPopup
        isOpen={isAddProductPopupOpen}
        onRequestClose={() => setIsAddProductPopupOpen(false)}
      />
    </div>
  );
}

export default Home;

