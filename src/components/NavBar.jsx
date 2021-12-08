import React from 'react';
import {NavLink} from 'react-router-dom'
import Button from 'react-bootstrap/Button'


const NavBar = function(){
	return(
		<div className=' d-flex'>
		<NavLink className='m-1'
		to={'/'} exact>
			 <Button link="/" as="input" variant='outline-info'
			 type="button" value="Главная"/>
		</NavLink>

		<NavLink className='m-1'
		to={'/about'} exact> 
			 <Button as="input" variant='outline-info'
			 type="button" value="O сайте"/>
		</NavLink>

		<NavLink to={'/login'} exact> 
			 <Button className="m-1"
			 as="input" variant='outline-info'
			 type="button" value="Registration"/>
		</NavLink>
		</div>
		)
}

export default NavBar