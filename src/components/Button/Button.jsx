import './Button.css';

function Button({ action, onClick }) {
	
	return (
		<button onClick={onClick} className='button accent'>{action}</button>
	);
}
  
export default Button;