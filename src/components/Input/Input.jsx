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

	const iconSrc = icon ? icons.find(el => el.name == icon).path : null;



	if (icon) {
		return (
			<>
				<div  className={styles['input__wrapper']}>
					<img className={styles['input_icon']} src={iconSrc} alt="search icon" />
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