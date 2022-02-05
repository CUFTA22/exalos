import { Cursor24Regular, Gif24Regular } from '@fluentui/react-icons';
import Card from '@lib/Card/Card';
import Checkbox from '@lib/Checkbox/Checkbox';
import Typography from '@lib/Typography/Typography';
import useSettings from '../useSettings';
import styles from './LeftOptions.module.scss';

const LeftOptions = () => {
  const { customCursor, toggleCursor, gif, toggleGif } = useSettings();

  return (
    <div className={styles.settings_left}>
      <Card className={styles.option_item}>
        <Typography text="Global" fSize={22} fWeight={600} className={styles.opt_title} />

        <div className={styles.opt_row}>
          <Cursor24Regular primaryFill="hsl(206, 88%, 77%)" />

          <Typography text="Custom cursor" color="secondary" />

          <div className={styles.flex_grow}></div>

          <Checkbox checked={customCursor} toggleFunc={(curr) => toggleCursor()} />
        </div>

        <div className={styles.opt_row}>
          <Gif24Regular primaryFill="hsl(206, 88%, 77%)" />

          <Typography text="Dancing gif" color="secondary" />

          <div className={styles.flex_grow}></div>

          <Checkbox checked={gif} toggleFunc={(curr) => toggleGif()} />
        </div>
      </Card>
    </div>
  );
};

export default LeftOptions;
