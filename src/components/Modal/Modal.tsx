import React, { MouseEvent, ReactNode } from 'react';
import Icon from '../Icon';

export interface ModalProps {
  width?: string;
  visible: boolean;
  children: ReactNode;
  onClose: () => void;
  footer?: ReactNode;
  title: string;
  shape?: "rounded" | "basic";
  placement?: "topCenter" | "center";
}

export const Modal = ({width, visible, children, onClose, footer, title, shape, placement, ...props}: ModalProps) => {

  const modalStyle = { width };
  const containerClass = visible 
    ? `lk-modal--container active ${placement}` 
    : `lk-modal--container ${placement}`;
  const modalClass = visible 
    ? `lk-modal active lk-modal--${shape}` 
    : `lk-modal lk-modal--${shape}`;

  const backdropClickHandler = (event: MouseEvent<HTMLDivElement>) => {
    const { target } = event;
    if((target as HTMLDivElement).classList.contains(`lk-modal--container`)){
      onClose()
    }
  }
  return (
    <div className={containerClass} {...props} onClick={backdropClickHandler}>
      <div className={modalClass} style={modalStyle}>
        <div className='lk-modal--header'>
          {title}
          <div onClick={onClose} className="lk-modal--close">
            <Icon name='close' size={25} />
          </div>
        </div>
        <div className='lk-modal--content'>{children}</div>
        {footer && (<div className='lk-modal--footer'>{footer}</div>)}
      </div>
    </div>
  );
}

Modal.defaultProps = {
  width: "32rem",
  title: "Basic Modal",
  shape: "basic",
  placement: "topCenter",
}

//export default Modal
