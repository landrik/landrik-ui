import React from 'react';
import classNames from 'classnames';

export interface TextAreaProps {
   label?: string;
   error?: string;
   success?: string;
   disabled?: boolean;
   height?: string;
   width?: string;
   shape?: "rounded" | "basic";
   variant?: "success" | "error";
}


const TextArea = ({
  error, 
  success, 
  disabled, 
  height, 
  width, 
  shape, 
  label, 
  variant,
  ...props
}: TextAreaProps) => {

  // let textareaClass = `lk-textarea--container lk-textarea--${shape}`;
  // if(success && !error) {
  //   textareaClass = `lk-textarea--container lk-textarea--success lk-textarea--${shape}`;
  // }else if(error && !success){
  //   textareaClass = `lk-textarea--container lk-textarea--error lk-textarea--${shape}`;
  // }else if(disabled){
  //   textareaClass = `lk-textarea--container lk-textarea--disabled lk-textarea--${shape}`;
  // }

  const textareaClass = classNames('lk-textarea--container', {
    [`lk-textarea--${success}`]: !!success,
    [`lk-textarea--${error}`]: !!error,
    [`lk-textarea--${disabled}`]: !!disabled,
    [`lk-textarea--${shape}`]: !!shape,
    [`lk-textarea--${variant}`]: !!variant,
  });


  return ( 
    <div className={textareaClass}>
      {label && <label>{label}</label>}
      <textarea className='lk-textarea' {...props} style={{height, width}} />
      {error && !disabled && !success && <span className='lk-error-text'>{error}</span>}
      {success && !disabled && !error && <span className='lk-success-text'>{success}</span>}
    </div>
  );
}

TextArea.defaultProps = {
  label: "Description",
  height: "10rem",
  shape: "basic"
}

export default TextArea 