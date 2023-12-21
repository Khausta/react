import { forwardRef } from 'react';
import styles from './Button.module.css';

export const Button = forwardRef(function Button({ action, onClick }, ref) {
	
	return (
		<button ref={ref} onClick={onClick} className={`${styles.button} ${styles.accent}`}>{action}</button>
	);
});


  
export default Button;