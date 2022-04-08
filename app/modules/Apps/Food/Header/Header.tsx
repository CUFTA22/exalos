import { Document24Regular, FoodPizza20Regular, Search24Regular } from '@fluentui/react-icons';
import Button from '@lib/Button/Button';
import Input from '@lib/Input/Input';
import Select from '@lib/Select/Select';
import classes from './Header.module.scss';
import { Props, foodTypes, findFoodIcon } from './types';

const Header: React.FC<Props> = ({ query, setQuery, type, setType }) => {
  return (
    <div className={classes.food_header}>
      <div className={classes.left}>
        <Select
          className={classes.type_select}
          onChange={setType}
          value={type}
          placeholder="Select type..."
          options={foodTypes}
          icon_control={findFoodIcon(type.value, true)}
          icon_option={(opt, selected) => findFoodIcon(opt.value, selected)}
        />

        <div className={classes.divider}></div>

        <Input
          value={query}
          onChange={setQuery}
          placeholder="Search food..."
          icons_front={[<Search24Regular primaryFill="hsl(206, 88%, 77%)" />]}
        />
      </div>
      <div className={classes.right}>
        <Button
          text="View PDF"
          onClick={() => window.open(process.env.NEXT_PUBLIC_STATIC_URL + '/files/food.pdf')}
          Icon={Document24Regular}
        />
      </div>
    </div>
  );
};

export default Header;
