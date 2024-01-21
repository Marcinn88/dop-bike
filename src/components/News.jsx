import React, { useState } from 'react';
import styles from './News.module.css';
import { nanoid } from 'nanoid';
import leftImage from '../images/left-img.jpg';
import rightImage from '../images/right-img.jpg';
import { getDay, getMonth, getDefYear } from '../services/DateFunctions';

export const News = () => {
  const data = [
    {
      _id: '1',
      title: 'Tytul Newsa',
      date: {
        day: '21',
        month: '01',
        year: '2024',
      },
      photo_position: 'left',
      photo: 'maciek3.jpg',
      text1:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error illum mollitia beatae aliquam temporibus facilis suscipit, tempora, veniam optio, non dicta eveniet qui dolorem amet est debitis omnis ex expedita? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam exercitationem fuga mollitia adipisci saepe cupiditate quidem quam ex doloremque expedita dolorum assumenda facilis, sed aperiam maiores? Sapiente suscipit nam voluptate',
      text2:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error illum mollitia beatae aliquam temporibus facilis suscipit, tempora, veniam optio, non dicta eveniet qui dolorem amet est debitis omnis ex expedita? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam exercitationem fuga mollitia adipisci saepe cupiditate quidem quam ex doloremque expedita dolorum assumenda facilis, sed aperiam maiores? Sapiente suscipit nam voluptate',
      text3:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error illum mollitia beatae aliquam temporibus facilis suscipit, tempora, veniam optio, non dicta eveniet qui dolorem amet est debitis omnis ex expedita? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam exercitationem fuga mollitia adipisci saepe cupiditate quidem quam ex doloremque expedita dolorum assumenda facilis, sed aperiam maiores? Sapiente suscipit nam voluptate',
    },
    {
      _id: '2',
      title: 'Do czego służy drugie koło?',
      date: {
        day: '20',
        month: '01',
        year: '2024',
      },
      photo_position: 'right',
      photo: 'maciek2.jpg',
      text1:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione quasi dicta facere dolorem. Non laudantium expedita maiores in libero voluptate impedit nobis, veritatis eum enim quo illo reprehenderit, quidem laboriosam',
      text2: '',
      text3: '',
    },
    {
      _id: '3',
      title: 'W00ooow, co się odstuntowało!',
      date: {
        day: '15',
        month: '12',
        year: '2023',
      },
      photo_position: 'left',
      photo: 'maciek.jpg',
      text1:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione quasi dicta facere dolorem. Non laudantium expedita maiores in libero voluptate impedit nobis, veritatis eum enim quo illo reprehenderit, quidem laboriosam',
      text2:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione quasi dicta facere dolorem. Non laudantium expedita maiores in libero voluptate impedit nobis, veritatis eum enim quo illo reprehenderit, quidem laboriosam',
      text3:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione quasi dicta facere dolorem. Non laudantium expedita maiores in libero voluptate impedit nobis, veritatis eum enim quo illo reprehenderit, quidem laboriosam',
    },
    {
      _id: '4',
      title: 'AAAaaale duzo dymu!!!!',
      date: {
        day: '01',
        month: '10',
        year: '2023',
      },
      photo_position: 'right',
      photo: 'maciek4.jpg',
      text1:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione quasi dicta facere dolorem. Non laudantium expedita maiores in libero voluptate impedit nobis, veritatis eum enim quo illo reprehenderit, quidem laboriosam',
      text2:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione quasi dicta facere dolorem. Non laudantium expedita maiores in libero voluptate impedit nobis, veritatis eum enim quo illo reprehenderit, quidem laboriosam',
      text3: '',
    },
  ];
  const [modal, setModal] = useState(false);
  const [post, setPost] = useState({});
  const [count, setCount] = useState(true);

  const openModal = () => {
    setPost({
      _id: nanoid(),
      title: '',
      date: {
        day: getDay(),
        month: getMonth(),
        year: getDefYear(),
      },
      photo_position: 'right',
      photo: '',
      text1: '',
      text2: '',
      text3: '',
    });
    setModal(true);
    setCount(true);
    console.log(post);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleSlider = e => setCount(!count);

  const setUploadFile = e => {
    console.log('uploaded');
    setPost({ ...post, photo: e.target.value });
  };

  const sliderTypeLeft = () => {
    setPost({ ...post, photo_position: 'left' });
    console.log('left');
  };
  const sliderTypeRight = () => {
    setPost({ ...post, photo_position: 'right' });
    console.log('right');
  };
  const dateTrim = e => {
    const selectedData = e.target.value.toString();
    const day = selectedData.substr(8, 2);
    const month = selectedData.substr(5, 2);
    const year = selectedData.substr(0, 4);
    setPost({ ...post, date: { day: day, month: month, year: year } });
  };
  const submitModal = e => {
    e.preventDefault();
    // dispatch(createTransaction(data));
    console.log(post);
    setModal(!modal);
  };
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

            <form onSubmit={submitModal} className={styles.modalFormWrapper}>
              <input
                className={styles.modalTitle}
                type="text"
                name="title"
                maxLength="50"
                placeholder="Wpisz tytuł"
                onChange={e => setPost({ ...post, title: e.target.value })}
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
                    value={!count ? 'Right' : 'Left'}
                    onChange={!count ? sliderTypeRight : sliderTypeLeft}
                    onClick={handleSlider}
                  />
                  <span className={styles.slider}></span>
                </label>
                {!count ? (
                  <span className={styles.greyText}>Zdjęcie z prawej</span>
                ) : (
                  <span className={styles.redText}>Zdjęcie z prawej</span>
                )}

                {!count ? (
                  <img
                    className={styles.switchImage}
                    src={leftImage}
                    alt="wzor formularza"
                  />
                ) : (
                  <img
                    className={styles.switchImage}
                    src={rightImage}
                    alt="wzor formularza"
                  />
                )}
              </div>

              <div className={styles.modalSmallWrapper}>
                <label className={styles.modalFile} id="upload-label">
                  <input
                    className={styles.modalInputFile}
                    type="file"
                    id="upload-file"
                    onChange={setUploadFile}
                  ></input>
                  <em>Załącz zdjęcie</em>
                </label>
                <input
                  className={styles.modalData}
                  type="date"
                  name="date"
                  onChange={dateTrim}
                ></input>
              </div>
              <textarea
                type="textarea"
                maxLength="1000"
                name="paragraf"
                placeholder="Wpisz zawartość pierwszego Paragrafu"
                onChange={e => setPost({ ...post, text1: e.target.value })}
                className={styles.modalParagraf}
                required
              ></textarea>
              <textarea
                type="textarea"
                maxLength="1000"
                name="paragraf"
                placeholder="Wpisz zawartość drugiego Paragrafu (opcjonalnie)"
                onChange={e => setPost({ ...post, text2: e.target.value })}
                className={styles.modalParagraf}
              ></textarea>
              <textarea
                type="textarea"
                maxLength="1000"
                name="paragraf"
                placeholder="Wpisz zawartość trzeciego Paragrafu (opcjonalnie)"
                onChange={e => setPost({ ...post, text3: e.target.value })}
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

        {data.map(
          ({
            _id,
            title,
            date,
            photo_position,
            photo,
            text1,
            text2,
            text3,
          }) => {
            return (
              <div className={styles.newsElement} id={_id ?? nanoid()}>
                <p className={styles.newsSubTitle}>{title}</p>
                <p className={styles.newsDate}>
                  {date.day}.{date.month}.{date.year}
                </p>
                <div className={styles.newsContainer}>
                  {photo_position === 'left' ? (
                    <>
                      <div className={styles.newsImg}>
                        <img src={require(`../images/${photo}`)} alt="bike" />
                      </div>
                      <div className={styles.newsText}>
                        <p>{text1}</p>
                        <p>{text2}</p>
                        <p>{text3}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={styles.newsText}>
                        <p>{text1}</p>
                        <p>{text2}</p>
                        <p>{text3}</p>
                      </div>
                      <div className={styles.newsImg}>
                        <img src={require(`../images/${photo}`)} alt="bike" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};
