import './App.css';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import JournalItemAddButton from './components/JournalItemAddButton/JournalItemAddButton';
import JournalList from './components/JournalList/JournalList';
import Header from './components/Header/Header';
import Body from './layouts/Body/Body';
import JournalForm from './components/JournalForm/JournalForm';
import Button from './components/Button/Button';

function App() {

	const data = [
		{
			title: 'Подготовка к обновлению курсов',
			text: 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем. У горных походов свои секреты, приобщиться к которым можно только в команде единомышленников и профессионалов.',
			date: new Date()
		},
		{
			title: 'Поход в горы',
			text: 'Различают альпинизм и горный туризм. Если в альпинизме главная цель – покорение вершины, то горный туризм – это длительное путешествие в горах, связанное с прохождением многочисленных препятствий. В нем огромную роль играет физическая подготовка путешественников, их выносливость, способность переносить большие нагрузки и тяжести в условиях высокогорья.',
			date: new Date()
		}
	];

	return (
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalItemAddButton>
				</JournalItemAddButton>
				<JournalList>
					{/* {[<Button>1</Button>, <Button>2</Button>]} */}
					{data.map(el => (
						<CardButton>
							<JournalItem
								title={el.title}
								date={el.date}
								text={el.text}
							/>
						</CardButton>
					))}
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm/>
			</Body>
		</div>
	);
}

export default App;
