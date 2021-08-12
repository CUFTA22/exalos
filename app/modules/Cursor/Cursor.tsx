import classes from './Cursor.module.scss';
import useMousePosition from '@hooks/useMousePosition';
import Logo from '@assets/logos/exalos.svg';
import { Props } from './types';

const Cursor: React.FC<Props> = ({ disabled = true }) => {
  const { clientX, clientY } = useMousePosition();

  const styles = {
    left: `${clientX}px`,
    top: `${clientY}px`,
  };

  return (
    <>
      <style jsx global>{`
        * {
          cursor: ${!disabled ? 'none !important' : 'unset'};
        }
      `}</style>
      {!disabled && <Logo style={styles} className={classes.customCursor} />}
    </>
  );
};

export default Cursor;
