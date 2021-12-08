import React from 'react';
import cl from './select.module.css'

const Select = function({options, optionsBack}){

	return(
		<select className={cl.select} onChange={(e) =>{optionsBack(e.target.value)}}>
			<option disabled>Find about</option>
			{options.map(option => 
			<option key={option} value={option}>{option}</option>
			)}
		</select>
		)
}

export default Select