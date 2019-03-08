import React from 'react';

import Card from './Card.js'
import './Card.css';

const CardList = ({cat}) => {

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