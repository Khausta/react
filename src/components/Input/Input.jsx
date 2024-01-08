import { forwardRef } from 'react';
import styles from './Input.module.css';
import classNames from 'classnames';

export const Input = forwardRef(function Input({ placeholder, name,  icon, isValid = true, ...props}, ref) {
	const icons = [
		{
			name: 'search',
			path: '/search-normal.svg'
		}
	];

	if (icon) {
		return (
			<>
				<div  className={styles['input__wrapper']}>
					<img className={styles['input_icon']} src={icons.find(el => el.name == icon).path} alt={icon + ' ' + 'icon'} />
					<input {...props} ref={ref} name={name} className={classNames(styles['input'],{
						[styles['input_with-icon']] : icon,
						[styles['invalid']]: !isValid 
					})} type='text' placeholder={placeholder}>
					</input>
				</div>
			</>
		);
	}
	return (
		<input {...props} ref={ref} name={name} className={classNames(styles['input'], {
			[styles['invalid']]: !isValid 
		})} type='text' placeholder={placeholder} >
		</input>
		
	);
});


  
export default Input;