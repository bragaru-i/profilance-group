import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../store/actions/authAction';

const LoginForm = ({ login }) => {
  const [formData, setFormData] = useState({
    user: '',
    pass: '',
  });
  console.log(formData);
  const onChangeHandler = (e) =>
    setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  const onSumbitHandler = (e) => {
    e.preventDefault();
    login(formData);
  };
  return (
    <form onSubmit={onSumbitHandler}>
      <label>
        <input type="text" name="user" value={formData.user} onChange={onChangeHandler} />
      </label>
      <label>
        <input type="text" name="pass" value={formData.pass} onChange={onChangeHandler} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
const mapDispatchToProps = (dispatch) => ({
  login: (formData) => dispatch(login(formData)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
