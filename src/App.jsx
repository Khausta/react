import { useEffect, useState } from 'react';
import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import JournalItemAddButton from './components/JournalItemAddButton/JournalItemAddButton';
import JournalList from './components/JournalList/JournalList';
import Header from './components/Header/Header';
import Body from './layouts/Body/Body';
import JournalForm from './components/JournalForm/JournalForm';
// import { useState } from 'react';
// import { UserContextProvider } from './contexts/user.context';

// const INITIAL_DATA = [
// 	// {
// 	// 	id: 1,
// 	// 	title: 'Подготовка к обновлению курсов',
// 	// 	text: 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем. У горных походов свои секреты, приобщиться к которым можно только в команде единомышленников и профессионалов.',
// 	// 	date: new Date()
// 	// },
// 	// {
// 	// 	id: 2,
// 	// 	title: 'Поход в горы',
// 	// 	text: 'Различают альпинизм и горный туризм. Если в альпинизме главная цель – покорение вершины, то горный туризм – это длительное путешествие в горах, связанное с прохождением многочисленных препятствий. В нем огромную роль играет физическая подготовка путешественников, их выносливость, способность переносить большие нагрузки и тяжести в условиях высокогорья.',
// 	// 	date: new Date()
// 	// }
// ];

function App() {

	// const [items, setItems] = useState(INITIAL_DATA);
	// const [userId, setUserId] = useState(1);
	const [items, setItems] = useState([]);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('data'));
		if (data) {
			setItems(data.map(item => ({
				...item,
				date: new Date(item.date)
			})));
		}
	}, []);

	useEffect(() => {
		if (items.length) {
			console.log('Запись!');
			localStorage.setItem('data', JSON.stringify(items));
		}
	}, [items]);

	const addItem = item => {
		setItems(oldItems => [...oldItems, {
			text: item.text,
			title: item.title,
			date: new Date(item.date),
			id: oldItems.length > 0 ? Math.max(...oldItems.map(item => item.id)) + 1 : 1
		}]);
	};

	

	return (
		// <UserContextProvider>
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalItemAddButton>
				</JournalItemAddButton>
				<JournalList items={items}>
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem} />
			</Body>
		</div>
		// </UserContextProvider>
	);
}

export default App;
