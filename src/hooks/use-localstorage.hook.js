import { useEffect, useState } from 'react';

export function useLocalstorage(key) {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    const res = JSON.parse(localStorage.getItem(key));
		
    if (res) {
      setProfiles(res);
    }
  }, []);

  const saveProfiles = (newProfile) => {
    localStorage.setItem(key, JSON.stringify(newProfile));
    setProfiles(newProfile);
  };

  return [profiles, saveProfiles];
}