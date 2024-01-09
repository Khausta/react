import styles from './CardGrid.module.css';
import Card from '../Card';
function CardGrid({ items }) {
 
  if (items.length === 0) {
    return <>
      <h2 className={styles['cards__header']}>
				Упс... Ничего не найдено
      </h2>
      <p className={styles['cards__subheader']}> 
				Попробуйте изменить запрос или ввести более точное название фильма
      </p>
    </>;
  }

  return (
    <div className={styles['cards']}> 
      {items.map(item => (
        <Card 
          key={item.id}
          title={item.title}
          cover={item.cover}
          rating={item.rating}
        />
      ))}
    </div>
  );
}
  
export default CardGrid;