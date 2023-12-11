import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import JournalItemAddButton from './components/JournalItemAddButton/JournalItemAddButton';
import JournalList from './components/JournalList/JournalList';
import Header from './components/Header/Header';
import Body from './layouts/Body/Body';
import JournalForm from './components/JournalForm/JournalForm';
import { useState } from 'react';

const INITIAL_DATA = [
	// {
	// 	id: 1,
	// 	title: 'Подготовка к обновлению курсов',
	// 	text: 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем. У горных походов свои секреты, приобщиться к которым можно только в команде единомышленников и профессионалов.',
	// 	date: new Date()
	// },
	// {
	// 	id: 2,
	// 	title: 'Поход в горы',
	// 	text: 'Различают альпинизм и горный туризм. Если в альпинизме главная цель – покорение вершины, то горный туризм – это длительное путешествие в горах, связанное с прохождением многочисленных препятствий. В нем огромную роль играет физическая подготовка путешественников, их выносливость, способность переносить большие нагрузки и тяжести в условиях высокогорья.',
	// 	date: new Date()
	// }
];

function App() {

	const [items, setItems] = useState(INITIAL_DATA);

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
					{/* можно через тернарный оператор ? */}

					{/* можно через логические операторы */}
					{/* {items.length === 0 && <p>Записей нет</p>}
					{items.length > 0 && items.sort(sortItems).map(el => (
						<CardButton key={el.id}>
							<JournalItem
								title={el.title}
								date={el.date}
								text={el.text}
							/>
						</CardButton>
					))} */}
					
					{/* можно серез отдельное выражение */}
					{/* {list} */}

					{/* можно в компоненте пропиcать логику и использовать ключ состояние {items} */}
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem} />
			</Body>
		</div>
	);
}

export default App;
