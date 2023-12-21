import styles from './Logo.module.css';
import { memo } from 'react';

function Logo({ image }) {
	console.log(memo);
	console.log('Logo');
	return <img className={styles.logo} src={image} alt="Personal Journal Logotype" />;

}

export default memo(Logo);