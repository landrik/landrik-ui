import React, { FC, useState } from 'react'
import {InputShape, ErrorMessage, IconWrapper, InputContainer, InputLabel, InputWrapper, StatusIcon, StyledInput, ToggleButton} from './TextField.styled'
import {Icon} from '../Icons';
import { icons, IconName  } from '../../../assets/svgs';

//export type IconType = keyof typeof icons;

export type TextFieldProps = {
  type?: 'text' | 'number' | 'email' | 'password',

  shape?: InputShape,
  
  size?: string,
  labelText: string,
  placeholder: string,
  className?: string,
  id?: string,
  helperText?: string,
  errorText?: string,
  error?: boolean;
  
  warnText?: string,
  isDisabled?: boolean,
  isRequired?: boolean,
  
  icon?: IconName;
  iconPosition?: 'left' | 'right';

  color?: string;
  
  success?: boolean;
  value?: string;
  onChangeInput: (value: string) => void;
  showPasswordToggle?: boolean;
}

/**
* @author
* @function @TextField
**/

export const TextField:FC<TextFieldProps> = ({ type, shape='rounded', labelText, id, value, placeholder='', isDisabled = false, isRequired = false, error=false, errorText, onChangeInput, iconPosition='left', icon, success, color, showPasswordToggle=false, ...props}) => {
  
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPasswordToggle ? (showPassword ? 'text' : 'password') : type;

  return (
    <>
   

    <InputWrapper>
      <InputLabel htmlFor={id}>{labelText} <span>{isRequired ? "*" : ""}</span></InputLabel>
      <InputContainer $shape={shape} $error={!!error}>

           {icon && iconPosition === 'left' && (
              <IconWrapper $error={error} $position="left">
                <Icon name={icon} />
              </IconWrapper>
            )}

              <StyledInput 
                id={id}
                type={inputType}
                autoComplete="off"
                disabled={isDisabled}
                placeholder={placeholder}
                value={value}
                onChange={(e)=> {onChangeInput(e.target.value)}}
              />
            {icon && iconPosition === 'right' && !error && !success && !showPasswordToggle && (
              <IconWrapper $error={error} $position="right">
                <Icon name={icon} />
              </IconWrapper>
            )}

            {showPasswordToggle && (
              <ToggleButton
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <Icon name={'eye-closed'} /> : <Icon name={'eye-open'} />}
              </ToggleButton>
            )}

            {error && (
              <StatusIcon $error={error}>
                <Icon name={'exclamation-triangle'} />
              </StatusIcon>
            )}

            {success && !error && !showPasswordToggle && (
              <StatusIcon $error={!error}>
                <Icon name={'check'}  />
              </StatusIcon>
            )}



      </InputContainer>
       {error && <ErrorMessage>{errorText}</ErrorMessage>}
    </InputWrapper>
</>
   )

 }

 

    // helperText="Helper text"
    // invalidText="Error message goes here"
    // placeholder="Placeholder text"
    // size="md"
    // type="text"
    // warnText="Warning message that is really long can wrap to more lines but should not be excessively long."
    // export default TextField;