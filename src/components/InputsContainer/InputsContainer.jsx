import './InputsContainer.css';

function InputContainer({children, className}) {
	const cl = 'input-container' + (className ? ' ' + className : ' ');
    
	return (
		<div className={cl}>
			{children}
		</div>
	);
}


export default InputContainer;