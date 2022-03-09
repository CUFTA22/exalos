import Card from '@lib/Card/Card';
import Typography from '@lib/Typography/Typography';
import { ExploreProps } from '@template/types';
import styles from './Explore.module.scss';
import { useRouter } from 'next/router';
import useSettings from '@module/Settings/useSettings';

const Explore: React.FC<ExploreProps> = ({ options, title }) => {
  const router = useRouter();
  const { enableHidden } = useSettings();

  return (
    <div className={styles.page_explore}>
      <Typography text={title} fSize={32} fWeight={700} color="secondary" />

      <div className={styles.options_container}>
        {options.map((option) => {
          if (option.hidden && !enableHidden) return null;

          return (
            <Card
              key={option.route}
              onClick={() => router.push(option.route)}
              className={styles.option_item}
            >
              <option.Svg />
              <Typography text={option.text} color="secondary" fSize={20} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
