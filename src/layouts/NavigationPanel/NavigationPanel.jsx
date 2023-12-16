// import { useRef } from 'react';
import { useEffect, useState } from 'react';
import FavoritesMenuItem from '../../components/FavoritesMenuItem';
import MenuItem from '../../components/MenuItem';
import styles from './NavigationPanel.module.css';


function NavigationPanel({ isLogin, onClick }) {

	const INITIAL_DATA = {
		iconExit: 'login',
		textExit: 'Войти'
	};

	const [loginState, setLoginState] = useState(INITIAL_DATA);



	useEffect(() => {
		if (isLogin) {
			setLoginState({
				iconExit: false,
				textExit: 'Выйти'
			});
		} else {
			setLoginState(INITIAL_DATA);
		}
	}, [isLogin]);

    
	return (
		<div className={styles['navigation-panel']}>
			<div className={styles['navigation-panel__inner']}>
				<a className={styles['navigation-panel__logo']} href="#" target="_blank" rel="noopener noreferrer">
					<svg className={styles['navigation-panel__logo-img']} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
						<path d="M35 26.8182V18.4959C35 11.3482 35 7.77435 32.8033 5.55384C30.6066 3.33334 27.0711 3.33334 20 3.33334C12.9289 3.33334 9.3934 3.33334 7.1967 5.55384C5 7.77435 5 11.3482 5 18.4959V26.8182C5 31.9791 5 34.5596 6.22351 35.6872C6.80702 36.2249 7.54358 36.5628 8.32819 36.6526C9.97337 36.8408 11.8946 35.1416 15.7369 31.7431C17.4354 30.2408 18.2846 29.4897 19.2671 29.2918C19.751 29.1943 20.249 29.1943 20.7329 29.2918C21.7154 29.4897 22.5646 30.2408 24.2631 31.7431C28.1054 35.1416 30.0266 36.8408 31.6718 36.6526C32.4564 36.5628 33.193 36.2249 33.7765 35.6872C35 34.5596 35 31.9791 35 26.8182Z" stroke="#7B6EF6" strokeWidth="3"/>
						<path d="M25 10H15" stroke="#7B6EF6" strokeWidth="3" strokeLinecap="round"/>
					</svg>
				</a>
				<div className={styles['navigation-panel__menu']}>
					<ul className={styles['navigation-panel__menu-list']}>
						<MenuItem
							href='#'
							text='Поиск фильмов'
							
						/>
						<FavoritesMenuItem
							href='#'
							count={3}
						/>
						<MenuItem
							href='#'
							text={isLogin}
							icon='user'
							appearance='profile'
							isLogin={isLogin}				
						/>
						<MenuItem
							href='#'
							text={loginState.textExit}
							icon={loginState.iconExit}
							onClick={onClick}
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}


export default NavigationPanel;