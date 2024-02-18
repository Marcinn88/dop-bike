import { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
import styles from './News.module.css';
import { nanoid } from 'nanoid';
import leftImage from '../images/left-img.jpg';
import rightImage from '../images/right-img.jpg';
import { getDay, getMonth, getDefYear } from '../services/DateFunctions';
import { addArticle, deleteArticle, editArticle } from '../services/operations';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

const mockApi = 'https://65b15d5ed16d31d11bdec7f4.mockapi.io';
// axios.defaults.baseURL = '';

export const News = () => {
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [post, setPost] = useState({});
  const [count, setCount] = useState(true);
  const [data, setData] = useState([]);
  const [editedData, setEditedData] = useState([]);
  const [editedId, setEditedId] = useState('');
  const [uploadModal, setUploadModal] = useState(false);
  const [forData, setForData] = useState({ files: null });
  const [urls, seUrls] = useState([]);
  const [apiFiles, setApiFiles] = useState({});

  const getArticles = async () => {
    try {
      const response = await axios.get(`${mockApi}/articles`);
      setData(response.data);
      console.log('lodaing data....');
      return response.data;
    } catch (error) {
      return console.error(error.message);
    }
  };

  const uploadPhoto = () => {
    const formData = new FormData();
    formData.append('file', apiFiles);
    formData.append('upload_preset', 'dop-bike');
    console.log('formData', formData);
    axios
      .post('https://api.cloudinary.com/v1_1/djwth1q7u/image/upload', formData)
      .then(response => {
        console.log(response);
        console.log(response.data.secure_url);
        setPost({ ...post, photo: response.data.secure_url });
      });
    setUploadModal(!uploadModal);
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
    setEditModal(false);
    setModal(true);
    setCount(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const toogleUploadModal = e => {
    e.preventDefault();
    setUploadModal(!uploadModal);
  };

  const handleSlider = e => setCount(!count);

  const sliderTypeLeft = () => {
    setPost({ ...post, photo_position: 'left' });
    setEditedData({ ...post, photo_position: 'left' });
  };
  const sliderTypeRight = () => {
    setPost({ ...post, photo_position: 'right' });
    setEditedData({ ...post, photo_position: 'right' });
  };
  const dateTrim = e => {
    const selectedData = e.target.value.toString();
    const day = selectedData.substr(8, 2);
    const month = selectedData.substr(5, 2);
    const year = selectedData.substr(0, 4);
    setPost({ ...post, date_day: day, date_month: month, date_year: year });
    setEditedData({
      ...post,
      date_day: day,
      date_month: month,
      date_year: year,
    });
  };
  const submitModal = e => {
    e.preventDefault();
    addArticle(post);
    setModal(!modal);
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
  };

  const articleDelete = index => {
    deleteArticle(index);
    const newData = data.filter(e => e.id !== index);
    setData(newData);
  };

  const articleEdit = index => {
    setEditedId(index);
    const newData = data.filter(e => e.id === index);
    setPost({
      ...post,
      _id: newData[0]._id,
      title: newData[0].title,
      date_day: newData[0].date_day,
      date_month: newData[0].date_month,
      date_year: newData[0].date_year,
      photo_position: newData[0].photo_position,
      photo: newData[0].photo,
      text1: newData[0].text1,
      text2: newData[0].text2,
      text3: newData[0].text3,
      favorite: newData[0].favorite,
    });
    setModal(true);
    setEditModal(true);
  };

  const submitEditedModal = e => {
    e.preventDefault();
    setModal(!modal);
    setEditedData(post);
    console.log(editedData);
    editArticle(editedData, editedId);
    console.log(data);
  };

  useEffect(() => {
    if (forData?.files?.length > 0) {
      seUrls(forData.files.map(f => URL.createObjectURL(f)));
    }
  }, [forData.files]);

  const onSubmit = async () => {
    setUploadModal(!uploadModal);
    console.log(forData.files[0]);
    console.log(urls);

    console.log('apiFiles', apiFiles);

    const results = await fetch(
      'https://api.cloudinary.com/v1_1/djwth1q7u/image/upload/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'form/data',
        },
        body: apiFiles,
      }
    );
    const data = await results.json();
    console.log('results', results);
    console.log('data', data);
    // axios.post('/images', forData);
  };
  return (
    <>
      {uploadModal && (
        <>
          <div
            onClick={toogleUploadModal}
            className={styles.uploadShadowBox}
          ></div>
          <div className={styles.uploadModal}>
            <input
              type="file"
              onChange={e => {
                setApiFiles(e.target.files[0]);
                console.log('apifiles:', apiFiles);
              }}
            />

            <button
              className={styles.modalNewsBtn}
              onClick={() => uploadPhoto()}
            >
              Zapisz plik
            </button>
          </div>
        </>
      )}
      <div className={styles.newsAdminPanel}>
        <button onClick={openModal} className={styles.addNewsBtn}>
          +
        </button>
      </div>
      {modal && (
        <>
          <div onClick={closeModal} className={styles.shadowBox}></div>
          <div className={styles.addNewsModal}>
            {!editModal ? (
              <h1 className={styles.addNewsModalTitle}>Dodaj nowy wpis!</h1>
            ) : (
              <h1 className={styles.addNewsModalTitle}>Edytuj wpis!</h1>
            )}

            <form
              onSubmit={!editModal ? submitModal : submitEditedModal}
              className={styles.modalFormWrapper}
            >
              {!editModal ? (
                <input
                  className={styles.modalTitle}
                  type="text"
                  name="title"
                  maxLength="50"
                  placeholder="Wpisz tytuł"
                  onChange={e => {
                    setPost({ ...post, title: e.target.value });
                    setEditedData({ ...post, title: e.target.value });
                  }}
                  required
                ></input>
              ) : (
                <input
                  className={styles.modalTitle}
                  type="text"
                  name="title"
                  maxLength="50"
                  value={post.title}
                  placeholder="Wpisz tytuł"
                  onChange={e => {
                    setPost({ ...post, title: e.target.value });
                    setEditedData({ ...post, title: e.target.value });
                  }}
                  required
                ></input>
              )}

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
                <button
                  className={styles.modalFile}
                  onClick={toogleUploadModal}
                >
                  Załącz zdjęcie
                </button>

                <input
                  className={styles.modalData}
                  type="date"
                  name="date"
                  onChange={dateTrim}
                ></input>
              </div>
              {!editModal ? (
                <textarea
                  type="textarea"
                  maxLength="500"
                  name="paragraf"
                  placeholder="Wpisz zawartość pierwszego Paragrafu"
                  onChange={e => {
                    setPost({ ...post, text1: e.target.value });
                    setEditedData({ ...post, text1: e.target.value });
                  }}
                  className={styles.modalParagraf}
                  required
                ></textarea>
              ) : (
                <textarea
                  type="textarea"
                  maxLength="500"
                  name="paragraf"
                  value={post.text1}
                  placeholder="Wpisz zawartość pierwszego Paragrafu"
                  onChange={e => {
                    setPost({ ...post, text1: e.target.value });
                    setEditedData({ ...post, text1: e.target.value });
                  }}
                  className={styles.modalParagraf}
                  required
                ></textarea>
              )}
              {!editModal ? (
                <textarea
                  type="textarea"
                  maxLength="500"
                  name="paragraf"
                  placeholder="Wpisz zawartość drugiego Paragrafu (opcjonalnie)"
                  onChange={e => {
                    setPost({ ...post, text2: e.target.value });
                    setEditedData({ ...post, text2: e.target.value });
                  }}
                  className={styles.modalParagraf}
                ></textarea>
              ) : (
                <textarea
                  type="textarea"
                  maxLength="500"
                  name="paragraf"
                  value={post.text2}
                  placeholder="Wpisz zawartość drugiego Paragrafu (opcjonalnie)"
                  onChange={e => {
                    setPost({ ...post, text2: e.target.value });
                    setEditedData({ ...post, text2: e.target.value });
                  }}
                  className={styles.modalParagraf}
                ></textarea>
              )}
              {!editModal ? (
                <textarea
                  type="textarea"
                  maxLength="500"
                  name="paragraf"
                  placeholder="Wpisz zawartość trzeciego Paragrafu (opcjonalnie)"
                  onChange={e => {
                    setPost({ ...post, text3: e.target.value });
                    setEditedData({ ...post, text3: e.target.value });
                  }}
                  className={styles.modalParagraf}
                ></textarea>
              ) : (
                <textarea
                  type="textarea"
                  maxLength="500"
                  name="paragraf"
                  value={post.text3}
                  placeholder="Wpisz zawartość trzeciego Paragrafu (opcjonalnie)"
                  onChange={e => {
                    setPost({ ...post, text3: e.target.value });
                    setEditedData({ ...post, text3: e.target.value });
                  }}
                  className={styles.modalParagraf}
                ></textarea>
              )}

              <div className={styles.addNewsModalBtns}>
                {!editModal ? (
                  <button className={styles.modalNewsBtn}>Dodaj</button>
                ) : (
                  <button className={styles.modalNewsBtn}>Zapisz</button>
                )}
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
                  <div className={styles.newsTtleContainer}>
                    <p className={styles.newsSubTitle}>{title}</p>
                    <button
                      className={styles.newsBtn}
                      id={id}
                      onClick={() => articleDelete(id)}
                    >
                      Usuń
                    </button>
                    <button
                      className={styles.newsBtn}
                      id={id}
                      onClick={() => articleEdit(id)}
                    >
                      Edytuj
                    </button>
                  </div>
                  <p className={styles.newsDate}>
                    {date_day}.{date_month}.{date_year}
                  </p>
                  <div className={styles.newsContainer}>
                    {photo_position === 'left' ? (
                      <>
                        <div className={styles.newsImg}>
                          <img src={photo} alt="bike" />
                          {/* <img src={require(`../images/${photo}`)} alt="bike" /> */}
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
                          <img src={photo} alt="bike" />

                          {/* <img src={require(`../images/${photo}`)} alt="bike" /> */}
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