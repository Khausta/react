import styles from './Logo.module.css';

function Logo() {
	console.log('Logo');
	// return <img className={styles.logo} src={image} alt="Personal Journal Logotype" />;
	return <img className={styles.logo} src={'/logo.svg'} alt="Personal Journal Logotype" />;
	//все равно происходит рендер дочерних элементов, даже если компонент не принимает prop

}

export default Logo;