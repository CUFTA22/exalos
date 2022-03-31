import classes from './SettingsModal.module.scss';
import Modal from '@lib/Modal/Modal';
import Select from '@lib/Select/Select';
import { ModalProps } from '@ts/modal.types';
import { WeatherSunny24Regular, WeatherMoon24Regular, Bed24Regular } from '@fluentui/react-icons';
import Typography from '@lib/Typography/Typography';
import { end_hours, start_hours } from './options';

const SettingsModal: React.FC<ModalProps> = ({ isOpen, toggleModal }) => {
  return (
    <Modal content_className={classes.modal_settings} isOpen={isOpen} onRequestClose={toggleModal}>
      <div className={classes.settings_row}>
        <WeatherSunny24Regular primaryFill="hsl(206, 88%, 77%)" />
        <Typography className={classes.settings_txt} text="Start time" color="primary" />
        <Select options={start_hours} placeholder="Select start time..." />
      </div>
      <div className={classes.settings_row}>
        <WeatherMoon24Regular primaryFill="hsl(206, 88%, 77%)" />
        <Typography className={classes.settings_txt} text="End time" color="primary" />
        <Select options={end_hours} placeholder="Select end time..." />
      </div>
      <div className={classes.settings_row}>
        <Bed24Regular primaryFill="hsl(206, 88%, 77%)" />
        <Typography className={classes.settings_txt} text="Show weekends" color="primary" />
      </div>
    </Modal>
  );
};

export default SettingsModal;
