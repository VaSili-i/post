import React, {useState} from 'react';
import Input from '../UI/input/Input.jsx';
import Button from 'react-bootstrap/Button';

const Auth = function(){
	const [name, setName] = useState()
	const [password, setPassword] = useState()
	return(
		<form className='formRegistration'>
			<Input value={name} placeholder='name'
			 onChange={(e) => {setName(e.target.value)}}/>
			<Input value={password} placeholder='password'
			 onChange={(e) => {setPassword(e.target.value)}}/>
			 <Button variant="outline-success">Send</Button>
		</form>
		)
}

export default Auth