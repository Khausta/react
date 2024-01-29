import './JournalItem.css';

function JournalItem({ title, date, text }) {
	const formattedDate = new Intl.DateTimeFormat('ru-Ru').format(date);

	return (
		<>
			<h2 className="journal-item__header">{title}</h2>
			<h2 className="journal-item__body">
				<div className="journal-item__date">{formattedDate}</div>
				<div className="journal-item__text">{text}</div>
			</h2>
		</>
	);
}
  
export default JournalItem;