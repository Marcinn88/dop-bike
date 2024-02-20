import styles from './Gallery.module.css';
import { Nav } from './Nav';
import { useState } from 'react';

import image1 from '../images/maciek.jpg';
import image2 from '../images/maciek2.jpg';
import image3 from '../images/maciek3.jpg';
import image4 from '../images/maciek4.jpg';
import image5 from '../images/motor.jpg';
import image6 from '../images/ai-bike2.jpg';

export const Gallery = ({ token }) => {
  const [gallery, setGallery] = useState(false);

  const openGallery = () => {
    setGallery(true);
  };

  const closeGallery = () => {
    setGallery(false);
  };

  return (
    <>
      <div className={styles.galleryWrapper}>
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
                onClick={() => {
                  closeGallery();
                }}
              >
                Zamknij
              </button>
            </div>
          </>
        )}

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
