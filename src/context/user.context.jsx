import { useState } from 'react';
import { createContext } from 'react';

export const UserContext = createContext({
	userName: ''
});

export const UserContextProvider = ({ children }) => {
	const [userName, setUserName] = useState('');
	return <UserContext.Provider value={{ userName, setUserName }}>
		{ children }
	</UserContext.Provider>;
};