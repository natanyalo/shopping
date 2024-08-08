import React, { useEffect, useState } from 'react';
import Items, { ProductProps } from '../items/Items';

const Products: React.FC = () => {
  const [products, setProducts] = useState<Array<ProductProps>>([]);
  const [category, setCategory] = useState<string>('Vegetable');
  const categories = ['Vegetable', 'Meat', 'Electronic Devices'];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5242/api/products/category/${category}`);
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchProduct();
  }, [category]);

  return (
    <div>
         <div>
        <label htmlFor="category-select">Choose a category:</label>
        <select id="category-select" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((p, index) => (
          <Items name={p.name} category={p.category} price={p.price} id={p.id} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Products;
