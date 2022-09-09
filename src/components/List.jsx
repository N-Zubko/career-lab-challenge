/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import './List.css';
import { ListItem } from './ListItem';

export function List(props) {
	return (
		<>
			{props.data &&
				props.data.map((item) => (
					<ListItem
						key={item.id}
						artist={item.artist_title}
						title={item.title}
					/>
				))}
		</>
	);
}
