import styles from './Header.module.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import newsLetterImg from '../images/news.jpg';

export const Header = () => {
  const [modal, setModal] = useState(false);
  const [smallModal, setSmallModal] = useState(false);
  const [newsletter, setNewsletter] = useState({});

  const openModal = () => {
    setModal(!modal);
    setNewsletter({
      name: 'Nieznajomy',
      email: '',
    });
  };
  const closeModal = e => {
    e.preventDefault();
    setModal(!modal);
  };

  const submitNewsletter = e => {
    e.preventDefault();
    console.log(newsletter);
    setSmallModal(!smallModal);
    setModal(!modal);
  };

  const submitSmallModal = () => {
    setSmallModal(!smallModal);
  };

  return (
    <>
      {smallModal && (
        <>
          <div onClick={openModal} className={styles.smallShadowBox}></div>
          <div className={styles.newsLetterSmallModal}>
            <p className={styles.newsSmallModalSubtitle}>
              Pomyślnie zapisano do newslettera!
            </p>
            <button className={styles.modalNewsBtn} onClick={submitSmallModal}>
              Ok
            </button>
          </div>
        </>
      )}
      {modal && (
        <>
          <div onClick={openModal} className={styles.shadowBox}></div>
          <div className={styles.newsLetterModal}>
            <h1 className={styles.newsModalTitle}>
              Zapisz się do Newslettera!
            </h1>
            <p className={styles.newsModalSubtitle}>
              Chcesz otrzymywać powiadomienia o najnowszych wydarzeniach?
            </p>
            <p className={styles.newsModalSubtitle}>
              Jeżeli tak, to koniecznie zapisz się do{' '}
              <strong>NewsLettera!</strong>
            </p>
            <img
              className={styles.newsLetterImg}
              src={newsLetterImg}
              alt="człowiek na motorze pośród emaili"
            ></img>
            <form onSubmit={submitNewsletter} className={styles.newsLetterForm}>
              <div className={styles.newsLetterInputContainer}>
                <input
                  className={styles.newsLetterFormEl}
                  type="text"
                  placeholder="imię"
                  required
                  onChange={e => {
                    setNewsletter({ ...newsletter, name: e.target.value });
                  }}
                ></input>
                <input
                  className={styles.newsLetterFormEl}
                  type="email"
                  placeholder="email"
                  required
                  onChange={e => {
                    setNewsletter({ ...newsletter, email: e.target.value });
                  }}
                ></input>
              </div>
              <div className={styles.newsLetterBtnContainer}>
                <button className={styles.modalNewsBtn} type="submit">
                  Zapisz się
                </button>
                <button className={styles.modalNewsBtn} onClick={closeModal}>
                  Zamknij
                </button>
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
