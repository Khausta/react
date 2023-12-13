import styles from './Input.module.css';
import classNames from 'classnames';

function Input({ placeholder, icon }) {
	const icons = [
		{
			name: 'search',
			path: '/search-normal.svg'
		}
	];

	// const inputCl = styles['input'] + (icon ? ' ' + styles['input_with-icon'] : '');
	const iconSrc = icon ? icons.find(el => el.name == icon).path : null;

	if (icon) {
		return (
			<>
				<div className={styles['input__wrapper']}>
					<img className={styles['input_icon']} src={iconSrc} alt="search icon" />
					<input className={classNames(styles['input'],{
						[styles['input_with-icon']] : icon 
					})} type='text' placeholder={placeholder}>
					</input>
				</div>
			</>
		);
	}
	return (
		<input className={styles['input']} type='text' placeholder={placeholder}>
		</input>
		
	);
}
  
export default Input;