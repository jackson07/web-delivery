import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';
import useBagStore from '../../stores/BagStores';

function ProductCard({ data }) {
	const { price, title, image, description } = data;
	const {inc} = useBagStore();
	
	return (
		<section to="/description" className="product-card">  
			<Link to={`/description/${encodeURIComponent(title)}/${encodeURIComponent(price)}/${encodeURIComponent(image)}/${encodeURIComponent(description)}`}>
				<img
					src={image}
					alt="product"
					className="card__image"				
				/>
			</Link>
			
			<div className="card__infos">
				<h2 className="card__price">{formatCurrency(price,'BRL')}</h2>
				<h2 className="card__title">{title}</h2>
			</div>

			<button type="button" className="button__add-cart" onClick={inc}>
				<BsFillCartPlusFill />
			</button>
		</section>
	);
}

export default ProductCard;

ProductCard.propTypes = {
	data: propTypes.shape({}),
}.isRequired;
