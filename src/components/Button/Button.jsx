import styles from './Button.module.css';

function Button({ action, onClick }) {
	
	return (
		<button onClick={onClick} className={`${styles.button} ${styles.accent}`}>{action}</button>
	);
}
  
export default Button;