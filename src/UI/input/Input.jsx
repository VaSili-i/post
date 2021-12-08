import React from 'react';
import cl  from './input.module.css';

const Input = function({...props}){

	return(	
		<input className={cl.inputForm} {...props} type='text'>

		</input>
		)
}

export default Input