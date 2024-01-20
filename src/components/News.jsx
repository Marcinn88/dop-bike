import React, { useState } from 'react';
import styles from './News.module.css';
import { nanoid } from 'nanoid';

export const News = () => {
  const data = [
    {
      _id: '1',
      title: 'Tytul Newsa',
      date: '15.01.2024',
      photo_position: 'left',
      photo: 'maciek3.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error illum mollitia beatae aliquam temporibus facilis suscipit, tempora, veniam optio, non dicta eveniet qui dolorem amet est debitis omnis ex expedita? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam exercitationem fuga mollitia adipisci saepe cupiditate quidem quam ex doloremque expedita dolorum assumenda facilis, sed aperiam maiores? Sapiente suscipit nam voluptate',
    },
    {
      _id: '2',
      title: 'Do czego służy drugie koło?',
      date: '15.01.2024',
      photo_position: 'right',
      photo: 'maciek2.jpg',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione quasi dicta facere dolorem. Non laudantium expedita maiores in libero voluptate impedit nobis, veritatis eum enim quo illo reprehenderit, quidem laboriosam',
    },
    {
      _id: '3',
      title: 'W00ooow, co się odstuntowało!',
      date: '15.01.2024',
      photo_position: 'left',
      photo: 'maciek.jpg',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione quasi dicta facere dolorem. Non laudantium expedita maiores in libero voluptate impedit nobis, veritatis eum enim quo illo reprehenderit, quidem laboriosam',
    },
    {
      _id: '4',
      title: 'AAAaaale duzo dymu!!!!',
      date: '25.01.2024',
      photo_position: 'right',
      photo: 'maciek4.jpg',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione quasi dicta facere dolorem. Non laudantium expedita maiores in libero voluptate impedit nobis, veritatis eum enim quo illo reprehenderit, quidem laboriosam',
    },
  ];
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  const [count, setCount] = useState(true);
  const handleSlider = e => setCount(!count);

  return (
    <>
      <div className={styles.newsAdminPanel}>
        <button onClick={openModal} className={styles.addNewsBtn}>
          +
        </button>
      </div>
      {modal && (
        <>
          <div onClick={closeModal} className={styles.shadowBox}></div>
          <div className={styles.addNewsModal}>
            <h1 className={styles.addNewsModalTitle}>Dodaj nowy wpis!</h1>

            <form onSubmit="" className={styles.modalFormWrapper}>
              <input
                className={styles.modalTitle}
                type="text"
                name="title"
                placeholder="Wpisz tytuł"
                required
              ></input>

              <div className={styles.sliderContainer}>
                {!count ? (
                  <span className={styles.greenText}>Zdjęcie z lewej</span>
                ) : (
                  <span className={styles.greyText}>Zdjęcie z lewej</span>
                )}
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    name="slider"
                    value={!count ? '+' : '-'}
                    onChange={
                      !count ? console.log('left') : console.log('right')
                    }
                    onClick={handleSlider}
                  />
                  <span className={styles.slider}></span>
                </label>
                {!count ? (
                  <span className={styles.greyText}>Zdjęcie z prawej</span>
                ) : (
                  <span className={styles.redText}>Zdjęcie z prawej</span>
                )}
              </div>

              <button className={styles.modalNewsBtn}>Załącz zdjęcie</button>
              <input
                className={styles.modalData}
                type="date"
                name="date"
              ></input>
              <textarea
                type="textarea"
                maxLength="1000"
                name="paragraf"
                placeholder="Paragraf1"
                className={styles.modalParagraf}
              ></textarea>
              <textarea
                type="textarea"
                maxLength="1000"
                name="paragraf"
                placeholder="Paragraf1"
                className={styles.modalParagraf}
              ></textarea>
              <textarea
                type="textarea"
                maxLength="1000"
                name="paragraf"
                placeholder="Paragraf1"
                className={styles.modalParagraf}
              ></textarea>
              <div className={styles.addNewsModalBtns}>
                <button className={styles.modalNewsBtn}>Dodaj</button>
                <button className={styles.modalNewsBtn} onClick={closeModal}>
                  Zamknij
                </button>
              </div>
            </form>
          </div>
        </>
      )}
      <div className={styles.news}>
        <div className={styles.newsTitleBox}>
          <p className={styles.newscommentTitle}>Co slychac w DOP?</p>
          <h1 className={styles.newsTitle}>Aktualności</h1>
        </div>

        {data.map(({ _id, title, date, photo_position, photo, text }) => {
          return (
            <div className={styles.newsElement} id={_id ?? nanoid()}>
              <p className={styles.newsSubTitle}>{title}</p>
              <p className={styles.newsDate}>{date}</p>
              <div className={styles.newsContainer}>
                {photo_position === 'left' ? (
                  <>
                    <div className={styles.newsImg}>
                      <img src={require(`../images/${photo}`)} alt="bike" />
                    </div>
                    <div className={styles.newsText}>{text}</div>
                  </>
                ) : (
                  <>
                    <div className={styles.newsText}>{text}</div>
                    <div className={styles.newsImg}>
                      <img src={require(`../images/${photo}`)} alt="bike" />
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
