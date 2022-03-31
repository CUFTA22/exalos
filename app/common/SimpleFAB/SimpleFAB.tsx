import { FluentIconsProps } from '@fluentui/react-icons';
import clsx from 'clsx';
import classes from './SimpleFAB.module.scss';
import ripple from '@styles/scss/ripple.module.scss';

interface Props {
  Icon: React.ReactElement<FluentIconsProps>;
  size?: 'normal' | 'large';
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const SimpleFAB: React.FC<Props> = ({
  Icon,
  size = 'normal',
  className,
  isActive = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        classes.lib_simpleFab,
        ripple.ripple,
        className,
        classes[`lib_simpleFab_${size}`],
        { [classes.isActive]: isActive },
        'no-clickaway'
      )}
    >
      {Icon}
    </div>
  );
};

export default SimpleFAB;
