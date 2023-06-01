import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './ProductsInfo.css';
import formatCurrency from '../../utils/formatCurrency';
import useBagStore from '../../stores/BagStores';

function ProductsInfo() {
	const { title, price, image, description } = useParams();
	const {inc} = useBagStore();

	return (
		<section className="productInfo-card">      
			<img
				src={image}
				alt="product"
				className="cardInfo__image"
			/>

			<div className="cardInfo__infos">
				<h2 className="cardInfo__title">{title}</h2>
				<h2 className="cardInfo__price">{formatCurrency(price,'BRL')}</h2>
				<h2 className="cardInfo__description">{description}</h2>
				<Link to="/">
					<button type="submit" className="buttonInfo__add-cart" onClick={inc}>
						Adicionar ao carrinho 
					</button>				
				</Link>	
			</div>				
		</section>
	);
}

export default ProductsInfo;
