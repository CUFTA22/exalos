import clsx from 'clsx';
import { createPortal } from 'react-dom';
import { Props } from './types';
import classes from './Modal.module.scss';
import { useEffect, useState } from 'react';
import { useNonInitialEffect } from '@hooks/useNonInitialEffect';

const Modal: React.FC<Props> = ({
  isOpen,
  onRequestClose,
  children,
  content_className,
  overlay_className,
}) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    !isBrowser && setIsBrowser(true);
  }, []);

  useNonInitialEffect(() => {
    !show && setShow(true);
    show && !isOpen && setTimeout(() => setShow(false), 300);
  }, [isOpen]);

  const modal = show && (
    <>
      <div
        className={clsx(
          classes.lib_modal_overlay,
          {
            [classes.overlay_anim_in]: isOpen,
            [classes.overlay_anim_out]: !isOpen,
          },
          overlay_className
        )}
        onClick={onRequestClose}
      />
      <div
        className={clsx(
          classes.lib_modal_content,
          {
            [classes.content_anim_in]: isOpen,
            [classes.content_anim_out]: !isOpen,
          },
          content_className
        )}
      >
        {children}
      </div>
    </>
  );

  return isBrowser ? createPortal(modal, document.querySelector('#modals')) : null;
};

export default Modal;
