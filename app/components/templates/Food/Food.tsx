import List from '@module/Food/List/List';
import Header from '@module/Food/Header/Header';
import { useState } from 'react';
import styles from './Food.module.scss';
import { IRecipe } from '@utils/resources/recipes';
import Card from '@lib/Card/Card';
import OpenRecipe from '@module/Food/OperRecipe/OpenRecipe';

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
    <div className={styles.page_food}>
      <Header query={query} setQuery={setQuery} type={type} setType={setType} />

      <Card className={styles.main_container}>
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
