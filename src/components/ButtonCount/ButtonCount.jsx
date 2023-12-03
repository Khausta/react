import { useState } from 'react';

function ButtonCount() {
	const [count, setCount] = useState(0);

	function counter() {
		setCount(count + 1);
	}

	return (
		<button onClick={counter}>
            Clicked {count} times
		</button>
	);
}

export default ButtonCount;