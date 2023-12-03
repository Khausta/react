import CardButton from '../CardButton/CardButton';
import './JournalItemAddButton.css';

function JournalItemAddButton() {

	return (
		<CardButton className="journal-item-add">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
				<path d="M10 4.96265V16.6293" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M4.16669 10.796H15.8334" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
			Новое восмопинание
		</CardButton>
	);
}
  
export default JournalItemAddButton;