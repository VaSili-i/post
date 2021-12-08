import React from 'react';
import Input from '../UI/input/Input.jsx';
import Select from '../UI/select/Select.jsx'

const FilterPosts = function({options, optionsBack, filterWord, changeFilterWord}){

	return(
		<React.Fragment>
			<Select options={options} optionsBack={optionsBack}/>
			<Input value={filterWord} 
			onChange={(e) => {changeFilterWord(e.target.value)}} placeholder="Find..."/>

		</React.Fragment>
		)
}

export default FilterPosts