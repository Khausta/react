import styles from './InputsContainer.module.css';
import classNames from 'classnames';

function InputContainer({children, className}) {
    
	return (
		<div className={classNames(styles['input-container'], {
			[styles[className]] : className
		})}>
			{children}
		</div>
	);
}


export default InputContainer;