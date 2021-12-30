import Button from '@lib/Button/Button';
import TestScene from '@module/Demos/Test/TestScene';
import CustomCanvas from 'app/core/Canvas/CustomCanvas';
import styles from './Test.module.scss';
import NPMIcon from '@assets/logos/npm.svg';

const Test: React.FC = () => {
  return (
    <div className={styles.pageThree_test}>
      <CustomCanvas>
        <TestScene />
      </CustomCanvas>

      <Button
        className={styles.cta_link}
        text="See docs"
        width={180}
        onClick={() => window.open('https://www.npmjs.com/package/@react-three/fiber', '_blank')}
        Icon={NPMIcon}
      />
    </div>
  );
};

export default Test;
