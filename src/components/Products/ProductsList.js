import React from 'react';
import ProductCard from './ProductCard';
import './products.css';

const ProductsList = ({ products }) => {
	return (
		<div className='products-container'>
			{products.length > 0 &&
				products.map((product) => (
					<ProductCard key={product.name} product={product} />
				))}
		</div>
	);
};

export default ProductsList;
