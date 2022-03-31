import Button from '@lib/Button/Button';
import Modal from '@lib/Modal/Modal';
import Typography from '@lib/Typography/Typography';
import clsx from 'clsx';
import classes from './ConfirmationModal.module.scss';
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
    <Modal content_className={classes.c_modal} isOpen={isOpen} onRequestClose={toggleOpen}>
      <Typography fSize={24} fWeight={500} pad="24px" text={title || 'Are you sure?'} />
      <Typography pad="0 24px" text={subtitle || 'Please confirm this action!'} />

      <Button
        className={classes.cta}
        type={type}
        text={firstBtnTxt}
        width={150}
        onClick={action}
        isLoading={isLoading}
      />
      <Button
        className={clsx(classes.cta, classes.cta_cancel)}
        type="inactive"
        text={secondBtnTxt}
        width={150}
        onClick={toggleOpen}
      />
    </Modal>
  );
};

export default ConfirmationModal;
