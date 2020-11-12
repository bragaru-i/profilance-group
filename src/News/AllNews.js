import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import moment from 'moment';
import ArticleInAList from './components/ArticleInAList/ArticleInAList';
import * as newsAction from './actions/newsAction';
import styles from './AllNews.module.scss';
import { Link } from 'react-router-dom';
import Input from '../UI/Input/Input';
const AllNews = ({ auth, news, approveNews, deleteNews }) => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([...news]);
  const onChangeHandler = (e) => {
    e.preventDefault();
    let value = e.target.value;
    setSearch(() => value);
    if (value.length > 0) {
      let newData = data.filter((el) => {
        if (el.name.toLowerCase().includes(value.toLowerCase())) {
          return el;
        }
      });
      setData(() => [...newData]);
    } else {
      setData([...news]);
    }
  };
  let newsDisplay = '';
  newsDisplay = (
    <>
      <ul className={styles.News_List}>
        <li className={styles.News_Header}>
          <span className={styles.News_Title}>Title w/ date</span>
          <span className={styles.News_Description}> Content</span>
        </li>
        {data.map((article) => {
          return (
            <ArticleInAList
              key={article.id}
              id={article.id}
              name={article.name}
              text={article.text}
              date={moment(article.time).format('LLL')}
              isAproved={article.isAproved}
              approveNews={approveNews}
              deleteNews={deleteNews}
              isAdmin={auth.role === 'admin' ? true : false}
            />
          );
        })}
      </ul>
    </>
  );
  let addNewsLink = '';
  if (auth.role === 'user')
    addNewsLink = (
      <div className={styles.AddNew}>
        <Link to="/profilance-group/news/add">Add a New Article</Link>
      </div>
    );

  return (
    <>
      <div className={styles.News}>
        <h3>All News</h3>
        {newsDisplay}
        {addNewsLink}
        <div>
          <Input
            name="search"
            id="search"
            value={search}
            inputOnChange={onChangeHandler}
            placeholder="Search for Article:"
          />
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  approveNews: (id) => dispatch(newsAction.approveNews(id)),
  deleteNews: (id) => dispatch(newsAction.deleteNews(id)),
});
const mapStateToProps = (state) => ({
  news: state.news,
  auth: state.auth,
});
export default connect(mapStateToProps, mapDispatchToProps)(AllNews);
