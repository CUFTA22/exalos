import Button from '@lib/Button/Button';
import TestScene from '@module/Demos/Test/TestScene';
import CustomCanvas from 'app/core/Canvas/CustomCanvas';
import classes from './Test.module.scss';
import NPMIcon from '@assets/logos/npm.svg';

const Test: React.FC = () => {
  return (
    <div className={classes.pageThree_test}>
      <CustomCanvas axesHelper={true}>
        <TestScene />
      </CustomCanvas>

      <Button
        className={classes.cta_link}
        text="See docs"
        width={180}
        onClick={() => window.open('https://www.npmjs.com/package/@react-three/fiber', '_blank')}
        Icon={NPMIcon}
      />
    </div>
  );
};

export default Test;
