import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import JournalItemAddButton from './components/JournalItemAddButton/JournalItemAddButton';
import JournalList from './components/JournalList/JournalList';
import Header from './components/Header/Header';
import Body from './layouts/Body/Body';
import JournalForm from './components/JournalForm/JournalForm';
import { useLocalStorage } from './hooks/use-localstorage.hook';

//удаляем INITIAL_DATE тк все перенесли в localStorage вручную
// const INITIAL_DATA = [
// 	{
// 		id: 1,
// 		title: 'Подготовка к обновлению курсов',
// 		text: 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем. У горных походов свои секреты, приобщиться к которым можно только в команде единомышленников и профессионалов.',
// 		date: new Date()
// 	},
// 	{
// 		id: 2,
// 		title: 'Поход в горы',
// 		text: 'Различают альпинизм и горный туризм. Если в альпинизме главная цель – покорение вершины, то горный туризм – это длительное путешествие в горах, связанное с прохождением многочисленных препятствий. В нем огромную роль играет физическая подготовка путешественников, их выносливость, способность переносить большие нагрузки и тяжести в условиях высокогорья.',
// 		date: new Date()
// 	}
// ];

// function mapItems(items) {
// 	if(!items) {
// 		return [];
// 	} 
// 	return items.map(i => ({
// 		...i,
// 		date: new Date(i.date)
// 	}));
// }

function mapItems(items) {
	if (!items) {
		return [];
	}

	return items.map(i => ({
		...i,
		date: new Date(i.date)
	}));
}

function App() {

	const [items, setItems] = useLocalStorage([]);

	//запрос на сервер

	const addItem = item => {
		setItems( [...mapItems(items), {
			text: item.text,
			title: item.title,
			date: new Date(item.date),
			id: items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1
		}]);
	};

	

	return (
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalItemAddButton>
				</JournalItemAddButton>
				<JournalList items={mapItems(items)}>
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem} />
			</Body>
		</div>
	);
}

export default App;
