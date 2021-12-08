import React from 'react'
import {Route, Routes} from 'react-router-dom';
import {publicRouter} from '../router.js';
import PostIdPage from '../pages/PostILPage.jsx'

const AppRouter = function(){
	
	return(
		<Routes>
			{publicRouter.map(({path, Element}) =>
				<Route key={path} path={path} element={<Element/>} exact/>
				)}

				<Route exact path='/:id' element= <PostIdPage/> />
		</Routes>
	)
}
export default AppRouter