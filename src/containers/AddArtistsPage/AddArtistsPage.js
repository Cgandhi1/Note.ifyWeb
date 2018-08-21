import React, { Component } from 'react';
import * as request from 'request';
import ArtistCell from '../../components/ArtistCell/ArtistCell';
import './AddArtistsPage.css';

class AddArtistsPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			artist: '',
			artists: [],
			myArtists: {}
		};
	}

	render() {
		return (
			<div>
				<div className="grid-container">
					<div className="searchArtist">
						<h1>Search Artists</h1>
					</div>
					<div className="myArtist">
						<h1>My Artists</h1>
					</div>
					<div className="searchArtistBar">
						<input
							type="text"
							placeholder="Search.."
							value={this.state.artist}
							onChange={this.handleChange.bind(this)}
						/>
						<button onClick={this.searchForArtists.bind(this)}>Search</button>
						<span>
							{this.state.artists.map((artist, index) => (
								<ArtistCell key={index} artist={artist} onClick={() => this.addToMyArtists(artist)} />
							))}
						</span>
					</div>
					<div className="myArtistTable">
						{Object.keys(this.state.myArtists).map((artist, index) => (
							<ArtistCell key={index} artist={artist} />
						))}
					</div>
					<div className="phoneNumber">
						<h2>Phone Number</h2>
					</div>
					<div className="phoneNumberBox" />
					<div className="saveButton">
						<h3>Save</h3>
					</div>
				</div>
			</div>
		);
	}

	handleChange(element) {
		this.setState(...this.state, {
			artist: element.target.value
		});
	}

	searchForArtists() {
		const url = `https://api.deezer.com/search?q=artist:"${this.state.artist}"`;
		request.get(url, null, (error, response, body) => {
			if (error) {
				console.log('ERROR:', error);
				throw error;
			}
			this.setState(...this.state, {
				artists: this.getUniqueArtists(JSON.parse(body))
			});
		});
		console.log('Searching for', this.state.artist);
	}

	getUniqueArtists(artistJson) {
		const artistsMap = {};
		artistJson.data.forEach((song) => {
			if (!artistsMap.hasOwnProperty(song.artist.name)) {
				artistsMap[song.artist.name] = true;
			}
		});
		return Object.keys(artistsMap);
	}

	addToMyArtists(artist) {
		const newState = Object.assign({}, this.state);
		newState.myArtists[artist] = true;
		this.setState(newState);
	}
}

export default AddArtistsPage;
