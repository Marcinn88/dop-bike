import styles from './Header.module.css';
import { nanoid } from 'nanoid';

export const Header = () => {
  return (
    <>
      <div className={styles.main} id={nanoid()}>
        <div className={styles.mainNav}>
          <ul className={styles.mainNavList}>
            <li className={styles.mainNavEl}>
              <p className={styles.mainNavElText}>O Mnie</p>
            </li>
            <li className={styles.mainNavEl}>
              <p className={styles.mainNavElText}>Galeria</p>
            </li>
            <li className={styles.mainNavEl}>
              <p className={styles.mainNavElText}>Kontakt</p>
            </li>
          </ul>
          <ul className={styles.socialNav}>
            <li className={styles.socialNavEl}>
              <i className={styles.demoIconYt}>&#xf16a;</i>
            </li>
            <li className={styles.socialNavEl}>
              <i className={styles.demoIconInsta}>&#xf16d;</i>
            </li>
            <li className={styles.socialNavEl}>
              <i className={styles.demoIconFb}>&#xf308;</i>
            </li>
          </ul>
        </div>

        <div className={styles.mainTitle}>DOP</div>
        <div className={styles.subTitle}>Maciej Bielicki</div>

        <button className={styles.mainButton}>Newsletter</button>
      </div>
    </>
  );
};
