import styles from './Profile.module.css';
import Input from '../Input/index';
import Button from '../Button/index';
import { useEffect, useState } from 'react';


function Profile({ onSubmit }) {

	const [userValidState, setUserValidState] = useState(true);

	useEffect(() => {
		let timerInvalid;
		if(!userValidState) {
			timerInvalid = setTimeout(() => {
				setUserValidState(true);
			}, 2000);
		}
		return () => {
			clearTimeout(timerInvalid);
		};

	}, [userValidState]);
    
	const addProfileItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProp = Object.fromEntries(formData);
		console.log(formProp);
		let isUserNameValid = true;
		if (!formProp.userName?.trim().length) {
			setUserValidState(false);
			isUserNameValid = false;
			console.log(isUserNameValid);
		} else {
			setUserValidState(true);
			isUserNameValid = true;
		}
		if (!isUserNameValid) return;

		onSubmit(formProp);

	};

	return (
		<form className={styles['profile']} onSubmit={addProfileItem}>
			<Input placeholder={'Введите имя'} name={'userName'} isValid={userValidState}>
			</Input>
			<Button action={'Войти'}></Button>
		</form>
	);
}


export default Profile;