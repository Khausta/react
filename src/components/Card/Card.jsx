import styles from './Card.module.css';

function Card({ title, cover, rating }) {
	console.log(title, cover, rating);

	

	return (
		<div className={styles['card']}>
			<div className={styles['card__cover-block']}>
				<img  className={styles['card__cover-img']} src={cover} alt="Cover" />
				<div className={styles['card__rating']}>
					<img src="icon-star.svg" alt="star" />
					<p className={styles['card__rating-sum']}>{rating}</p>
				</div>
			</div>
			<p className={styles['card__title']}>
				{title}
			</p>
			<div className={styles['card__favorites']}>
				<img src="icon-like.svg" alt="like icon" />
				<p>Add to favorites</p>
			</div>
		</div>
	);
}
  
export default Card;