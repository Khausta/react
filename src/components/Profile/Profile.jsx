import styles from './Profile.module.css';
import Input from '../Input';
import Button from '../Button';
import { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../context/user.context';


function Profile({ onSubmit }) {
  const { userName, setUserName } = useContext(UserContext);
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const userNameRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    let timerInvalid;
    if(!isValid) {
      timerInvalid = setTimeout(() => {
        setIsValid(true);
      }, 2000);
    }
    return () => {
      clearTimeout(timerInvalid);
    };
  }, [isValid]);
    
  const addProfileItem = (e) => {
    e.preventDefault();
    let isUserNameValid = true;
    if (!value.trim().length) {
      isUserNameValid = false;
      setIsValid(false);
    } else {
      isUserNameValid = true;
      setIsValid(true);
    }
    if (!isUserNameValid) return;
    onSubmit(value);
    setValue('');
    setUserName(value);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className={styles['profile']} onSubmit={addProfileItem}>
      <Input ref={userNameRef} placeholder={'Введите имя'} name={'userName'} isValid={isValid} onChange={onChange} value={value}>
      </Input>
      <Button ref={buttonRef} action={'Войти'}></Button>
    </form>
  );
}

export default Profile;