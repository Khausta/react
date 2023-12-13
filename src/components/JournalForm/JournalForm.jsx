import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useState } from 'react';
import classNames from 'classnames';
import { UserContext } from '../../contexts/user.context';
import { useContext } from 'react';


function JournalForm({ onSubmit }) {

	const {userId} = useContext(UserContext);

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
			{userId}
			<div>
				<input type='text' name="title" className={classNames(styles['input-title'], {
					[styles['invalid']]: !formValidState.title
				})}  /> 
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="date" className={styles['form-label']}>
					<img src="/calendar.svg" alt="calendar icon" />
					<span>Дата</span>
				</label>
				<input type='date' name="date" id='date' className={classNames(styles['input'], {
					[styles['invalid']]: !formValidState.date
				})}  /> 
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="tag" className={styles['form-label']}>
					<img src="/folder.svg" alt="folder icon" />
					<span>Метки</span>
				</label>
				<input type='text' name="tag" id='tag' className={styles.input} /> 
			</div>
			
			<textarea name="text" id="" cols="30" rows="10" className={classNames(styles['input'], {
				[styles['invalid']]: !formValidState.text
			})}  ></textarea>
			<Button text="Сохранить" />
		</form>
			
		
	);
}

export default JournalForm;