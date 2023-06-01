import React from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products.js';
import ProductsInfo from './components/ProductsInfo/ProductsInfo.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div>	
				<Header/>						
				<Routes>					
					<Route path="/" element={<Products/>} />
					<Route path="/description/:title/:price/:image/:description" element={<ProductsInfo />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
