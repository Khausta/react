import './App.css';
import Button from './components/Button/index';
import Header from '/src/components/Header/index';
import Input from './components/Input/index';
import InputContainer from './components/InputsContainer/index';
import NavigationPanel from './layouts/NavigationPanel/index';
import Paragraph from './components/Paragraph/index';
import MenuItem from './components/MenuItem/index';
import FavoritesMenuItem from './components/FavoritesMenuItem/index';
import Body from './layouts/Body/index';
import CardGrid from './components/CardGrid/index';


function App() {

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

	return (
		<>
			<NavigationPanel>
				<MenuItem
					href='#'
					text='Поиск фильмов'
				/>
				<FavoritesMenuItem
					href='#'
					count={3}
				/>
				<MenuItem
					href='#'
					text='Войти'
					icon='login'
				/>
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
				<CardGrid items={movies} />
			</Body>
			
		</>
	);
}

export default App;
