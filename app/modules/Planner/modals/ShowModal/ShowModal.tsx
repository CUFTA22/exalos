import './ShowModal.module.scss';
import Modal from '@lib/Modal/Modal';
import { ModalProps } from '@ts/modal.types';

const ShowModal: React.FC<ModalProps> = ({ isOpen, toggleModal }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={toggleModal}>
      Settings
    </Modal>
  );
};

export default ShowModal;
