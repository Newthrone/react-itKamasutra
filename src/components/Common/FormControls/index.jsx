import React from 'react';
import classes from 'html-classes';
import styles from './FormControls.module.css'

export const Input = ({
  input,
  meta,
  type,
  placeholder,
  id,
  className,
  label: {htmlFor, text, classLabel},
  }) => {
  const hasError = meta.error && meta.touched;
  return (
    <>
      <label htmlFor={htmlFor} className={classLabel}>{text}</label>
      <div className={styles.inputHolder}>
        <input id={id}
               className={classes([className, {[styles.inputError]: hasError}])}
               type={type}
               placeholder={placeholder}
               {...input}
        />
        {hasError && <span className={styles.errorText}>{meta.error}</span>}
      </div>
    </>
  )
}

export const Textarea = ({
  input,
  meta,
  placeholder,
  className,
  }) => {
  const hasError = meta.error && meta.touched;
  return (
    <>
      <textarea
              className={classes([className, {[styles.inputError]: hasError}])}
              placeholder={placeholder}
              {...input}
      />
      {hasError && <span className={styles.errorText}>{meta.error}</span>}
    </>
  )
}
