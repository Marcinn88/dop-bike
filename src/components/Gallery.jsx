import styles from './Gallery.module.css';
import { Nav } from './Nav';
import { useState } from 'react';
import { SelectMenuModal } from './SelectMenuModal';
import ico from '../images/more.png';
import ico_star from '../images/star.png';
import ico_del from '../images/delete.png';
import ico_hidden from '../images/hidden.png';

import image1 from '../images/maciek.jpg';
import image2 from '../images/maciek2.jpg';
import image3 from '../images/maciek3.jpg';
import image4 from '../images/maciek4.jpg';
import image5 from '../images/motor.jpg';
import image6 from '../images/ai-bike2.jpg';

export const Gallery = ({ token }) => {
  // const galleryApi = 'https://65d784e727d9a3bc1d7b3c59.mockapi.io/';

  const TestGallery = [
    {
      album: 'Parking',
      name: 'Zdjęcie główne',
      main: true,
      hidden: false,
      photo:
        'https://res.cloudinary.com/djwth1q7u/image/upload/v1708351807/default.jpg',
    },
    {
      album: 'Parking',
      name: 'Zdjecie dwa',
      main: false,
      hidden: false,
      photo:
        'https://res.cloudinary.com/djwth1q7u/image/upload/v1708351807/default.jpg',
    },
    {
      album: 'Parking',
      name: 'Zdjecie trzy',
      main: false,
      hidden: false,
      photo:
        'https://res.cloudinary.com/djwth1q7u/image/upload/v1708351807/default.jpg',
    },
    {
      album: 'Parking',
      name: 'Zdjecie cztery',
      main: false,
      hidden: true,
      photo:
        'https://res.cloudinary.com/djwth1q7u/image/upload/v1708351807/default.jpg',
    },
    {
      album: 'Tajne',
      name: 'Zdjecie piec',
      main: false,
      hidden: false,
      photo:
        'https://res.cloudinary.com/djwth1q7u/image/upload/v1708351807/default.jpg',
    },
    {
      album: 'Tajne',
      name: 'Zdjecie szesc',
      main: true,
      hidden: false,
      photo:
        'https://res.cloudinary.com/djwth1q7u/image/upload/v1708351807/default.jpg',
    },
  ];

  const TestAlbum = {
    album: 'Parking',
    description: 'Zdjęcia z parkingu. Takie, że oooo.',
    main_id: '1',
    hidden: false,
    photo: [
      'https://res.cloudinary.com/djwth1q7u/image/upload/v1708351807/default.jpg',
      'https://res.cloudinary.com/djwth1q7u/image/upload/v1708351807/default.jpg',
      'https://res.cloudinary.com/djwth1q7u/image/upload/v1708351807/default.jpg',
    ],
  };

  const [gallery, setGallery] = useState(false);
  const [addGalleryModal, setAddGalleryModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [uploadedOne, setUploadedOne] = useState(false);
  const [postPhoto, setPostPhoto] = useState({});
  const [newAlbumModal, setNewAlbumModal] = useState(false);
  const [album, setAlbum] = useState({});

  const ref = () => {
    window.location.reload(false);
  };
  const openGallery = () => {
    setGallery(true);
  };

  const closeGallery = () => {
    setGallery(false);
  };

  const openAddGallery = () => {
    setAddGalleryModal(true);
    setUploadedOne(false);
    console.log(TestAlbum);
    console.log(TestGallery);
    const TestResults = TestGallery.filter(el => el.album === 'Tajne');
    const TestMainResult = TestResults.filter(el => el.main === true);
    const TestMainTester = data => {
      return data.length > 0 ? true : false;
    };
    console.log(TestResults);
    console.log(TestMainResult);
    console.log(TestMainTester(TestMainResult));
    setPostPhoto({
      album: '',
      name: '',
      main: false,
      hidden: false,
      photo: '',
    });
    setAlbum({
      album: '',
      description: '',
      main_id: '1',
      hidden: false,
      photo: [],
    });
  };

  const closeAddGallery = () => {
    setAddGalleryModal(false);
  };

  const logOut = () => {
    localStorage.setItem('token', JSON.stringify({ token: '' }));
    setLoggedIn(!loggedIn);
    ref();
    console.log('Wylogowano');
  };

  const toogleUploadOne = () => {
    setUploadedOne(!uploadedOne);
  };

  const openNewAlbumModal = () => {
    setNewAlbumModal(true);
  };
  const closeNewAlbumModal = () => {
    setNewAlbumModal(false);
  };

  const onSubmit = () => {
    console.log('Submit wciśnięty.');
    console.log('postPhoto', postPhoto);
  };

  const onAddNewAlbum = () => {
    console.log(album);
    closeNewAlbumModal();
  };

  return (
    <>
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
                        setAlbum({ ...album, album: e.target.value });
                      }}
                    />
                    <p className={styles.modalNewAlbumSubTitle}>Opis:</p>
                    <textarea
                      type="textarea"
                      maxLength="100"
                      name="album"
                      className={styles.modalNewAlbumTextAreaInput}
                      onChange={e => {
                        setAlbum({ ...album, description: e.target.value });
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
                        {album.album === '' ? 'Przykładowy Tytuł' : album.album}
                      </p>
                      <p className={styles.gallerySubText}>
                        {album.description === ''
                          ? 'Pzykładowy opis Albumu'
                          : album.description}
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
                <SelectMenuModal
                  placeholder={'Wybierz album z listy.'}
                  onClick={e => {
                    setPostPhoto({ ...postPhoto, album: e });
                  }}
                />
              </div>
              <div className={styles.addGalleryModalFileUplad}>
                <ul className={styles.addGalleryModalFileUpladList}>
                  <li className={styles.addGalleryModalFileUpladContainer}>
                    {!uploadedOne ? (
                      <>
                        <input
                          type="file"
                          className={styles.addGalleryModalFileUpladInput}
                        />
                        <button
                          className={styles.addGalleryModalFileUpladInputBtn}
                          onClick={() => {
                            toogleUploadOne();
                          }}
                        >
                          Upload
                        </button>
                      </>
                    ) : (
                      <>
                        <input
                          disabled
                          type="file"
                          className={
                            styles.addGalleryModalFileUpladInputDisabled
                          }
                        />
                        <button
                          className={
                            styles.addGalleryModalFileUpladInputBtnDisabled
                          }
                        >
                          Zapisano
                        </button>
                      </>
                    )}
                  </li>
                </ul>
              </div>

              <div className={styles.addGalleryPreviewWrapper}>
                <div className={styles.addGalleryPreviewTitleWrapper}>
                  <p className={styles.addGalleryPreviewTitle}>
                    Wybrany Album:
                  </p>
                  <span className={styles.addGalleryPreviewTitleAlbum}>
                    {album.album}
                  </span>
                </div>
                <div className={styles.addGalleryImagesPreviewWrapper}>
                  <ul className={styles.addGalleryImagesPreviewList}>
                    <li className={styles.addGalleryImagesPreviewEl}>
                      <div className={styles.addGalleryImagesPreviewElIco}>
                        <img src={ico} alt="3 kropki" />
                        <ul className={styles.dropDownList}>
                          <li className={styles.dropDownEl}>
                            <img src={ico_star} alt="gwiazdka" />
                            <p>Główne</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_hidden} alt="przekreślone oko" />
                            <p>Ukryj</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_del} alt="kosz na śmieci" />
                            <p>Usuń</p>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className={styles.addGalleryImagesPreviewEl}>
                      <div className={styles.addGalleryImagesPreviewElIco}>
                        <img src={ico} alt="3 kropki" />
                        <ul className={styles.dropDownList}>
                          <li className={styles.dropDownEl}>
                            <img src={ico_star} alt="gwiazdka" />
                            <p>Główne</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_hidden} alt="przekreślone oko" />
                            <p>Ukryj</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_del} alt="kosz na śmieci" />
                            <p>Usuń</p>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className={styles.addGalleryImagesPreviewEl}>
                      <div className={styles.addGalleryImagesPreviewElIco}>
                        <img src={ico} alt="3 kropki" />
                        <ul className={styles.dropDownList}>
                          <li className={styles.dropDownEl}>
                            <img src={ico_star} alt="gwiazdka" />
                            <p>Główne</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_hidden} alt="przekreślone oko" />
                            <p>Ukryj</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_del} alt="kosz na śmieci" />
                            <p>Usuń</p>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className={styles.addGalleryImagesPreviewEl}>
                      <div className={styles.addGalleryImagesPreviewElIco}>
                        <img src={ico} alt="3 kropki" />
                        <ul className={styles.dropDownList}>
                          <li className={styles.dropDownEl}>
                            <img src={ico_star} alt="gwiazdka" />
                            <p>Główne</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_hidden} alt="przekreślone oko" />
                            <p>Ukryj</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_del} alt="kosz na śmieci" />
                            <p>Usuń</p>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className={styles.addGalleryImagesPreviewEl}>
                      <div className={styles.addGalleryImagesPreviewElIco}>
                        <img src={ico} alt="3 kropki" />
                        <ul className={styles.dropDownList}>
                          <li className={styles.dropDownEl}>
                            <img src={ico_star} alt="gwiazdka" />
                            <p>Główne</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_hidden} alt="przekreślone oko" />
                            <p>Ukryj</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_del} alt="kosz na śmieci" />
                            <p>Usuń</p>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className={styles.addGalleryImagesPreviewEl}>
                      <div className={styles.addGalleryImagesPreviewElIco}>
                        <img src={ico} alt="3 kropki" />
                        <ul className={styles.dropDownList}>
                          <li className={styles.dropDownEl}>
                            <img src={ico_star} alt="gwiazdka" />
                            <p>Główne</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_hidden} alt="przekreślone oko" />
                            <p>Ukryj</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_del} alt="kosz na śmieci" />
                            <p>Usuń</p>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className={styles.addGalleryImagesPreviewEl}>
                      <div className={styles.addGalleryImagesPreviewElIco}>
                        <img src={ico} alt="3 kropki" />
                        <ul className={styles.dropDownList}>
                          <li className={styles.dropDownEl}>
                            <img src={ico_star} alt="gwiazdka" />
                            <p>Główne</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_hidden} alt="przekreślone oko" />
                            <p>Ukryj</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_del} alt="kosz na śmieci" />
                            <p>Usuń</p>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className={styles.addGalleryImagesPreviewEl}>
                      <div className={styles.addGalleryImagesPreviewElIco}>
                        <img src={ico} alt="3 kropki" />
                        <ul className={styles.dropDownList}>
                          <li className={styles.dropDownEl}>
                            <img src={ico_star} alt="gwiazdka" />
                            <p>Główne</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_hidden} alt="przekreślone oko" />
                            <p>Ukryj</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_del} alt="kosz na śmieci" />
                            <p>Usuń</p>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className={styles.addGalleryImagesPreviewEl}>
                      <div className={styles.addGalleryImagesPreviewElIco}>
                        <img src={ico} alt="3 kropki" />
                        <ul className={styles.dropDownList}>
                          <li className={styles.dropDownEl}>
                            <img src={ico_star} alt="gwiazdka" />
                            <p>Główne</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_hidden} alt="przekreślone oko" />
                            <p>Ukryj</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_del} alt="kosz na śmieci" />
                            <p>Usuń</p>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className={styles.addGalleryImagesPreviewEl}>
                      <div className={styles.addGalleryImagesPreviewElIco}>
                        <img src={ico} alt="3 kropki" />
                        <ul className={styles.dropDownList}>
                          <li className={styles.dropDownEl}>
                            <img src={ico_star} alt="gwiazdka" />
                            <p>Główne</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_hidden} alt="przekreślone oko" />
                            <p>Ukryj</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_del} alt="kosz na śmieci" />
                            <p>Usuń</p>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className={styles.addGalleryImagesPreviewEl}>
                      <div className={styles.addGalleryImagesPreviewElIco}>
                        <img src={ico} alt="3 kropki" />
                        <ul className={styles.dropDownList}>
                          <li className={styles.dropDownEl}>
                            <img src={ico_star} alt="gwiazdka" />
                            <p>Główne</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_hidden} alt="przekreślone oko" />
                            <p>Ukryj</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_del} alt="kosz na śmieci" />
                            <p>Usuń</p>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className={styles.addGalleryImagesPreviewEl}>
                      <div className={styles.addGalleryImagesPreviewElIco}>
                        <img src={ico} alt="3 kropki" />
                        <ul className={styles.dropDownList}>
                          <li className={styles.dropDownEl}>
                            <img src={ico_star} alt="gwiazdka" />
                            <p>Główne</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_hidden} alt="przekreślone oko" />
                            <p>Ukryj</p>
                          </li>
                          <li className={styles.dropDownEl}>
                            <img src={ico_del} alt="kosz na śmieci" />
                            <p>Usuń</p>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                className={styles.addGalleryModalAlbumListBtn}
                onClick={() => {
                  onSubmit();
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
