import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useEffect, useReducer } from 'react';
import classNames from 'classnames';
import { INITIAL_STATE, formReducer } from './JournalForm.state';



function JournalForm({ onSubmit }) {

	const [ formState, dispatchForm ] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;

	useEffect(() => {
		let timerId;
		if (!isValid.title || !isValid.date || !isValid.text) {
			timerId = setTimeout(() => {
				console.log('Очистка состояния');
				dispatchForm({ type: 'RESET_VALIDITY' });
			}, 2000);
		}

		return () => {  //эта функуция вызовтся при unmount компонента или при следующем вызове эффекта 
			clearTimeout(timerId);  //очистка состояния
		};
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(values);
			console.log('Очистка формы');
			dispatchForm({ type: 'CLEAR_FORM' });
		}
	}, [isFormReadyToSubmit]);

	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
		dispatchForm({ type: 'SUBMIT', payload: formProps});
	};

	const changeValues = (e) => {
		dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value}});
		// // console.log(e.target.value);
		// if (e.target.name === 'title') {
		// 	values.title = e.target.value;
		// }
		// if (e.target.name === 'date') {
		// 	values.date = e.target.value;
		// }
		// if (e.target.name === 'text') {
		// 	values.text = e.target.value;
		// }
		// if (e.target.name === 'tag') {
		// 	values.tag = e.target.value;
		// }
		
		
		console.log(values);
	};

	return (
		<form className={styles['journal-form']}  onSubmit={addJournalItem}> 
			<div>
				<input onChange={changeValues} value={values.title} type='text' name="title" className={classNames(styles['input-title'], {
					[styles['invalid']]: !isValid.title
				})}  /> 
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="date" className={styles['form-label']}>
					<img src="/calendar.svg" alt="calendar icon" />
					<span>Дата</span>
				</label>
				<input onChange={changeValues} value={values.date} type='date' name="date" id='date' className={classNames(styles['input'], {
					[styles['invalid']]: !isValid.date
				})}  /> 
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="tag" className={styles['form-label']}>
					<img src="/folder.svg" alt="folder icon" />
					<span>Метки</span>
				</label>
				<input onChange={changeValues} value={values.tag} type='text' name="tag" id='tag' className={styles.input} /> 
			</div>
			
			<textarea onChange={changeValues} value={values.text} name="text" id="" cols="30" rows="10" className={classNames(styles['input'], {
				[styles['invalid']]: !isValid.text
			})}  ></textarea>
			<Button text="Сохранить" />
		</form>
	);
}

export default JournalForm;