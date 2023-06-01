import React from 'react';
import './Products.css';
import ProductCard from '../ProductCard/ProductCard';
import ProductsList from './classProducts';
import useFilterStore from '../../stores/FilterStores';

function Products() {	
	const { filter } = useFilterStore();
	const productList = new ProductsList();
		
	return (
		<section className="products container">			
			{productList.getAll()
				.filter((product) => {
					if (filter !== '') {
						return product.title.toLowerCase() === filter.toLowerCase();
					}
					return true;
				})
				.map((product) => (
					<ProductCard key={product.id} data={product} />
				))}
		</section>
	);
}

export default Products;
