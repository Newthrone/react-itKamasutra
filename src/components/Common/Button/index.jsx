import React, { useState } from 'react';

const Button = (props) => {
  const {className, title, onClickHandlers} = props

  const [isDisabledBtn, setIsDisabledBtn] = useState(false);

  const setDisableBtn = () => {
    setIsDisabledBtn(false)
  }

  return (
    <button className={className}
      disabled={isDisabledBtn}
      onClick={() => {
        setIsDisabledBtn(true);
        onClickHandlers(setDisableBtn);
      }}>
      {title}
    </button>
  )
}

export default Button
