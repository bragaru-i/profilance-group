import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../store/actions/authAction';

import Input from '../../../UI/Input/Input';
import styles from './LoginForm.module.scss';
const LoginForm = ({ login, closeLogin, auth }) => {
  const [formData, setFormData] = useState({
    user: '',
    pass: '',
  });

  const [showPass, setShowPass] = useState(false);
  const passType = showPass ? 'text' : 'password';
  // Controls sumbit form and change on input
  const onChangeHandler = (e) =>
    setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  const onSumbitHandler = (e) => {
    e.preventDefault();
    login(formData);
  };

  const errorMessage = auth.error && auth.error !== '' && (
    <div className={styles.ErrorLogin}>{auth.error}</div>
  );

  return (
    <form className={styles.Form} onSubmit={onSumbitHandler}>
      {errorMessage}
      <Input
        name="user"
        id="user"
        value={formData.user}
        inputOnChange={onChangeHandler}
        placeholder="Username:"
      />
      <Input
        name="pass"
        id="pass"
        type={passType}
        value={formData.pass}
        inputOnChange={onChangeHandler}
        placeholder="Password:"
      />
      <span className={styles.Password_Icon} onClick={() => setShowPass(!showPass)}>
        show
      </span>
      <Input name="submit" id="submit" type="submit" value="Submit" />
    </form>
  );
};
const mapDispatchToProps = (dispatch) => ({
  login: (formData) => dispatch(login(formData)),
});
const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
