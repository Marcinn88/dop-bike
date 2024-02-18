import styles from './Gallery.module.css';
import { Nav } from './Nav';

export const Gallery = ({ token }) => {
  return (
    <>
      <div className={styles.galleryWrapper}>
        <Nav selected={'gallery'} token={token} />
        <p className={styles.galleryTitle}>Galeria!</p>
        <p className={styles.galleryText}>
          Na tej stronie pojawią się zdjęcia.
        </p>
      </div>
    </>
  );
};
