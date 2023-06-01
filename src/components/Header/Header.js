import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';
import CartButton from '../CartButton/CartButton';
import logoHeader from '../../images/logo-header.png';

export function Header(){
	return (
		<header className="header">
			<div className="container" >
				<div className="logo_img">
					<Link to="/" className="initial_ink">
						<img src={logoHeader} alt="logo" className="logo_img"></img>
						<a className="initial_page">Página Inicial</a>
					</Link>
				</div>
				<SearchBar/>
				<CartButton/>
			</div>
		</header>
	);
}

export default Header;
