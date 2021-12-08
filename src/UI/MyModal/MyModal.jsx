import React, {useEffect} from 'react';
//import cl from './MyModal.model.css';


const MyModal = function({children, createTrue, changeTrue}){
	let elemModel = document.getElementById('elemModel')

	return(
		<React.Fragment>
		{createTrue ?
		<div className='box'
		 onClick={(e) => {changeTrue(false)}}>
			<div onClick={(e) => {e.stopPropagation()}} className="box-insade">
			{children}
			</div>
		</div>
		:
		null}
		</React.Fragment>
	)
}

export default MyModal