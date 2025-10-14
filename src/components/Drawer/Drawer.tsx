import React, { ReactNode, MouseEvent } from 'react';

interface DrawerProps {
  header?: ReactNode;
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
  width?: string;
  height?: string;
  placement?: "left" | "right" | "top" | "bottom";
}



const Drawer = ({header, isVisible, onClose, children, width, height, placement}: DrawerProps) => {

  const drawerContainerClass = isVisible 
    ? "lk-drawer--container active" 
    : "lk-drawer--container";

  const drawerClass = isVisible
    ? `lk-drawer--${placement} active `
    : `lk-drawer--${placement}`;  

  const backdropClickHandler = (event: MouseEvent<HTMLDivElement>) => {
    const { target } = event;
    if((target as HTMLDivElement).classList.contains('lk-drawer--container')){
      onClose()
    }
  }

  let drawerStyle:{} = {width}

  if((placement==="top" || placement==="bottom")&& height){
    drawerStyle= {height}
  }
  

  return (
    <div className={drawerContainerClass} onClick={backdropClickHandler}>
      <div className={drawerClass} style={drawerStyle}>
        {header && <div className="lk-drawer--header">{header}</div>}
        <div className="lk-drawer--content">{children}</div>
      </div>
    </div>
  )
}

Drawer.defaultProps = {
  width: "400px",
  placement: "right",
  height: "300px",
};

export default Drawer 