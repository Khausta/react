import './FavoritesMenuItem.css';

function FavoritesMenuItem({ href, count}) {
		
	return (
		<li className='menu-item'>
			<a className='menu-item__link menu-item__favorites' href={href} target="_blank" rel="noopener noreferrer">
				Мои фильмы
				<div className='menu-item__favorites-counter'>
					{count}
				</div>
			</a>
		</li>
	);
	

	

}


export default FavoritesMenuItem;