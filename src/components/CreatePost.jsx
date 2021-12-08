import React, {useState} from 'react';
import Input from '../UI/input/Input.jsx';
import Button from 'react-bootstrap/Button';
import MyModal from '../UI/MyModal/MyModal.jsx';


const CreatePost = function({createPost}){
	const [form, setForm] = useState({id: 5, title: '', body: ''});

	function createPosts(e){
		setForm({...form, id: Math.random()})
		console.log(form)
		createPost(form);
		setForm({title: '', body: '', id: ''})
		e.preventDefault();
		setCreateStatus(false)
	}
	function changeTrue(falss){
		setCreateStatus(falss)
	}

	let [createStatus, setCreateStatus] = useState(false)
	return(
		<React.Fragment>
		<Button type="button" onClick={() => {setCreateStatus(true)}}
		className='createPost' variant="outline-success"
		 value="CreatePost">Create post</Button>
			<MyModal createTrue={createStatus} changeTrue={changeTrue}>
			<form className="formFlex">
					<Input onChange={(e) =>{setForm({...form, title: e.target.value})}}
				 	value={form.title} placeholder='name' autoFocus/>
					<Input onChange={(e) =>{setForm({...form, body: e.target.value})}}
					 value={form.body} placeholder='content'/>
					<Button className="align-self-end" 
					onClick={(e) => {createPosts(e)}}>Send</Button>

			</form>
		</MyModal>
	</React.Fragment>
		)
}

export default CreatePost