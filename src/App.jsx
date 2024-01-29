// import { useEffect, useState } from 'react';
import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import JournalItemAddButton from './components/JournalItemAddButton/JournalItemAddButton';
import JournalList from './components/JournalList/JournalList';
import Header from './components/Header/Header';
import Body from './layouts/Body/Body';
import JournalForm from './components/JournalForm/JournalForm';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import { UserContextProvider } from './context/user.context';
import { useState } from 'react';

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
	const [selectedItem, setSelectedItem] = useState(null);

	//здесь может быть запрос на сервер

	const addItem = item => {
		if (!item.id) {
			setItems( [...mapItems(items), {
				...item,
				date: new Date(item.date),
				id: items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1
			}]);
		} else { 
			setItems([...mapItems(items).map(i => {
				if (i.id === item.id) {
					return {
						...item
					};
				} 
				return i;
			})]);
		}
	};


	const deleteItem = (id) => {
		setItems([...items.filter(i => i.id !== id)]);
	};
	

	return (
		<UserContextProvider>
			<div className='app'>
				<LeftPanel>
					<Header/>
					<JournalItemAddButton clearForm={() => setSelectedItem(null)} />
					<JournalList items={mapItems(items)} setItem={setSelectedItem}>
					</JournalList>
				</LeftPanel>
				<Body>
					<JournalForm onSubmit={addItem} data={selectedItem} onDelete={deleteItem} />
				</Body>
			</div>	
		</UserContextProvider>
	);
}

export default App;
