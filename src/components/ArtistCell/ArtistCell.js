import React from 'react';
import './ArtistCell.css';

const ArtistCell = (props) => (
	<div className="artist-cell" onClick={props.onClick}>
		{props.artist}
	</div>
);

export default ArtistCell;
