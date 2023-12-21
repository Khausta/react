import { useEffect, useState } from 'react';

export function useLocalstorage(key) {
	const [profiles, setProfiles] = useState([]);
	useEffect(() => {
		const res = JSON.parse(localStorage.getItem(key));
		
		if (res) {
			setProfiles(res);
		}
	}, []);

	// useEffect(() => {
	// 	const res = JSON.parse(localStorage.getItem(key));
		
	// 	if (res) {
	// 		setProfiles(res);
	// 	}
	// }, [profiles]);

	const saveProfiles = (newProfile) => {
		localStorage.setItem(key, JSON.stringify(newProfile));
		setProfiles(newProfile);
	};

	return [profiles, saveProfiles];
}