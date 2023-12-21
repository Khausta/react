import styles from './Profile.module.css';
import Input from '../Input/index';
import Button from '../Button/index';
import { useEffect, useRef, useState } from 'react';


function Profile({ onSubmit }) {

	const [value, setValue] = useState('');
	const [isValid, setIsValid] = useState(true);
	const userNameRef = useRef();
	const buttonRef = useRef();


	useEffect(() => {
		let timerInvalid;
		if(!isValid) {
			timerInvalid = setTimeout(() => {
				setIsValid(true);
			}, 2000);
		}
		return () => {
			clearTimeout(timerInvalid);
		};
	}, [isValid]);
    
	const addProfileItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProp = Object.fromEntries(formData);
		let isUserNameValid = true;
		if (!value.trim().length) {
			isUserNameValid = false;
			setIsValid(false);
		} else {
			isUserNameValid = true;
			setIsValid(true);
		}
		if (!isUserNameValid) return;
		onSubmit(formProp);
		setValue('');
	};

	const onChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<form className={styles['profile']} onSubmit={addProfileItem}>
			<Input ref={userNameRef} placeholder={'Введите имя'} name={'userName'} isValid={isValid} onChange={onChange} value={value}>
			</Input>
			<Button ref={buttonRef} action={'Войти'}></Button>
		</form>
	);
}


export default Profile;