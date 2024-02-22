import React, { useState } from 'react';
import styles from './SelectMenuModal.module.css';
import { nanoid } from 'nanoid';

export const SelectMenuModal = ({ placeholder, onClick }) => {
  const categories = [
    { category: 'Wadowice - 2024' },
    { category: 'Ciachcin - 2024' },
    { category: 'Sosnowiec - 2024' },
    { category: 'Koszelówka - 2024' },
    { category: 'Parking' },
    { category: 'Tajne zdjęcia' },
  ];

  const data = categories;

  const [modal, setModal] = useState(false);
  const [name, setName] = useState(`${placeholder}`);

  const toogleModal = () => {
    setModal(!modal);
  };
  const changeName = e => {
    const newName = e.innerText;
    setName(newName);
    setModal(!modal);
    return newName;
  };

  return (
    <>
      <div className={styles.wrapper}>
        {name === placeholder ? (
          <div onClick={toogleModal} className={styles.selectBtnGrey}>
            <span>{name}</span>
          </div>
        ) : (
          <div onClick={toogleModal} className={styles.selectBtn}>
            <span>{name}</span>
          </div>
        )}
        {modal && (
          <div className={styles.optionsContainer}>
            <ul className={styles.options}>
              {data.map(({ category }) => {
                return (
                  <li
                    key={nanoid()}
                    onClick={e => {
                      changeName(e.target);
                      onClick(e.target.innerText);
                    }}
                    className={styles.option}
                  >
                    <span>{category}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      {modal && <div className={styles.backdrop} onClick={toogleModal}></div>}
    </>
  );
};
