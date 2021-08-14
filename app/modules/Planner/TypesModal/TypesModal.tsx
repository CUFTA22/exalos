import './TypesModal.module.scss';
import Modal from '@lib/Modal/Modal';
import { Props } from './types';

const TypesModal: React.FC<Props> = ({ isOpen, toggleModal }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={toggleModal}>
      awd
    </Modal>
  );
};

export default TypesModal;
