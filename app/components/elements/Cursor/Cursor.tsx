import classes from './Cursor.module.scss';
import useMousePosition from '@hooks/useMousePosition';
import Logo from '@assets/logos/exalosLogo.svg';

const Cursor = () => {
  const { clientX, clientY } = useMousePosition();

  const styles = { left: `${clientX}px`, top: `${clientY}px` };

  return <Logo style={styles} className={classes.customCursor} />;
};

export default Cursor;
