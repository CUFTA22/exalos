import { Cursor24Regular, EyeShow24Regular, Gif24Regular } from '@fluentui/react-icons';
import Card from '@lib/Card/Card';
import Checkbox from '@lib/Checkbox/Checkbox';
import Typography from '@lib/Typography/Typography';
import SettingsRow from '../SettingsRow/SettingsRow';
import useSettings from '../useSettings';
import styles from './LeftOptions.module.scss';

const LeftOptions = () => {
  const { customCursor, toggleCursor, gif, toggleGif, enableHidden, toggleHidden } = useSettings();

  return (
    <div className={styles.settings_left}>
      <Card className={styles.option_item}>
        <Typography text="Global" fSize={22} fWeight={600} className={styles.opt_title} />

        <SettingsRow
          Icon={Cursor24Regular}
          text="Custom cursor"
          toggleValue={toggleCursor}
          value={customCursor}
        />

        <SettingsRow Icon={Gif24Regular} text="Dancing gif" toggleValue={toggleGif} value={gif} />

        <SettingsRow
          Icon={EyeShow24Regular}
          text="Hidden Nav"
          toggleValue={toggleHidden}
          value={enableHidden}
        />
      </Card>
    </div>
  );
};

export default LeftOptions;
