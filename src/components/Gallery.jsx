import styles from './Gallery.module.css';
import selectStyles from './SelectMenuModal.module.css';
import { Nav } from './Nav';
import { useState, useEffect } from 'react';
import { addAlbum, saveAlbum } from '../services/operations';
import { nanoid } from 'nanoid';
import axios from 'axios';

import ico from '../images/more.png';
import ico_star from '../images/star.png';
import ico_del from '../images/delete.png';
import ico_hidden from '../images/hidden.png';
import ico_unhidden from '../images/unhidden.png';

import image1 from '../images/maciek.jpg';
import image2 from '../images/maciek2.jpg';
import image3 from '../images/maciek3.jpg';
import image4 from '../images/maciek4.jpg';
import image5 from '../images/motor.jpg';
import image6 from '../images/ai-bike2.jpg';

export const Gallery = ({ token }) => {
  const [gallery, setGallery] = useState(false);
  const [addGalleryModal, setAddGalleryModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [uploadedOne, setUploadedOne] = useState(false);
  const [newAlbumModal, setNewAlbumModal] = useState(false);
  const [album, setAlbum] = useState({});
  const [newAlbum, setNewAlbum] = useState({});
  const [data, setData] = useState([]);
  const [apiFiles, setApiFiles] = useState({});
  const [selectModal, setSelectModal] = useState(false);
  const [selectName, setSelectName] = useState(`Wybierz album z listy`);
  const [placeholder, setPlaceholder] = useState('Wybierz album z listy');

  const ref = () => {
    window.location.reload(false);
  };
  const getAlbums = async () => {
    try {
      const response = await axios.get(
        `https://65d784e727d9a3bc1d7b3c59.mockapi.io/gallery/`
      );
      setData(response.data);
      console.log('lodaing Albums....');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return console.error(error.message);
    }
  };

  useEffect(() => {
    getAlbums();
  }, []);

  const openGallery = () => {
    setGallery(true);
  };

  const closeGallery = () => {
    setGallery(false);
  };

  const openAddGallery = () => {
    setAddGalleryModal(true);
    setUploadedOne(false);
    setPlaceholder('Wybierz album z listy');
    setSelectName('Wybierz album z listy');
    setAlbum({
      album: '',
      id: '1',
      main_id: '0',
      hidden: false,
      description: '',
      photos: [
        {
          hidden: false,
          photo:
            'https://res.cloudinary.com/djwth1q7u/image/upload/v1708276435/images/rwpcnltckm2slhkxeuv0.jpg',
        },
        {
          hidden: false,
          photo:
            'https://res.cloudinary.com/djwth1q7u/image/upload/v1708351807/default.jpg',
        },
        {
          hidden: false,
          photo:
            'https://res.cloudinary.com/djwth1q7u/image/upload/v1708287555/images/osu9iovysnygf2xubjxw.jpg',
        },
        {
          hidden: false,
          photo:
            'https://res.cloudinary.com/djwth1q7u/image/upload/v1708324726/images/jpnpeac2dn19zxvctfca.jpg',
        },
      ],
    });
  };

  const closeAddGallery = () => {
    setAddGalleryModal(false);
  };

  const logOut = () => {
    localStorage.setItem('token', JSON.stringify({ token: '' }));
    setLoggedIn(!loggedIn);
    ref();
  };

  const toogleUploadOne = () => {
    setUploadedOne(!uploadedOne);
  };

  const openNewAlbumModal = () => {
    setNewAlbumModal(true);
    setNewAlbum({
      album: '',
      main_id: '0',
      hidden: false,
      description: '',
      photos: [],
    });
  };
  const closeNewAlbumModal = () => {
    setNewAlbumModal(false);
  };

  const onSubmit = async () => {
    console.log('Submit wciśnięty.');
    console.log('Gotowy do wyslania album', album);
    await saveAlbum(album, album.id);
    closeAddGallery();
    ref();
  };

  const onAddNewAlbum = () => {
    setAlbum({
      ...album,
      album: newAlbum.album,
      description: newAlbum.description,
    });
    closeNewAlbumModal();
    addAlbum(newAlbum);

    let dataArray = {
      album: newAlbum.album,
      description: newAlbum.description,
      hidden: false,
      id: 'new',
      main_id: '0',
      photos: [],
    };
    data.push(dataArray);
  };

  const hideImage = (index, photo) => {
    let albumArray = album.photos;
    let newAlbumRaw = { hidden: true, photo: photo };
    albumArray[index] = newAlbumRaw;
    setAlbum({ ...album, photos: albumArray });
  };
  const unhideImage = (index, photo) => {
    let albumArray = album.photos;
    let newAlbumRaw = { hidden: false, photo: photo };
    albumArray[index] = newAlbumRaw;
    setAlbum({ ...album, photos: albumArray });
  };

  const deletePhoto = index => {
    let albumArray = album.photos;
    albumArray.splice(index, 1);
    setAlbum({ ...album, photos: albumArray });
    if (index < album.main_id) {
      setAlbum({ ...album, main_id: (album.main_id - 1).toString() });
    }
  };

  const toogleSelectModal = () => {
    setSelectModal(!selectModal);
  };
  const changeName = e => {
    const newName = e;
    setSelectName(newName);
    setSelectModal(!selectModal);
    return newName;
  };

  const selectAlbumHandler = async e => {
    const results = data.filter(el => el.album === e);
    console.log('results filtered', results);
    console.log('results photos', results[0].photos);
    setAlbum({
      ...album,
      album: e,
      description: results[0].description,
      hidden: results[0].hidden,
      id: results[0].id,
      main_id: results[0].main_id,
      photos: results[0].photos,
    });
    console.log(album);
  };

  const uploadPhoto = async () => {
    let newArray = album.photos;
    const formData = new FormData();
    formData.append('file', apiFiles);
    formData.append('upload_preset', 'dop-bike');
    console.log('formData', formData);
    try {
      await axios
        .post(
          'https://api.cloudinary.com/v1_1/djwth1q7u/image/upload',
          formData
        )
        .then(response => {
          console.log(response);
          console.log(response.data.secure_url);
          // newArray.push(response.data.secure_url);
          newArray.push({ hidden: false, photo: response.data.secure_url });
          setAlbum({ ...album, photos: newArray });
          console.log('album mam nadzieje po zmianach', album);
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      {data && <></>}
      <div className={styles.galleryWrapper}>
        {newAlbumModal && (
          <>
            <div
              className={styles.galleryNewAlbumShadowBox}
              onClick={() => {
                closeNewAlbumModal();
              }}
            ></div>
            <div className={styles.galleryAddAlbumModal}>
              <button
                className={styles.galleryCloseBtn}
                onClick={() => {
                  closeNewAlbumModal();
                }}
              >
                +
              </button>
              <div className={styles.modalTextBox}>
                <p className={styles.modalNewAlbumTitle}>Stwórz nowy album</p>
                <div className={styles.modalNewAlbumContainer}>
                  <div className={styles.modalAddNewAlbumLeft}>
                    <p className={styles.modalNewAlbumSubTitle}>Nazwa:</p>
                    <input
                      type="text"
                      className={styles.modalNewAlbumTextInput}
                      onChange={e => {
                        setNewAlbum({ ...newAlbum, album: e.target.value });
                      }}
                    />
                    <p className={styles.modalNewAlbumSubTitle}>Opis:</p>
                    <textarea
                      type="textarea"
                      maxLength="100"
                      name="album"
                      className={styles.modalNewAlbumTextAreaInput}
                      onChange={e => {
                        setNewAlbum({
                          ...newAlbum,
                          description: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className={styles.modalAddNewAlbumRight}>
                    <div className={styles.galleryElement}>
                      <img
                        className={styles.gallerySubTitle}
                        src={image4}
                        alt="bike"
                      />
                      <p className={styles.gallerySubTitle}>
                        {newAlbum.album === ''
                          ? 'Przykładowy Tytuł'
                          : newAlbum.album}
                      </p>
                      <p className={styles.gallerySubText}>
                        {newAlbum.description === ''
                          ? 'Pzykładowy opis Albumu'
                          : newAlbum.description}
                      </p>
                      <button className={styles.galleryBtn}>Otwórz</button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    onAddNewAlbum();
                  }}
                  className={styles.addGalleryModalAlbumListBtn}
                >
                  Dodaj
                </button>
              </div>
            </div>
          </>
        )}
        {addGalleryModal && (
          <>
            <div
              className={styles.galleryShadowBox}
              onClick={() => {
                closeAddGallery();
              }}
            ></div>
            <div className={styles.addGalleryModal}>
              <button
                className={styles.galleryCloseBtn}
                onClick={() => {
                  closeAddGallery();
                }}
              >
                +
              </button>
              <p>Wybierz album z listy lub dodaj nowy.</p>
              <div className={styles.addGalleryModalAlbumList}>
                <button
                  className={styles.addGalleryModalAlbumListBtn}
                  onClick={() => {
                    openNewAlbumModal();
                  }}
                >
                  Nowy Album
                </button>
                <>
                  <div className={selectStyles.wrapper}>
                    <div
                      onClick={toogleSelectModal}
                      className={
                        selectName === placeholder
                          ? selectStyles.selectBtnGrey
                          : selectStyles.selectBtn
                      }
                    >
                      <span>{selectName}</span>
                    </div>
                    {selectModal && (
                      <div className={selectStyles.optionsContainer}>
                        <ul className={selectStyles.options}>
                          {data.map(({ album }) => {
                            return (
                              <li
                                key={nanoid()}
                                onClick={e => {
                                  changeName(e.target.innerText);
                                  selectAlbumHandler(e.target.innerText);
                                }}
                                className={selectStyles.option}
                              >
                                <span>{album}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                  {selectModal && (
                    <div
                      className={selectStyles.backdrop}
                      onClick={toogleSelectModal}
                    ></div>
                  )}
                </>
              </div>
              <div className={styles.addGalleryModalFileUplad}>
                <ul className={styles.addGalleryModalFileUpladList}>
                  {album.album.length > 0 && (
                    <li className={styles.addGalleryModalFileUpladContainer}>
                      <input
                        type="file"
                        accept="image/*;capture=camera"
                        className={styles.addGalleryModalFileUpladInput}
                        onChange={e => {
                          setApiFiles(e.target.files[0]);
                          console.log(apiFiles);
                        }}
                      />
                      <button
                        className={styles.addGalleryModalFileUpladInputBtn}
                        onClick={() => {
                          toogleUploadOne();
                          uploadPhoto();
                        }}
                      >
                        Upload
                      </button>
                    </li>
                  )}
                </ul>
              </div>

              <div className={styles.addGalleryPreviewWrapper}>
                <div className={styles.addGalleryPreviewTitleWrapper}>
                  {album.album.length > 0 && (
                    <p className={styles.addGalleryPreviewTitle}>
                      Wybrany Album:
                    </p>
                  )}
                  <span className={styles.addGalleryPreviewTitleAlbum}>
                    {album.album}
                  </span>
                </div>
                <div className={styles.addGalleryImagesPreviewWrapper}>
                  {album.album.length === 0 ? (
                    <p className={styles.addGalleryPreviewTitle}>
                      Wybierz Album aby zobaczyć podgląd zawartości
                    </p>
                  ) : album.photos.length === 0 ? (
                    <p className={styles.addGalleryPreviewTitle}>Brak zdjęć.</p>
                  ) : (
                    <ul className={styles.addGalleryImagesPreviewList}>
                      {album.photos.map(({ hidden, photo }, index) => {
                        const mainIndex = album.main_id;
                        return (
                          <li
                            className={
                              hidden
                                ? styles.addGalleryImagesPreviewElHidden
                                : mainIndex === index.toString()
                                ? styles.addGalleryImagesPreviewElMain
                                : styles.addGalleryImagesPreviewEl
                            }
                            key={nanoid()}
                            id={index}
                          >
                            {hidden ? (
                              <img
                                src={ico_hidden}
                                alt=""
                                className={
                                  styles.addGalleryImagesPreviewElHiddenIco
                                }
                              />
                            ) : mainIndex === index.toString() ? (
                              <img
                                src={ico_star}
                                alt=""
                                className={
                                  styles.addGalleryImagesPreviewElHiddenIco
                                }
                              />
                            ) : (
                              <></>
                            )}
                            {hidden && (
                              <div
                                className={styles.addGalleryHiddenOverlay}
                              ></div>
                            )}
                            <div
                              className={styles.addGalleryImagesPreviewElIco}
                            >
                              <img src={ico} alt="3 kropki" />
                              <ul className={styles.dropDownList}>
                                {hidden ? (
                                  <></>
                                ) : mainIndex === index.toString() ? (
                                  <></>
                                ) : (
                                  <li
                                    className={styles.dropDownEl}
                                    onClick={() => {
                                      setAlbum({
                                        ...album,
                                        main_id: index.toString(),
                                      });
                                    }}
                                  >
                                    <img src={ico_star} alt="gwiazdka" />
                                    <p>Główne</p>
                                  </li>
                                )}

                                {mainIndex === index.toString() ? (
                                  <></>
                                ) : hidden ? (
                                  <li
                                    className={styles.dropDownEl}
                                    onClick={() => {
                                      unhideImage(
                                        index,
                                        album.photos[index].photo
                                      );
                                    }}
                                  >
                                    <img
                                      src={ico_unhidden}
                                      alt="przekreślone oko"
                                    />
                                    <p>Odkryj</p>
                                  </li>
                                ) : (
                                  <li
                                    className={styles.dropDownEl}
                                    onClick={() => {
                                      hideImage(
                                        index,
                                        album.photos[index].photo
                                      );
                                    }}
                                  >
                                    <img
                                      src={ico_hidden}
                                      alt="przekreślone oko"
                                    />
                                    <p>Ukryj</p>
                                  </li>
                                )}
                                <li
                                  className={styles.dropDownEl}
                                  onClick={() => {
                                    mainIndex === index.toString()
                                      ? alert(
                                          'Nie możesz skasować zdjęcia głównego.'
                                        )
                                      : deletePhoto(index);
                                  }}
                                >
                                  <img src={ico_del} alt="kosz na śmieci" />
                                  <p>Usuń</p>
                                </li>
                              </ul>
                            </div>
                            <img
                              src={photo}
                              alt="motor"
                              className={styles.addGalleryImagesPreviewElImg}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>

              <button
                className={styles.addGalleryModalAlbumListBtn}
                onClick={() => {
                  album.album.length > 0 ? onSubmit() : alert('Brak zmian');
                }}
              >
                Zapisz w Galerii
              </button>
            </div>
          </>
        )}

        {gallery && (
          <>
            <div
              className={styles.galleryShadowBox}
              onClick={() => {
                closeGallery();
              }}
            ></div>
            <div className={styles.galleryMainModal}>
              <button
                className={styles.galleryCloseBtn}
                onClick={() => {
                  closeGallery();
                }}
              >
                +
              </button>
              <div className={styles.modalTextBox}>
                <p className={styles.modalTitle}>Tytuł Galerii</p>
                <p className={styles.modalSubTitle}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus qui corrupti vel quibusdam sit explicabo hic
                  delectus.
                </p>
              </div>
              <div className={styles.galleryWindowWrapper}>
                <button className={styles.galleryWindowBtn}>Poprzedni</button>
                <div className={styles.galleryWindow}></div>
                <button className={styles.galleryWindowBtn}>Następny</button>
              </div>
              <div className={styles.gallerySmallWindowWrapper}>
                <div className={styles.gallerySmallWindow}></div>
                <div className={styles.gallerySmallWindow}></div>
                <div className={styles.gallerySmallWindow}></div>
                <div className={styles.gallerySmallWindow}></div>
                <div className={styles.gallerySmallWindow}></div>
                <div className={styles.gallerySmallWindow}></div>
              </div>
            </div>
          </>
        )}
        <div className={styles.galleryAdminPanel}>
          <button
            className={styles.addGalleryBtn}
            onClick={() => {
              openAddGallery();
            }}
          >
            +
          </button>

          <button className={styles.loBtn} onClick={logOut}>
            Logout
          </button>
        </div>
        <Nav selected={'gallery'} token={token} />
        <p className={styles.galleryTitle}>Galeria!</p>
        <p className={styles.galleryText}>
          Na tej stronie pojawią się zdjęcia.
        </p>
        <div className={styles.galleryMain}>
          <ul className={styles.galleryList}>
            <li
              className={styles.galleryElement}
              onClick={() => {
                openGallery();
              }}
            >
              <img className={styles.gallerySubTitle} src={image1} alt="bike" />
              <p className={styles.gallerySubTitle}>Wadowice - 2024</p>
              <p className={styles.gallerySubText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus qui corrupti vel quibusdam sit explicabo hic delectus.
              </p>
              <button className={styles.galleryBtn}>Otwórz</button>
            </li>
            <li
              className={styles.galleryElement}
              onClick={() => {
                openGallery();
              }}
            >
              <img className={styles.gallerySubTitle} src={image2} alt="bike" />
              <p className={styles.gallerySubTitle}>Ciachcin - 2024</p>
              <p className={styles.gallerySubText}>
                Działo się!! Ciachcin to obowiązkowy punkt wizyty w trójmieście!
              </p>
              <button className={styles.galleryBtn}>Otwórz</button>
            </li>
            <li
              className={styles.galleryElement}
              onClick={() => {
                openGallery();
              }}
            >
              <img className={styles.gallerySubTitle} src={image3} alt="bike" />
              <p className={styles.gallerySubTitle}>Sosnowiec - 2024</p>
              <p className={styles.gallerySubText}>
                Złomiarze go nienawidzą... Odkrył prosty sekret jak zarobić
                milion złotych w 5 minut. Klinkij i przekonaj się sam.
              </p>
              <button className={styles.galleryBtn}>Otwórz</button>
            </li>
            <li
              className={styles.galleryElement}
              onClick={() => {
                openGallery();
              }}
            >
              <img className={styles.gallerySubTitle} src={image4} alt="bike" />
              <p className={styles.gallerySubTitle}>Koszelówka - 2024</p>
              <p className={styles.gallerySubText}>
                Podobno jgdzieś jest tu jezioro. Ale czy na pewno?
              </p>
              <button className={styles.galleryBtn}>Otwórz</button>
            </li>
            <li
              className={styles.galleryElement}
              onClick={() => {
                openGallery();
              }}
            >
              <img className={styles.gallerySubTitle} src={image5} alt="bike" />
              <p className={styles.gallerySubTitle}>Parking</p>
              <p className={styles.gallerySubText}>
                Foty z parkingu. Takie ooo
              </p>
              <button className={styles.galleryBtn}>Otwórz</button>
            </li>
            <li
              className={styles.galleryElement}
              onClick={() => {
                openGallery();
              }}
            >
              <img className={styles.gallerySubTitle} src={image6} alt="bike" />
              <p className={styles.gallerySubTitle}>Tajne zdjęcia</p>
              <p className={styles.gallerySubText}>Ściśle tajne i poufne.</p>
              <button className={styles.galleryBtn}>Otwórz</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};