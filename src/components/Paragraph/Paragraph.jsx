import styles from './Paragraph.module.css';

function Paragraph({ text }) {

	return (
		<>
			<p className={styles.text}>{text}</p>
		</>
	);
}
  
export default Paragraph;