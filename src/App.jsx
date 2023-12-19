import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import JournalItemAddButton from './components/JournalItemAddButton/JournalItemAddButton';
import JournalList from './components/JournalList/JournalList';
import Header from './components/Header/Header';
import Body from './layouts/Body/Body';
import JournalForm from './components/JournalForm/JournalForm';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import { UserContext } from './context/user.context';

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

	const [items, setItems] = useLocalStorage('data');

	//запрос на сервер

	const addItem = item => {
		console.log(items);
		setItems( [...mapItems(items), {
			text: item.text,
			title: item.title,
			date: new Date(item.date),
			id: items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1
		}]);
	};

	

	return (
		<UserContext.Provider value={{ userId: 1 }}>
			<div className='app'>
				<LeftPanel>
					<Header />
					<JournalItemAddButton>
					</JournalItemAddButton>
					<JournalList items={mapItems(items)}>
					</JournalList>
				</LeftPanel>
				<Body>
					<JournalForm onSubmit={addItem} />
				</Body>
			</div>	
		</UserContext.Provider>
	);
}

export default App;
