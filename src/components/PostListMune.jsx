import React from 'react';
import {getArrNumber} from '../utils/pagesMultiply.js';



const ListMune = function({posts, page, changePage}){
	let arrPage = getArrNumber(posts, 17)
	console.log(page)
	return(
		<div
		style={{display: 'flex', flexDiraction: 'row', justifyContent: 'space-around'}}
		>
	{arrPage.map(item => 
		<span className={item == page ? 'pageMenu': "focusPage"}
		onClick={() => {changePage(item)}}
		>{item}</span>
		)}
	</div>
)
}

export default ListMune