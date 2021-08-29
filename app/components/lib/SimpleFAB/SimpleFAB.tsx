import { IFluentIconsProps } from '@fluentui/react-icons';
import styles from './SimpleFAB.module.scss';

const SimpleFAB: React.FC<{ Icon: React.ReactElement<IFluentIconsProps> }> = ({ Icon }) => {
  return <div className={styles.lib_simpleFab}>{Icon}</div>;
};

export default SimpleFAB;
