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
              <a
                href="https://www.youtube.com/@maciejdop7079"
                target="_blank"
                rel="noreferrer"
              >
                <i className={styles.demoIconYt}>&#xf16a;</i>
              </a>
            </li>
            <li className={styles.socialNavEl}>
              <a
                href="https://www.instagram.com/maciejdop/"
                target="_blank"
                rel="noreferrer"
              >
                <i className={styles.demoIconInsta}>&#xf16d;</i>
              </a>
            </li>
            <li className={styles.socialNavEl}>
              <a
                href="https://www.facebook.com/profile.php?id=100004323405905"
                target="_blank"
                rel="noreferrer"
              >
                <i className={styles.demoIconFb}>&#xf308;</i>
              </a>
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
