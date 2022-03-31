import classes from './ShowModal.module.scss';
import Modal from '@lib/Modal/Modal';
import { ModalProps } from '@ts/modal.types';

const ShowModal: React.FC<ModalProps> = ({ isOpen, toggleModal }) => {
  return (
    <Modal content_className={classes.modal_show} isOpen={isOpen} onRequestClose={toggleModal}>
      Under Work
    </Modal>
  );
};

export default ShowModal;
