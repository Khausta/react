import './JournalForm.css';
import { useState } from 'react';
import Button from '../Button/Button';


function JournalForm() {

	const [inputData, setInputData] = useState('');

	function inputChange(event) {
		console.log(event.target.value);
		setInputData(event.target.value);
	}

	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
	};

	return (
		<form className="journal-form" onSubmit={addJournalItem}> 
			<input type='text' name="tite" /> 
			<input type='date' name="date" /> 
			<input type='text' name="tag" value={inputData} onChange={inputChange} /> 
			<textarea name="post" id="" cols="30" rows="10"></textarea>
			<Button text="Сохранить" onClick={() => {console.log('Clicked!');}} />
		</form>
	);
}

export default JournalForm;