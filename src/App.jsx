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
import { useState } from 'react';
import { useLocalstorage } from './hooks/use-localstorage.hook';

function mapItems(items) {
	if (!items) {
		return [];
	}
	console.log(items);
	return items.map(i => ({
		...i
	}));
}

function App() {

	const [profiles, setProfiles] = useLocalstorage('users');
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

	const addProfile = (item) => {
		console.log(profiles);
		const isExistUser = profiles.find(el => el.userName === item.userName);
		if (!isExistUser) {
			setProfiles([...mapItems(profiles), {
				userName: item.userName,
				userId: profiles.length > 0 ? Math.max(...profiles.map(el => el.userId)) + 1 : 1
			}]);
		}
		//add name of user to state, which is login 
		setCurrentUser( item.userName);
	};



	const logOut = () => {
		if (currentUser) {
			setCurrentUser('');
		} 
		
	};

	return (
		<>
			<NavigationPanel  
				onClick={logOut} 
				isLogin={currentUser} />
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
