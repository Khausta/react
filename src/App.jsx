import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Paragraph from './components/Paragraph/Paragraph';

function App() {

	const data = [
		{
			title: 'Поиск',
			text: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.',
			action: 'Искать'
		}
	];

	return (
		<>
			<Header 
				title={data[0].title}
			/>
			<Paragraph
				text={data[0].text}
			/>
			<Button
				action={data[0].action}
			/>
		</>
	);
}

export default App;
