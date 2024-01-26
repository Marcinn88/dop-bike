import styles from './Header.module.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Header = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal && (
        <>
          <div onClick={openModal} className={styles.shadowBox}></div>
          <div className={styles.newsLetterModal}>
            <p>Zapisz się do Newslettera!</p>
            <p>Zapisz się do Newslettera!</p>
            <form className={styles.newsLetterForm}>
              <input className={styles.newsLetterFormEl} type="text"></input>
              <input className={styles.newsLetterFormEl} type="text"></input>
              <div className={styles.newsLetterBtnContainer}>
                <button type="submit">Zapisz się</button>
                <button onClick={openModal}>Zamknij</button>
              </div>
            </form>
          </div>
        </>
      )}

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

        <button onClick={openModal} className={styles.mainButton}>
          Newsletter
        </button>
      </div>
    </>
  );
};
