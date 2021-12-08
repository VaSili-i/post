import axios from 'axios';

export const postFetch = async function (){
	const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
	return response.data
}

export const getById = async function (id){
	const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
	return response.data
}


export const fetchComents = async function(id){
	 const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
	 return data
}