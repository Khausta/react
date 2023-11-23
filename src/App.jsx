import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';

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
		<>
			<h1>Header</h1> 
			<p>Paragraph</p>
			<Button/>
			<CardButton>
        New memories
			</CardButton>
			<CardButton>
				<JournalItem
					title={data[0].title}
					date={data[0].date}
					text={data[0].text}
				/>
			</CardButton>
			<CardButton>
				<JournalItem
					title={data[1].title}
					date={data[1].date}
					text={data[1].text}
				/>
			</CardButton>
		</>
	);
}

export default App;
