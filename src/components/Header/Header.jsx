import { useState } from 'react';
import Button from '../Button/Button';
import SelectUser from '../SelectUser/SelectUser';
import styles from './Header.module.css';

const logos = ['/logo.svg', '/vite.svg' ];

function Header() {

	const [logoIndex, setLogoIndex] = useState(0);

	const toggleLogo = () => {
		// setLogoIndex(state => state === 0 ? 1 : 0);
		setLogoIndex(state => Number(!state));
	};

	return (
		<>
			<img className={styles.logo} src={logos[logoIndex]} alt="Personal Journal Logotype" />
			<SelectUser/>
			<Button onClick={toggleLogo}>Change logo</Button>
		</>
		
	);
}

export default Header;