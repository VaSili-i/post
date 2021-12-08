export const getArrNumber = function(arr, limit){
	let page = Math.ceil(arr.length / limit);
	let pageArr = []

	for(let i = 1; i <= page; i++){
		pageArr.push(i)
	}
	return pageArr
}