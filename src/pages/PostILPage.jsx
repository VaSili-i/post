import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getById, fetchComents} from '../API/PostFetching.js';

const PostIdPage = function(){
	const [post, setPost] = useState({})
	const params = useParams();
	const [coment, setComent] = useState([])

	useEffect(() => {
	getById(params.id.slice(1))
	.then(res => setPost(res))
	},[params.id])

	useEffect(() => {
		fetchComents(params.id.slice(1)).
		then(res => setComent(res))
	}, [params.id])
	return(
		<div>
		<h2> it is id{params.id}</h2>
		<h3>{post.title}</h3>
		<p>{post.body}</p>
		<h4>Comments</h4>
		{!coment[0] ? 
			<div>
			No comments
			</div>
			:
			coment.map(comen => 
			<div style={{marginTop: '7px'}}>
			<h5>{comen.email}</h5>
			<p> {comen.body}</p>
			</div>
		)}
		</div>
		)
}

export default PostIdPage