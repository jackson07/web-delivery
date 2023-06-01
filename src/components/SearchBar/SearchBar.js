import React, {useState} from 'react';
import { BsSearch } from 'react-icons/bs';
import useFilterStore from '../../stores/FilterStores';
import './SearchBar.css';

function SearchBar() {
	const [searchValue, setSearchValue] = useState('');
	const { setFilter } = useFilterStore();

	function handleSubmit(event) {
		event.preventDefault();
		setFilter(searchValue);		
	}

	function handleChange(event) {
		const value = event.target.value;
		setSearchValue(value);
	
		if (value === '') {
			setFilter('');
		}
	}

	return (
		<form className="search-bar" onSubmit={handleSubmit}>			
			<button type="submit" className="search_button">
				<BsSearch/>
			</button>
			<input 
				id="input_filter"
				type="search" 
				value={searchValue}
				placeholder="Buscar produtos" 
				className="search_input"
				onChange={handleChange}
				required
			/>			
		</form>
	);
}

export default SearchBar;
