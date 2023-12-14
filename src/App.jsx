import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import JournalItemAddButton from './components/JournalItemAddButton/JournalItemAddButton';
import JournalList from './components/JournalList/JournalList';
import Header from './components/Header/Header';
import Body from './layouts/Body/Body';
import JournalForm from './components/JournalForm/JournalForm';
import { useEffect, useState } from 'react';

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

function App() {

	const [items, setItems] = useState([]);

	//запрос на сервер

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('data'));
		if (data) { 
			setItems(data.map(item => ({
				...item,
				date: new Date(item.date)
			})));
		} 
	}, []);  //если оставить пустым объект, 
	// то мы говорим useEffect, что зависимостей 
	// нет и эта функция(эффект) не будет боьще никогда 
	// триггеритсяпосле первого рендера, но затриггерится
	//  первый раз тк компонент появился
	

	//если оставить без useEffect, то приложение упадет с ошибкой "to many re-renders",
	//так как при проверке localStorage изменяется состояние 
	// и происходит сразу же ре-рендер и снова проверка localStorage 
	// и снова ре-рендер и дальше код выполняться не будет
	// const data = JSON.parse(localStorage.getItem('data'));
	// if (data) { 
	// 	setItems(data.map(item => ({
	// 		...item,
	// 		date: new Date(item.date)
	// 	})));
	// }

	useEffect(() => {
		if (items.length) {
			console.log('Запись');
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
	);
}

export default App;
