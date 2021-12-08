import {useMemo} from 'react'

const useSortedFilter = function(option, posts,){
	 let sortedPost = useMemo(() => {
	 	if(!option || option =='No sort'){
		return posts
	}else{
		return[...posts].sort((a, b) => a[option].localeCompare(b[option]))
	}
	},[option, posts])
	 return sortedPost
}


export const useSortedAndFilter = function(sort, option, page, posts){
	const sortedPost = useSortedFilter(option, posts);
	const activPosts = page * 17 - 17;
	let sortedAndSearchPost = useMemo(() => {
		if(!option || option =='No sort'){
			return posts
		}else{
			return sortedPost.filter(item => item[option].toLowerCase().includes(sort.toLowerCase()))
		}
	},[sort, sortedPost])
	return [...sortedAndSearchPost].splice(activPosts, 17)
}