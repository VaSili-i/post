import React from 'react';
import cl from './button.module.css'

const Button = function({children, ...arg}){
	return(
		<button {...arg} className={cl.buttonForm}>
			{children}
		</button>
		)
}

export default Button