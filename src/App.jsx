import './App.css';
import Button from './components/Button/index';
import Header from '/src/components/Header/index';
import Input from './components/Input/index';
import InputContainer from './components/InputsContainer/index';
import NavigationPanel from './layouts/NavigationPanel/index';
import Paragraph from './components/Paragraph/index';
import Body from './layouts/Body/index';
import CardGrid from './components/CardGrid/index';
import Profile from './components/Profile/index';
import { useEffect, useState } from 'react';


function App() {

	const [profiles, setProfiles] = useState([]);
	const [currentUser, setCurrentUser] = useState('');

	const data = [
		{
			title: 'Поиск',
			text: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.',
			action: 'Искать'
		},
		{
			title: 'Вход',
			text: 'Ваше имя',
			action: 'Войти в профиль'
		}
	];

	const movies = [
		{
			id: 1,
			title: 'Black Widow',
			cover: 'covers/black-widow.png',
			rating: 123
		},
		{
			id: 2,
			title: 'Black Widow',
			cover: 'covers/chang-chi.png',
			rating: 100
		},
		{
			id: 3,
			title: 'Loki',
			cover: 'covers/loki.png',
			rating: 500
		},
		{
			id: 4,
			title: 'How I Met Your Mother',
			cover: 'covers/how-i-met-your-mother.png',
			rating: 130
		},
		{
			id: 5,
			title: 'Money Heist',
			cover: 'covers/money-heist.png',
			rating: 100
		},
		{
			id: 6,
			title: 'Friends',
			cover: 'covers/friends.png',
			rating: 100
		},
		{
			id: 7,
			title: 'The Big Bang Theory',
			cover: 'covers/the-big-bang-theory.png',
			rating: 230
		},
		{
			id: 8,
			title: 'Two And a Half Men',
			cover: 'covers/two-and-a-half-men.png',
			rating: 230
		}
	];

	useEffect(() => {
		const res = JSON.parse(localStorage.getItem('users'));
		if (res) {
			setProfiles( res.map(item => ({
				...item
			})));
		}
	}, []);

	useEffect(() => {
		if(profiles.length) {
			localStorage.setItem('users', JSON.stringify(profiles));
		}
	}, [profiles]);

	const addProfile = (item) => {
		setCurrentUser(item.userName);
		const isExistUser = profiles.find(el => el.userName === item.userName);
		console.log(item.userName);
		if (!isExistUser) {
			setProfiles(oldProfiles => ([...oldProfiles, {
				userName: item.userName,
				userId: oldProfiles.length > 0 ? Math.max(...oldProfiles.map(el => el.userId)) + 1 : 1
			}]));
		}
		console.log(profiles);
	};



	const logOut = () => {
		console.log('hello');
		if (currentUser) {
			console.log(currentUser);
			setCurrentUser('');
			console.log(currentUser);
		} 
		// return;
	};



	return (
		<>
			<NavigationPanel isLogin={currentUser} onClick={logOut}>
				
			</NavigationPanel>
			<Body>
				<Header 
					title={data[0].title}
				/>
				<Paragraph
					text={data[0].text}
				/>
				<InputContainer>
					<Input
						icon={'search'}
						placeholder={'Введите название'}	
					/>
					<Button
						onClick={() => console.log('Search')}
						action={data[0].action}
					/>
				</InputContainer>
				<Header 
					title={data[1].title}
				/>
				<Profile onSubmit={addProfile}></Profile>
				<CardGrid items={movies} />
			</Body>
			
		</>
	);
}

export default App;
