import React from 'react';
//import Button from '../UI/button/Button.jsx'
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const PostItem = function({post, deletePost}){
	const navigate = useNavigate();

	return(
		<div className='post-item'>
			<h5>Name:{post.id} {post.title}</h5>
			<p><i>Content: {post.body}</i></p>
			<Button onClick={() => {navigate(`/:${post.id}`)}}
			className="m-1" variant='outline-info'
			>To post</Button>

			<Button onClick={() => {deletePost(post.id)}}
			className="m-2" variant="outline-danger"
			>Delete</Button>
		</div>
		)
}

export default PostItem