import { useCallback, useState } from 'react';
import Button from '../Button/Button';
import SelectUser from '../SelectUser/SelectUser';
import Logo from '../Logo/LOgo';

const logos = ['/logo.svg', '/vite.svg' ];

function Header() {

	const [logoIndex, setLogoIndex] = useState(0);
	console.log('Header');

	const toggleLogo = useCallback(() => { //оборачиваем фцункцию, запоминаем результат, если входные параметры не меняются
		setLogoIndex(state => Number(!state));
	}, []);

	return (
		<>
			<Logo image={logos[0]}/>
			<SelectUser/>
			<Button onClick={toggleLogo}>Change logo</Button>
		</>
		
	);
}

export default Header;