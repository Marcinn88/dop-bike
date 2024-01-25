import { useState, useEffect } from 'react';
import styles from './News.module.css';
import { nanoid } from 'nanoid';
import leftImage from '../images/left-img.jpg';
import rightImage from '../images/right-img.jpg';
import { getDay, getMonth, getDefYear } from '../services/DateFunctions';
import { addArticle } from '../services/operations';
// import defaultImg from '../images/'

import axios from 'axios';

axios.defaults.baseURL = 'https://65b15d5ed16d31d11bdec7f4.mockapi.io';

export const News = () => {
  const [modal, setModal] = useState(false);
  const [post, setPost] = useState({});
  const [count, setCount] = useState(true);
  const [data, setData] = useState([]);

  const getArticles = async () => {
    try {
      const response = await axios.get('/articles');
      setData(response.data);
      console.log('lodaing data....');
      return response.data;
    } catch (error) {
      return console.error(error.message);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  const openModal = () => {
    setPost({
      _id: nanoid(),
      title: '',
      date_day: getDay(),
      date_month: getMonth(),
      date_year: getDefYear(),
      photo_position: 'right',
      photo: 'default.jpg',
      text1: '',
      text2: '',
      text3: '',
      favorite: 'false',
    });
    setModal(true);
    setCount(true);
    // console.log(post);
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
    setPost({ ...post, date_day: day, date_month: month, date_year: year });
  };
  const submitModal = e => {
    e.preventDefault();
    addArticle(post);
    console.log('post');
    console.log(post);
    setModal(!modal);
    // getArticles();
    // setData({ ...data, post });
    setData([
      ...data,
      {
        _id: post._id,
        title: post.title,
        date_day: post.date_day,
        date_month: post.date_month,
        date_year: post.date_year,
        photo_position: post.photo_position,
        photo: post.photo,
        text1: post.text1,
        text2: post.text2,
        text3: post.text3,
        favorite: post.favorite,
      },
    ]);
    console.log('data');
    console.log(data);
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
                maxLength="500"
                name="paragraf"
                placeholder="Wpisz zawartość pierwszego Paragrafu"
                onChange={e => setPost({ ...post, text1: e.target.value })}
                className={styles.modalParagraf}
                required
              ></textarea>
              <textarea
                type="textarea"
                maxLength="500"
                name="paragraf"
                placeholder="Wpisz zawartość drugiego Paragrafu (opcjonalnie)"
                onChange={e => setPost({ ...post, text2: e.target.value })}
                className={styles.modalParagraf}
              ></textarea>
              <textarea
                type="textarea"
                maxLength="500"
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

        {data
          .toReversed()
          .map(
            ({
              id,
              title,
              date_day,
              date_month,
              date_year,
              photo_position,
              photo,
              text1,
              text2,
              text3,
              favorite,
            }) => {
              return (
                <div
                  className={styles.newsElement}
                  key={nanoid()}
                  id={id ?? nanoid()}
                >
                  <p className={styles.newsSubTitle}>{title}</p>
                  <p className={styles.newsDate}>
                    {date_day}.{date_month}.{date_year}
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
