import styles from './News.module.css';
import { nanoid } from 'nanoid';
import img from '../images/maciek3.jpg';
import img2 from '../images/maciek2.jpg';

export const News = () => {
  return (
    <>
      <div className={styles.news} id={nanoid()}>
        <div className={styles.newsTitleBox}>
          <p className={styles.newscommentTitle}>Co slychac w DOP?</p>
          <h1 className={styles.newsTitle}>Aktualności</h1>
        </div>
        <div className={styles.newsElement}>
          <p className={styles.newsSubTitle}>Tytuł Newsa</p>
          <p className={styles.newsDate}>20.01.2023, 15:00</p>
          <div className={styles.newsContainer}>
            <div className={styles.newsImg}>
              <img src={img} alt="Mężczyzna stojący na motocyklu." />
            </div>
            <div className={styles.newsText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              illum mollitia beatae aliquam temporibus facilis suscipit,
              tempora, veniam optio, non dicta eveniet qui dolorem amet est
              debitis omnis ex expedita? Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Laboriosam exercitationem fuga mollitia adipisci
              saepe cupiditate quidem quam ex doloremque expedita dolorum
              assumenda facilis, sed aperiam maiores? Sapiente suscipit nam
              voluptate?
            </div>
          </div>
        </div>
        <div className={styles.newsElement}>
          <p className={styles.newsSubTitle}>Tytuł Newsa</p>
          <p className={styles.newsDate}>19.01.2023, 18:50</p>
          <div className={styles.newsContainer}>
            <div className={styles.newsText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              illum mollitia beatae aliquam temporibus facilis suscipit,
              tempora, veniam optio, non dicta eveniet qui dolorem amet est
              debitis omnis ex expedita? Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Laboriosam exercitationem fuga mollitia adipisci
              saepe cupiditate quidem quam ex doloremque expedita dolorum
              assumenda facilis, sed aperiam maiores? Sapiente suscipit nam
              voluptate?
            </div>
            <div className={styles.newsImg}>
              <img src={img2} alt="Mężczyzna stojący na motocyklu." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
