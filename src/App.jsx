import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import InputContainer from './components/InputsContainer/InputsContainer';
import NavigationPanel from './layouts/NavigationPanel/NavigationPanel';
import Paragraph from './components/Paragraph/Paragraph';
import MenuItem from './components/MenuItem/MenuItem';
import FavoritesMenuItem from './components/FavoritesMenuItem/FavoritesMenuItem';
import Body from './layouts/Body/Body';

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


				<Header 
					title={data[1].title}
				/>
				<InputContainer className={'input-container_profile'}>
					<Input
						placeholder={data[1].text}	
					/>
					<Button
						onClick={() => console.log('Войти в профиль')}
						action={data[1].action}
					/>
				</InputContainer>
			</Body>
			
		</>
	);
}

export default App;
