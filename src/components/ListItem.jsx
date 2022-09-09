/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import './ListItem.css';

export function ListItem(data) {
	return (
		<p>
			{data.artist ? data.artist : 'Artist unknown'}:{' '}
			<span>"{data.title}"</span>
		</p>
	);
}
