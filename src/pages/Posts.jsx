import React, {useState, useMemo, useEffect} from 'react';
import PostList from '../components/PostList.jsx';
import CreatePost from '../components/CreatePost.jsx'
import Select from '../UI/select/Select.jsx';
import {useSortedAndFilter} from '../hooks/useSortAndSearch.jsx'
import FilterPosts from '../components/PostsFilter.jsx'
import {postFetch} from '../API/PostFetching.js';
import ListMune from '../components/PostListMune.jsx';



const Posts = function(){
	console.log('render')
	const [options, setOptions] = useState(['No sort', 'title', 'body']);
	const [getOptionst, setGetOptions] = useState('')
	const [page, setPage] = useState(1)
	const [posts, setPosts] = useState([
		{id: 1, title: 'Ture', body:'It is very ture bunny'},
		{id: 2, title: 'Congratilation', body: 'My congratilation for you'},
		{id: 3, title: 'Sly', body: 'Sly fox'},
		{id: 4, title: 'Dumb', body: 'I am not dumb bunny'},
	])

	useEffect(() => {
		postFetch()
		.then(res => setPosts(res))
	},[])

	function createPost(newPost){
		setPosts([...posts, newPost])
	}


const [filterWord, setFilterWord] = useState('')

	function optionsBack(newOptions){
		setGetOptions(newOptions)
		console.log(newOptions)
	}

	function changeFilterWord(word){
		setFilterWord(word)
	}
	function changePage(page){
		setPage(page)
	}

	function deletePost(id){
		setPosts([...posts].filter(item => item.id != id))
	}


	const sortedAndFilter = useSortedAndFilter(filterWord, getOptionst, page, posts);
	return(
		<div className='post'>
		<FilterPosts options={options} optionsBack={optionsBack} 
		changeFilterWord={changeFilterWord} filterWord={filterWord}/>
		<CreatePost createPost={createPost}/>
			<PostList deletePost={deletePost} posts={sortedAndFilter}/>
			<ListMune posts={posts} changePage={changePage} page={page} />
		</div>
		)
}

export default Posts