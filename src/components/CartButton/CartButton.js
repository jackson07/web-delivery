import React from 'react';
import { BsFillHandbagFill } from 'react-icons/bs';
import './CartButton.css';
import useBagStore from '../../stores/BagStores';

function CartButton() {
	const {bag} = useBagStore();

	return ( 
		<button type="button" className="cart_button">
			<BsFillHandbagFill/>
			<span className="cart_status">{bag}</span>
		</button>
	);
}

export default CartButton;
