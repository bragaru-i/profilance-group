import React from 'react';
import { connect } from 'react-redux';

import moment from 'moment';

import styles from './Article.module.scss';
const Article = (props) => {
  const {
    params: { newsid },
  } = props.match;
  const data = props.news.find((article) => article.id === newsid);
  return (
    <div className={styles.Container}>
      <div className={styles.Title}>
        <span className={styles.Name}>{data.name}</span>
        <span className={styles.Time}>on {moment(data.time).format('LLL')}</span>
      </div>
      <div> {data.text}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({ news: state.news });
export default connect(mapStateToProps)(Article);
