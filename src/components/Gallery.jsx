import styles from './Gallery.module.css';
import { Nav } from './Nav';
import image1 from '../images/maciek.jpg';
import image2 from '../images/maciek2.jpg';
import image3 from '../images/maciek3.jpg';
import image4 from '../images/maciek4.jpg';
import image5 from '../images/motor.jpg';
import image6 from '../images/ai-bike2.jpg';

export const Gallery = ({ token }) => {
  return (
    <>
      <div className={styles.galleryWrapper}>
        <Nav selected={'gallery'} token={token} />
        <p className={styles.galleryTitle}>Galeria!</p>
        <p className={styles.galleryText}>
          Na tej stronie pojawią się zdjęcia.
        </p>
        <div className={styles.galleryMain}>
          <ul className={styles.galleryList}>
            <li className={styles.galleryElement}>
              <img className={styles.gallerySubTitle} src={image1} alt="bike" />
              <p className={styles.gallerySubTitle}>Wadowice - 2024</p>
              <p className={styles.gallerySubText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus qui corrupti vel quibusdam sit explicabo hic delectus.
              </p>
              <button className={styles.galleryBtn}>Otwórz</button>
            </li>
            <li className={styles.galleryElement}>
              <img className={styles.gallerySubTitle} src={image2} alt="bike" />
              <p className={styles.gallerySubTitle}>Ciachcin - 2024</p>
              <p className={styles.gallerySubText}>Ciachcin - 2024</p>
              <button className={styles.galleryBtn}>Otwórz</button>
            </li>
            <li className={styles.galleryElement}>
              <img className={styles.gallerySubTitle} src={image3} alt="bike" />
              <p className={styles.gallerySubTitle}>Sosnowiec - 2024</p>
              <p className={styles.gallerySubText}>Sosnowiec - 2024</p>
              <button className={styles.galleryBtn}>Otwórz</button>
            </li>
            <li className={styles.galleryElement}>
              <img className={styles.gallerySubTitle} src={image4} alt="bike" />
              <p className={styles.gallerySubTitle}>Koszelówka - 2024</p>
              <p className={styles.gallerySubText}>Koszelówka - 2024</p>
              <button className={styles.galleryBtn}>Otwórz</button>
            </li>
            <li className={styles.galleryElement}>
              <img className={styles.gallerySubTitle} src={image5} alt="bike" />
              <p className={styles.gallerySubTitle}>Parking</p>
              <p className={styles.gallerySubText}>Parking</p>
              <button className={styles.galleryBtn}>Otwórz</button>
            </li>
            <li className={styles.galleryElement}>
              <img className={styles.gallerySubTitle} src={image6} alt="bike" />
              <p className={styles.gallerySubTitle}>Tajne zdjęcia</p>
              <p className={styles.gallerySubText}>Tajne zdjęcia</p>
              <button className={styles.galleryBtn}>Otwórz</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
