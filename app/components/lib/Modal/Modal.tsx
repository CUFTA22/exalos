import clsx from 'clsx';
import ReactDOM from 'react-dom';
import { Props } from './types';
import styles from './Modal.module.scss';
import { useState } from 'react';

const Modal: React.FC<Props> = ({
  isOpen,
  onRequestClose,
  children,
  content_className,
  overlay_className,
}) => {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onRequestClose, 200);
  };

  const modal = (
    <>
      <div
        className={clsx(styles.lib_modal_overlay, overlay_className, {
          [styles.lib_modal_hide_overlay]: closing,
        })}
        onClick={handleClose}
      />
      <div
        className={clsx(styles.lib_modal_content, content_className, {
          [styles.lib_modal_hide_content]: closing,
        })}
      >
        {children}
      </div>
    </>
  );
  return ReactDOM.createPortal(modal, document.getElementById('__next'));
};

export default Modal;
