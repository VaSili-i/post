import React from 'react';
import PostItem from '../components/PostItem.jsx';

const PostList = function({posts, deletePost}){

	return (
		<div>
			<strong style={{marginLeft: 23}}>Posts</strong>
			{posts.map(post => 
				<PostItem key={post.id} post={post} deletePost={deletePost} />
				)}
		</div>
		)
}

export default PostList