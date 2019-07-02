import React from 'react';

import Card from './Card.js'

const CardList = ({cat}) => {
	if(true){
		throw new Error('Noooo')
	}
	return (
		 <div>
			{
			cat.map( (user, index) => {
				return (
					<Card 
					key ={index} 
					id = {user.id} 
					name = {user.name}  
					email = {user.email}
					/>
					);
				})
			}
		</div> 
		);
}

export default CardList;