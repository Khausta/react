import SelectUser from '../SelectUser/SelectUser';
import styles from './Header.module.css';

function Header({ changedUser }) {

	const changeUser = (e) => {
		changedUser(e.target.value);
		console.log(e.target.value);
	};

	return (
		<>
			<img className={styles.logo} src=" /logo.svg" alt="Personal Journal Logotype" />
			<SelectUser changeUser={changeUser}></SelectUser>
		</>
		
		
	);
}

export default Header;