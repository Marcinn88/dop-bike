import styles from './Gallery.module.css';
import { Nav } from './Nav';
import image1 from '../images/maciek.jpg';
import image2 from '../images/maciek2.jpg';
import image3 from '../images/maciek3.jpg';

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
              <p className={styles.gallerySubTitle}>Wadowice - 2024</p>
              <img className={styles.gallerySubTitle} src={image1} alt="bike" />
              <button className={styles.galleryBtn}>Otwórz</button>
            </li>
            <li className={styles.galleryElement}>
              <p className={styles.gallerySubTitle}>Ciachcin - 2024</p>
              <img className={styles.gallerySubTitle} src={image2} alt="bike" />
              <button className={styles.galleryBtn}>Otwórz</button>
            </li>
            <li className={styles.galleryElement}>
              <p className={styles.gallerySubTitle}>Sosnowiec - 2024</p>
              <img className={styles.gallerySubTitle} src={image3} alt="bike" />
              <button className={styles.galleryBtn}>Otwórz</button>
            </li>
            <li className={styles.galleryElement}>
              <p className={styles.gallerySubTitle}>Wadowice - 2024</p>
              <img className={styles.gallerySubTitle} src={image1} alt="bike" />
              <button className={styles.galleryBtn}>Otwórz</button>
            </li>
            <li className={styles.galleryElement}>
              <p className={styles.gallerySubTitle}>Ciachcin - 2024</p>
              <img className={styles.gallerySubTitle} src={image2} alt="bike" />
              <button className={styles.galleryBtn}>Otwórz</button>
            </li>
            <li className={styles.galleryElement}>
              <p className={styles.gallerySubTitle}>Sosnowiec - 2024</p>
              <img className={styles.gallerySubTitle} src={image3} alt="bike" />
              <button className={styles.galleryBtn}>Otwórz</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
