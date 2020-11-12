import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import Input from '../../../UI/Input/Input';

import styles from './AddArticle.module.scss';
import { addNews } from '../../actions/newsAction';

const AddArticle = ({ addNews, auth }) => {
  const [formData, setFormData] = useState({
    name: '',
    text: '',
  });
  const [sendMessage, setSendMessage] = useState('Submit Article');
  const onChangeHandler = (e) =>
    setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  const onSumbitHandler = (e) => {
    e.preventDefault();
    addNews(formData);
    setSendMessage(' Submitted');
  };
  let history = useHistory();

  useEffect(() => {
    if (auth.role !== 'user') history.push('/news');
  }, [auth]);

  return (
    <div className={styles.Form}>
      <h3>Add an article</h3>
      <form onSubmit={onSumbitHandler}>
        <Input
          name="name"
          id="name"
          value={formData.name}
          inputOnChange={onChangeHandler}
          placeholder="Article Title here"
        />
        <textarea
          className={styles.Textarea}
          name="text"
          value={formData.text}
          onChange={onChangeHandler}
          placeholder="Your text here"
        ></textarea>
        <Input type="submit" name="submit" id="submit" value={sendMessage}></Input>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addNews: (data) => dispatch(addNews(data)),
});
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddArticle);
