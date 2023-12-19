import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

function SelectUser({ changedUser }) {
	const {userId} = useContext(UserContext);
	const changeUser = (e) => {

		console.log(e.target.value);
		changedUser(e.target.value);
	};

	return (
		<>
			<select name='user' id='user' value={userId} onChange={changeUser}>
				<option value={1}>Anna</option>
				<option value={2}>Evgeniy</option>
			</select>
		</>
		
	);
}

export default SelectUser;