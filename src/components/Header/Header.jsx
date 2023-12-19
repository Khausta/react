import SelectUser from '../SelectUser/SelectUser';
import styles from './Header.module.css';

function Header(changedUser) {

	const onChange = (e) => {
		console.log(e.target.value);
		changedUser(e.target.value);
	};

	return (
		<>
			<img className={styles.logo} src=" /logo.svg" alt="Personal Journal Logotype" />
			<SelectUser changedUser={onChange} />
		</>
		
	);
}

export default Header;