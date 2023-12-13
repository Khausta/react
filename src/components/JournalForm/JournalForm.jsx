import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useState } from 'react';


function JournalForm({ onSubmit }) {

	const [formValidState, setFormValidState] = useState({
		title: true,
		date: true,
		text: true
	});

	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
		let isFormValid = true;
		if(!formProps.title?.trim().length) {
			setFormValidState(state => ({...state, title: false}));
			isFormValid = false;
		} else {
			setFormValidState(state => ({...state, title: true}));
		}
		if(!formProps.text?.trim().length) {
			setFormValidState(state => ({...state, text: false}));
			isFormValid = false;
		} else {
			setFormValidState(state => ({...state, text: true}));
		}
		if(!formProps.date) {
			setFormValidState(state => ({...state, date: false}));
			isFormValid = false;
		} else {
			setFormValidState(state => ({...state, date: true}));
		}
		if(!isFormValid) {
			return;
		}
		onSubmit(formProps);
	};

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}> 
			<input type='text' name="title" className={`${styles['input']} ${formValidState.title ? '' : 'invalid'}`}  /> 
			<input type='date' name="date" className={`${styles['input']} ${formValidState.date ? '' : 'invalid'}`}  /> 
			<input type='text' name="tag" className={styles.input} /> 
			<textarea name="text" id="" cols="30" rows="10" className={`${styles['input']} ${formValidState.text ? '' : 'invalid'}`}  ></textarea>
			<Button text="Сохранить" />
		</form>
	);
}

export default JournalForm;