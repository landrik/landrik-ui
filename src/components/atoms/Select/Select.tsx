import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import { SelectWrapper, SelectButton,Dropdown,Option,ErrorMessage,ChevronIcon } from './Select.styles'
// import clsx from 'clsx'
import {Icon} from '../Icons';
import { icons } from '../../../assets/svgs/icons';
// import useOutsideClick from '../../utils/useOutsideClick'

// export type IconType = keyof typeof icons;


// export type Option = {
//   id: string;
//   label: string;
//   value: string | number;
//   imgUrl?: string
// }

// interface SelectProps {


//   // children: ReactNode,
//   // className: string,
//   // id: string,
//   // name: string,
//   // labelText: String,
//   // hideLabel: boolean,
//   // onSelect: ()=>void,
//   isDisabled: boolean,
//   // defaultValue: any,
//   hasImage?: boolean;
//   iconDescription: IconType,
//   error: boolean,
//   // invalidText: String,
//   // helperText: String,

//   title?: string;
//   options: Option[];
//   //selectedId: Option | null;
//   selectedId: string;
//   onSelect: (id: string) => void;

// }

// /**
// * @author
// * @function @Select
// **/

// export const Select:FC<SelectProps> = ({title, selectedId, options,iconDescription, onSelect, isDisabled, error, hasImage, ...props}) => {

//   const [showOptions, setShowOptions] = useState<boolean>(false);
//   const [selectedItem, setSelectedItem] = useState<Option | undefined>(
//     selectedId ? options?.find((item) => item.id === selectedId) : undefined
//   )

//   const handleChange = (item: Option) => {
//     setSelectedItem(item);
//     onSelect && onSelect(item.id);
//     setShowOptions(false)
//   }

//   useEffect(() => {
//     if(selectedId && options){
//       const newSelectedItem = options.find((item)=> item.id ===selectedId)
//       newSelectedItem && setSelectedItem(newSelectedItem)
//     }else{
//       setSelectedItem(undefined)
//     }
  
//   }, [selectedId, options]);

//   const dropDownRef = useRef<HTMLDivElement>(null);
//   useOutsideClick({
//     ref: dropDownRef,
//     handler:()=>setShowOptions(false)
//   })

//   const selectWrapClasses = clsx('lk-select-container', {
//     ['lk-input--disabled']: isDisabled,
//     ['lk-input--error']: error,
//   })
  
//   return (
//     <div className={selectWrapClasses}>
//       <div onClick={() => setShowOptions(!showOptions)} className='select'>
//         <span>{selectedItem ? selectedItem.label : title}</span>
//         <Icon 
//           name={iconDescription} 
//           size={20}
//         />
//       </div>
      
//       {showOptions && (
//         <div className='options'>
//           {options.map(option=>(
//             <div 
//               className='option' 
//               onClick={()=>handleChange(option)}
//               key={option.id}
//             >
//               {hasImage && (
//                 <img src={option.imgUrl} alt="image" loading='lazy' className='img' />
//               )}
//               <span>{option.label}</span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//    )
//  }


// //  <div className={selectWrapClasses}>
// //     <select
// //       {...other}
// //       {...ariaProps}
// //       id={usedId}
// //       name={name}
// //       className={`${prefix}--select-input`}
// //       disabled={disabled || undefined}
// //       data-invalid={invalid || undefined}
// //       aria-invalid={invalid || undefined}
// //       ref={inputRef}
// //     >
// //       {children}
// //     </select>
// //     <Icon
// //       icon={iconCaretDown}
// //       className={`${prefix}--select__arrow`}
// //       description={iconDescription}
// //     />
// //   </div>




export interface SelectOptionProps {
  value: string;
  label: string;
}

export interface SelectProps {
  options: SelectOptionProps[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  color?: string;
  shape?: 'rounded' | 'square' | 'pill';
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  error,
  color = '#3b82f6',
  shape = 'rounded'
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };


    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);


  }, []);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <>
      <SelectWrapper ref={wrapperRef}>
        <SelectButton
          type="button"
          $isOpen={isOpen}
          $color={color}
          $error={!!error}
          $shape={shape}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
        >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
          <ChevronIcon $isOpen={isOpen}>
            <Icon name={'arrowdown'} />
          </ChevronIcon>
        </SelectButton>
        <Dropdown $isOpen={isOpen}>
        {options.map((option) => (
          <Option
            key={option.value}
            $selected={option.value === value}
            $color={color}
            onClick={() => handleSelect(option.value)}
          >
            {option.label}
            {option.value === value && <Icon name='check' />}
          </Option>
        ))}
        </Dropdown>
      </SelectWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};