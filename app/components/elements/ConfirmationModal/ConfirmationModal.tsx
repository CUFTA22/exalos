import Button from '@lib/Button/Button';
import Modal from '@lib/Modal/Modal';
import Typography from '@lib/Typography/Typography';
import clsx from 'clsx';
import styles from './ConfirmationModal.module.scss';
import { CModalProps } from './types';

const ConfirmationModal: React.FC<CModalProps> = ({
  isOpen,
  toggleOpen,
  action,
  type = 'cancel',
  title,
  subtitle,
  isLoading = false,
  firstBtnTxt = 'Delete',
  secondBtnTxt = 'Cancel',
}) => {
  return (
    <Modal content_className={styles.c_modal} isOpen={isOpen} onRequestClose={toggleOpen}>
      <Typography fSize={24} fWeight={500} pad="24px" text={title || 'Are you sure?'} />
      <Typography pad="0 24px" text={subtitle || 'Please confirm this action!'} />

      <Button
        className={styles.cta}
        type={type}
        text={firstBtnTxt}
        width={150}
        onClick={action}
        isLoading={isLoading}
      />
      <Button
        className={clsx(styles.cta, styles.cta_cancel)}
        type="inactive"
        text={secondBtnTxt}
        width={150}
        onClick={toggleOpen}
      />
    </Modal>
  );
};

export default ConfirmationModal;
