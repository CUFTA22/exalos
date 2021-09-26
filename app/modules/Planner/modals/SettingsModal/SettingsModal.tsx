import styles from './SettingsModal.module.scss';
import Modal from '@lib/Modal/Modal';
import { ModalProps } from '@ts/modal.types';

const SettingsModal: React.FC<ModalProps> = ({ isOpen, toggleModal }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={toggleModal}>
      Settings
    </Modal>
  );
};

export default SettingsModal;
