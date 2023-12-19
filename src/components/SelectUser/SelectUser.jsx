
function SelectUser() {

	// const changeUser = (e) => {
	// 	console.log(e.target.value);
	// 	// changedUser(e.target.value);
	// };

	return (
		<>
			<select name='user' id='user' >
				<option value={1}>Anna</option>
				<option value={2}>Evgeniy</option>
			</select>
		</>
		
	);
}

export default SelectUser;