import styles from './Review.module.css';
import { useState } from 'react';
import { getDay, getMonth, getDefYear } from 'services/DateFunctions';

export const Review = () => {
  const [comment, setComment] = useState({
    name: '',
    text: '',
    verify: false,
    date: '',
  });

  const setData = () => {
    const date = Date.now();
    const day = getDay(date);
    const month = getMonth(date);
    const year = getDefYear(date);
    setComment({ ...comment, date: `${day}.${month}.${year}` });
  };

  const addComment = e => {
    e.preventDefault();
    setData();
    console.log('komentarz: ', comment);
  };
  return (
    <>
      <div className={styles.reviewWrapper}>
        <div className={styles.reviewMain}>
          <ul className={styles.reviewList}>
            <li className={styles.reviewListEl}>
              <p className={styles.reviewDate}>19.02.2024</p>
              <p>
                Super występ. Jak będę duży też kiedyś będę chciał jeździć na
                motorze. Kiedy pokazy w Małej Wsi?
              </p>
              <div className={styles.reviewSign}>
                <p className={styles.reviewSignName}>Krzysiek12PL</p>
              </div>
            </li>
            <li className={styles.reviewListEl}>
              <p className={styles.reviewDate}>19.02.2024</p>
              <p>
                Super występ. Jak będę duży też kiedyś będę chciał jeździć na
                motorze. Kiedy pokazy w Małej Wsi?
              </p>
              <div className={styles.reviewSign}>
                <p className={styles.reviewSignName}>Krzysiek12PL</p>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.reviewComment}>
          <form className={styles.reviewCommentForm} onSubmit={addComment}>
            <input
              type="text"
              name="name"
              placeholder="imię"
              required
              onChange={e => {
                setComment({ ...comment, name: e.target.value });
                setData();
              }}
            />
            <input
              type="textarea"
              onChange={e => {
                setComment({ ...comment, text: e.target.value });
              }}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};
