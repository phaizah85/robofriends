import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
//import {cat} from './cat';


class App extends Component {
	constructor(){
		super();
		this.state = {
			cat : [],
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState( {searchfield: event.target.value} );
		//console.log(filteredCat);
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json()) 
		.then( users =>  this.setState({cat: users}));
		}
	

	render(){
		const filteredCat = this.state.cat.filter(catItem => {
			return catItem.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});

		return (
			<div className = "tc">
				<h1 className = 'f1'> Cat's Friends</h1>
				<SearchBox searchChange = {this.onSearchChange}/>
				<Scroll >
					<CardList cat = {filteredCat}/>
				</Scroll>
		 	</div>	
		);
	}
}

export default App;