import './Button.css';

function Button({ action }) {
	
	return (
		<button className='button accent'>{action}</button>
	);
}
  
export default Button;