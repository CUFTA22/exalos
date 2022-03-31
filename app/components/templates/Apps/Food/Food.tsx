import { useState } from 'react';
import classes from './Food.module.scss';
import { IRecipe } from '@utils/resources/recipes';
import Card from '@lib/Card/Card';

import List from '@module/Apps/Food/List/List';
import Header from '@module/Apps/Food/Header/Header';
import OpenRecipe from '@module/Apps/Food/OperRecipe/OpenRecipe';

const Food: React.FC = () => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState({ label: 'Juice', value: 'juice' });

  const [selectedRecipe, setSelectedRecipe] = useState<IRecipe>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const setRecipe = (recipe: IRecipe) => {
    setOpenModal(true);
    setSelectedRecipe(recipe);
  };

  return (
    <div className={classes.page_food}>
      <Header query={query} setQuery={setQuery} type={type} setType={setType} />

      <Card className={classes.main_container}>
        <List
          query={query}
          setQuery={setQuery}
          type={type}
          setType={setType}
          setSelectedRecipe={setRecipe}
        />
      </Card>

      <OpenRecipe
        isOpen={openModal}
        toggleModal={() => setOpenModal(false)}
        recipe={selectedRecipe}
      />
    </div>
  );
};

export default Food;
