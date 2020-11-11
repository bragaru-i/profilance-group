import React from 'react';

import styles from './Input.module.scss';

const Input = ({
  type = 'text',
  disabled = false,
  name,
  inputId,
  value,
  inputOnChange,
  label = null,
  placeholder = 'Placeholder text here...',
}) => {
  let style = [styles.Input];
  if (type === 'submit') style.push(styles.Button);
  console.log(style.join(' '));
  return (
    <div className={style.join(' ')}>
      <label htmlFor={inputId}>
        {label}
        <input
          type={type}
          name={name}
          disabled={disabled}
          id={inputId}
          value={value}
          placeholder={placeholder}
          onChange={(e) => inputOnChange(e)}
        />
      </label>
    </div>
  );
};

export default Input;
