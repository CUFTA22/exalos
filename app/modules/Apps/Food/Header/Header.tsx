import { Document24Regular, FoodPizza20Regular, Search24Regular } from '@fluentui/react-icons';
import Button from '@lib/Button/Button';
import Input from '@lib/Input/Input';
import Select from '@lib/Select/Select';
import styles from './Header.module.scss';
import { Props, foodTypes, findFoodIcon } from './types';

const Header: React.FC<Props> = ({ query, setQuery, type, setType }) => {
  return (
    <div className={styles.food_header}>
      <div className={styles.left}>
        <Select
          className={styles.type_select}
          onChange={setType}
          value={type}
          placeholder="Select type..."
          options={foodTypes}
          icon_control={findFoodIcon(type.value, true)}
          icon_option={(opt, selected) => findFoodIcon(opt.value, selected)}
        />

        <div className={styles.divider}></div>

        <Input
          value={query}
          onChange={setQuery}
          placeholder="Search food..."
          icons_front={[<Search24Regular primaryFill="hsl(206, 88%, 77%)" />]}
        />
      </div>
      <div className={styles.right}>
        <Button
          text="View PDF"
          onClick={() => window.open('/files/food.pdf')}
          Icon={Document24Regular}
        />
      </div>
    </div>
  );
};

export default Header;
