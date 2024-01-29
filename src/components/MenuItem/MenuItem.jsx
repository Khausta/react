import styles from './MenuItem.module.css';
import classNames from 'classnames';




function MenuItem({ href, text, icon, appearance, isLogin, onClick}) {
  const icons = [
    {
      name: 'login',
      path: '/icon-login.svg',
      icon: 
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8 16C8 18.8284 8 20.2426 8.87868 21.1213C9.51998 21.7626 10.4466 21.9359 12 21.9827M8 8C8 5.17157 8 3.75736 8.87868 2.87868C9.75736 2 11.1716 2 14 2H15C17.8284 2 19.2426 2 20.1213 2.87868C21 3.75736 21 5.17157 21 8V10V14V16C21 18.8284 21 20.2426 20.1213 21.1213C19.3529 21.8897 18.175 21.9862 16 21.9983" stroke="#9BA5B7" strokeWidth="1.5" strokeLinecap="round"/><path d="M3 9.5V14.5C3 16.857 3 18.0355 3.73223 18.7678C4.46447 19.5 5.64298 19.5 8 19.5M3.73223 5.23223C4.46447 4.5 5.64298 4.5 8 4.5" stroke="#9BA5B7" strokeWidth="1.5" strokeLinecap="round"/><path d="M6 12L15 12M15 12L12.5 14.5M15 12L12.5 9.5" stroke="#9BA5B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
    },
    {
      name: 'user',
      path: '/icon-user.svg',
      icon: 
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="6" r="4" stroke="#9BA5B7" strokeWidth="1.5"/><ellipse cx="12" cy="17" rx="7" ry="4" stroke="#9BA5B7" strokeWidth="1.5"/>
			</svg>
    }
  ];
	
  if (icon) {
    return (
      <li className={classNames(styles['menu-item'], {
        [styles['hide']]: (appearance === 'profile' && !isLogin)
      })} >
        <a className={styles['menu-item__link']} href={href}  rel="noopener noreferrer" onClick={onClick}>
          {text}
          {icons.find(el => el.name === icon).icon}
        </a>
      </li>
    );
  }
	
  return (
    <li className={styles['menu-item']} >
      <a className={styles['menu-item__link']} href={href} rel="noopener noreferrer" onClick={onClick}>
        {text}
      </a>
    </li>
  );
	
}



export default MenuItem;