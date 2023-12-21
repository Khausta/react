import { useState } from 'react';
import Button from '../Button/Button';
import SelectUser from '../SelectUser/SelectUser';
import Logo from '../Logo/LOgo';

const logos = ['/logo.svg', '/vite.svg' ];

function Header() {

	const [logoIndex, setLogoIndex] = useState(0);
	console.log('Header');

	const toggleLogo = () => {
		// setLogoIndex(state => state === 0 ? 1 : 0);
		setLogoIndex(state => Number(!state));
	};

	return (
		<>
			<Logo image={logos[0]}/>
			<SelectUser/>
			<Button onClick={toggleLogo}>Change logo</Button>
		</>
		
	);
}

export default Header;