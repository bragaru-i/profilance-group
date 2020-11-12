import React from 'react';

import { Link } from 'react-router-dom';

import styles from './ArticleInAList.module.scss';
const ArticleInAList = ({
  name,
  text,
  id,
  approveNews,
  deleteNews,
  date,
  isAdmin,
  isAproved,
}) => {
  let display = '';
  display = isAdmin && (
    <li className={styles.List_Item}>
      <Link to={`/profilance-group/news/${id}`}>
        <div className={styles.List_Author}>
          {name} on {date}
        </div>
        <div>{text}</div>
      </Link>
      <div className={styles.Actions}>
        {!isAproved && (
          <span onClick={() => approveNews(id)} className={styles.Approve}>
            approve
          </span>
        )}
        <span onClick={() => deleteNews(id)} className={styles.Delete}>
          delete
        </span>
      </div>
    </li>
  );

  if (!isAdmin && isAproved) {
    display = (
      <li className={styles.List_Item}>
        <Link to={`/profilance-group/news/${id}`}>
          <div className={styles.List_Author}>
            {name} on {date}
          </div>
          <div>{text}</div>
        </Link>
      </li>
    );
  }
  return <>{display}</>;
};

export default ArticleInAList;
