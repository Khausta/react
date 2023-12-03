import './Button.css';
import { useState } from 'react';

function Button() {
	const [text, setText] = useState('Save');
	console.log('Rerender');
	const clicked = () => { 
		setText('Close');
		setText(t => t + '!');
		console.log('Hello!');
		console.log(text);
	};

	return (
		<button onClick={clicked} className='button accent'>{text}</button>
	);
}
  
export default Button;