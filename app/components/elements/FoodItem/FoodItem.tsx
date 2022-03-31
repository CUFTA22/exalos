import classes from './FoodItem.module.scss';
import Card from '@lib/Card/Card';
import Typography from '@lib/Typography/Typography';
import { IRecipe } from '@utils/resources/recipes';
import { Star24Filled } from '@fluentui/react-icons';
import { Dispatch } from 'react';

interface Props extends IRecipe {
  setSelectedRecipe: Dispatch<IRecipe>;
}

const FoodItem: React.FC<Props> = ({ description, page, setSelectedRecipe, starred, title }) => {
  return (
    <Card
      className={classes.food_item}
      onClick={() => setSelectedRecipe({ description, page, starred, title })}
    >
      <Typography text={title} width="80%" color="secondary" maxLines={1} />

      {starred && <Star24Filled primaryFill="hsl(54, 88%, 77%)" />}
    </Card>
  );
};

export default FoodItem;
