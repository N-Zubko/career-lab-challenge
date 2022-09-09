/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import './App.css';
import { useState } from 'react';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { List } from './List';
import { Footer } from './Footer';

export function App() {
	const [data, setData] = useState('');

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/uitls/api.js
		searchArtworks(query).then((json) => {
			setData(json.data);
		});
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />
			<List data={data} />
			<Footer />
		</div>
	);
}
