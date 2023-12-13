import styles from './FavoritesMenuItem.module.css';
import menuItemStyles from '../MenuItem/MenuItem.module.css';

function FavoritesMenuItem({ href, count}) {
		
	return (
		<li className={menuItemStyles['menu-item']}>
			<a className={`${menuItemStyles['menu-item__link']} ${styles['menu-item__favorites']}`} href={href} target="_blank" rel="noopener noreferrer">
				Мои фильмы
				<div className={styles['menu-item__favorites-counter']}>
					{count}
				</div>
			</a>
		</li>
	);
	

	

}


export default FavoritesMenuItem;