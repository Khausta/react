import './Input.css';

function Input({ placeholder, icon }) {
	const icons = [
		{
			name: 'search',
			path: '/search-normal.svg'
		}
	];

	const inputCl = 'input' + (icon ? ' ' + 'input_with-icon' : '');
	const iconSrc = icon ? icons.find(el => el.name == icon).path : null;

	if (icon) {
		return (
			<>
				<div className='input__wrapper'>
					<img className='input_icon' src={iconSrc} alt="search icon" />
					<input className={inputCl} type='text' placeholder={placeholder}>
					</input>
				</div>
			</>
		);
	}
	return (
		<input className='input' type='text' placeholder={placeholder}>
		</input>
		
	);
}
  
export default Input;