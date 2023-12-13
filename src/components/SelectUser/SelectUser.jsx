import {useContext} from 'react';
import { UserContext } from '../../contexts/user.context';

function SelectUser({ changedUser }) {

	const {userId} = useContext(UserContext);

	const changeUser = (e) => {
		changedUser(e.target.value);
		console.log(e.target.value);
	};

	return (
		<>
			<select name='user' id='user' value={userId} onChange={changeUser}>
				<option value='1'>Anna</option>
				<option value='2'>Dandy</option>
			</select>
		</>
	);
}

export default SelectUser;