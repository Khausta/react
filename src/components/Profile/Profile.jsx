import styles from './Profile.module.css';
// import classNames from 'classnames';
import Input from '../Input/index';
import Button from '../Button/index';
import { useState } from 'react';


function Profile({ onSubmit }) {

	const [userValidState, setUserValidState] = useState({
		userName: true
	});
    
	const addProfileItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProp = Object.fromEntries(formData);
		console.log(formProp);
		let isUserNameValid = true;
		if (!formProp.userName?.trim().length) {
			// console.log();
			setUserValidState(state => ({...state, userName: false}));
			isUserNameValid = false;
		}
		if (!isUserNameValid) {
			return;
		}
		onSubmit(formProp);

	};

	return (
		<form className={styles['profile']} onSubmit={addProfileItem}>
			<Input placeholder={'Введите имя'} name={'userName'}>
			</Input>
			<Button action={'Войти'}></Button>
		</form>
	);
}


export default Profile;