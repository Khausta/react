import './Card.css';

function Card({ title, cover, rating }) {
	console.log(title, cover, rating);

	

	return (
		<div className='card'>
			<div className='card__cover-block'>
				<img  className='card__cover-img' src={cover} alt="Cover" />
				<div className='card__rating'>
					<img src="icon-star.svg" alt="star" />
					<p className='card__rating-sum'>{rating}</p>
				</div>
			</div>
			<p className='card__title'>
				{title}
			</p>
			<div className='card__favorites'>
				<img src="icon-like.svg" alt="like icon" />
				<p>Add to favorites</p>
			</div>
		</div>
	);
}
  
export default Card;