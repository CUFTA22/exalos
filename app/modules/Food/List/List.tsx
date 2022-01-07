import styles from './List.module.scss';
import Card from '@lib/Card/Card';
import { Props, findFoodData } from './types';
import { IRecipe } from '@utils/resources/recipes';
import FoodItem from '@element/FoodItem/FoodItem';
import { useEffect, useState } from 'react';

const List: React.FC<Props> = ({ query, setQuery, type, setType, setSelectedRecipe }) => {
  const [foodData, setFoodData] = useState<IRecipe[]>([]);

  useEffect(() => {
    let data = findFoodData(type.value).filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(query.toLowerCase()) ||
        recipe.description.toLowerCase().includes(query.toLowerCase())
    );

    setFoodData(data);
  }, [query, type]);

  return (
    <div className={styles.food_list}>
      {foodData.map((recipe) => (
        <FoodItem key={recipe.title} {...recipe} setSelectedRecipe={setSelectedRecipe} />
      ))}
    </div>
  );
};

export default List;
