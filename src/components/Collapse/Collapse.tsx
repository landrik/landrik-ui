import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

export interface CollapseProps {
  type?: "margin" | "border" | "basic" | "border-margin";
  shape?: "rounded" | "basic";
  children: ReactNode;
}

export interface CollapseItemProps {
  title:String;
  type?: "margin" | "border" | "basic" | "border-margin";
  shape?: "rounded" | "basic";
  children: ReactNode;
}


export const CollapseItem = ({type, shape, title, children }: CollapseItemProps) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => { setIsOpen(!isOpen)}

  //const collapseClass = `lk-collapse--${type} lk-collapse--${shape}`;

  const collapseClass = classNames('lk-collapse--basic', {
    [`lk-collapse--${type}`]: !!type,
    [`lk-collapse--${shape}`]: !!shape,
  });


  const contentClass = isOpen ? "lk-collapse--content active" : "lk-collapse--content";
  const iconName = isOpen ? "arrowup" : "arrowdown"
  //const iconClass = isOpen ? "arrowup" : "arrowdown";

  return (
    <div className={collapseClass}>
      <div className='lk-collapse--title' onClick={toggleCollapse}>
        <div style={{ flex:1 }}>{title}</div>
        <Icon name={iconName} size={24} />
      </div>
      <div className={contentClass}>{children}</div>
    </div>
  );
}

export const Collapse = ({type, shape, children }: CollapseProps) => {
  const collapseClass = `lk-collapse--container`;
  return (
      <div className={collapseClass}>
        {children}
      </div>
    );
}

Collapse.defaultProps = {
  shape: "basic",
  type: "basic",
};

// export default Collapse 