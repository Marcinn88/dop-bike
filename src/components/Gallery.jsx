import styles from './Gallery.module.css';
import { Nav } from './Nav';
import { useState } from 'react';

import image1 from '../images/maciek.jpg';
import image2 from '../images/maciek2.jpg';
import image3 from '../images/maciek3.jpg';
import image4 from '../images/maciek4.jpg';
import image5 from '../images/motor.jpg';
import image6 from '../images/ai-bike2.jpg';
import { SelectMenuModal } from './SelectMenuModal';

export const Gallery = ({ token }) => {
  const [gallery, setGallery] = useState(false);
  const [addGalleryModal, setAddGalleryModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [uploadedOne, setUploadedOne] = useState(false);
  const [uploadedTwo, setUploadedTwo] = useState(false);
  const [uploadedThree, setUploadedThree] = useState(false);
  const [uploadedFour, setUploadedFour] = useState(false);
  const [uploadedFive, setUploadedFive] = useState(false);

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
    setUploadedTwo(false);
    setUploadedThree(false);
    setUploadedFour(false);
    setUploadedFive(false);
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
  const toogleUploadTwo = () => {
    setUploadedTwo(!uploadedTwo);
  };
  const toogleUploadThree = () => {
    setUploadedThree(!uploadedThree);
  };
  const toogleUploadFour = () => {
    setUploadedFour(!uploadedFour);
  };
  const toogleUploadFive = () => {
    setUploadedFive(!uploadedFive);
  };

  return (
    <>
      <div className={styles.galleryWrapper}>
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
                <button className={styles.addGalleryModalAlbumListBtn}>
                  Nowy Album
                </button>
                <SelectMenuModal placeholder={'Wybierz album z listy.'} />
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
                        />{' '}
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
                  <li className={styles.addGalleryModalFileUpladContainer}>
                    {!uploadedTwo ? (
                      <>
                        <input
                          type="file"
                          className={styles.addGalleryModalFileUpladInput}
                        />{' '}
                        <button
                          className={styles.addGalleryModalFileUpladInputBtn}
                          onClick={() => {
                            toogleUploadTwo();
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
                        />{' '}
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
                  <li className={styles.addGalleryModalFileUpladContainer}>
                    {!uploadedThree ? (
                      <>
                        <input
                          type="file"
                          className={styles.addGalleryModalFileUpladInput}
                        />{' '}
                        <button
                          className={styles.addGalleryModalFileUpladInputBtn}
                          onClick={() => {
                            toogleUploadThree();
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
                        />{' '}
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
                  <li className={styles.addGalleryModalFileUpladContainer}>
                    {!uploadedFour ? (
                      <>
                        <input
                          type="file"
                          className={styles.addGalleryModalFileUpladInput}
                        />{' '}
                        <button
                          className={styles.addGalleryModalFileUpladInputBtn}
                          onClick={() => {
                            toogleUploadFour();
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
                        />{' '}
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
                  <li className={styles.addGalleryModalFileUpladContainer}>
                    {!uploadedFive ? (
                      <>
                        <input
                          type="file"
                          className={styles.addGalleryModalFileUpladInput}
                        />{' '}
                        <button
                          className={styles.addGalleryModalFileUpladInputBtn}
                          onClick={() => {
                            toogleUploadFive();
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
                        />{' '}
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
