import styles from './TypesModal.module.scss';
import Modal from '@lib/Modal/Modal';
import { ModalProps } from '@ts/modal.types';

const TypesModal: React.FC<ModalProps> = ({ isOpen, toggleModal }) => {
  return (
    <Modal
      content_className={styles.modal_types}
      isOpen={isOpen}
      onRequestClose={toggleModal}
    ></Modal>
  );
};

export default TypesModal;
