import React, { ReactNode, useState } from 'react';

interface DropDownItemProps {
  children: ReactNode;
}
interface SubDropDownProps {
  label: ReactNode;
  children: ReactNode;
  trigger?: "click" | "hover";
}
interface DropDownProps {
  label: ReactNode;
  children: ReactNode;
  shape?: "rounded" | "default";
  trigger?: "click" | "hover";
}

export const DropDownItem = ({children, ...props}: DropDownItemProps) => {
  return(
    <div className='lk-dropdown--item' {...props}>{children}</div>
  )
}

export const SubDropDown = ({label, children, trigger, ...props}: SubDropDownProps) => {

  const [isActive, setIsActive] = useState(false);
  const dropdownClass = isActive ? "lk-sub-dropdown active" : "lk-sub-dropdown";
  let dropDownLabelEventHandlers = {};
  if(trigger === "click"){
    dropDownLabelEventHandlers ={
      onClick: () => setIsActive(!isActive)
    }
  }else{
    dropDownLabelEventHandlers = {
      onMouseEnter: () => setIsActive(true),
      onMouseLeave: () => setIsActive(false),

    }
  }

  return (
    <div
      className='lk-sub-dropdown--container'
      {...props}
      {...dropDownLabelEventHandlers}
    >
      <p className="lk-dropdown--label">{label}</p>
      <div className={dropdownClass}>{children}</div>
    </div>
  )

}

export const DropDown = ({label, children, shape, trigger, ...props}: DropDownProps) => {

  const [isActive, setIsActive] = useState(false);
  const dropdownContainerClass = shape === 'rounded' ? `lk-dropdown--container ${shape}` : "lk-dropdown--container";
  const dropdownClass = isActive ? "lk-dropdown active" : "lk-dropdown";
  let dropDownLabelEventHandlers = {};
  if(trigger === "click"){
    dropDownLabelEventHandlers ={
      onClick: () => setIsActive(!isActive)
    }
  }else{
    dropDownLabelEventHandlers = {
      onMouseEnter: () => setIsActive(true),
      onMouseLeave: () => setIsActive(false),
    }
  }

  return (
    <div
      className={dropdownContainerClass}
      {...dropDownLabelEventHandlers}
      {...props}
    >
      <p className='lk-dropdown--label'>{label}</p>
      <div className={dropdownClass}>{children}</div>
    </div>
  );
}

DropDown.defaultProps = {
  trigger: "click",
  shape: "default",
  label: "click me",
};

SubDropDown.defaultProps = {
  trigger: "hover",
  label: "click me",
};

