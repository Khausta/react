import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';

function SelectUser() {

	const { userId, setUserId } = useContext(UserContext);

	const changeUser = (e) => {
		setUserId(Number(e.target.value));
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