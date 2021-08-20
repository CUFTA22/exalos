import './TypesModal.module.scss';
import Modal from '@lib/Modal/Modal';
import { ModalProps } from '@ts/modal.types';

const TypesModal: React.FC<ModalProps> = ({ isOpen, toggleModal }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={toggleModal}>
      awd
    </Modal>
  );
};

export default TypesModal;
