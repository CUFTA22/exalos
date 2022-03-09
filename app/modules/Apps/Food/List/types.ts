import { IRecipe } from '@utils/resources/recipes';
import { juiceData } from '@utils/resources/recipes/juiceData';
import { savouryData } from '@utils/resources/recipes/savouryData';
import { shakeData } from '@utils/resources/recipes/shakeData';
import { sweetData } from '@utils/resources/recipes/sweetData';
import { Dispatch } from 'react';

export interface Props {
  query: string;
  setQuery: (val: string) => void;
  type: { value: string; label: string };
  setType: (val: { value: string; label: string }) => void;
  setSelectedRecipe: Dispatch<IRecipe>;
}

export const findFoodData = (type: string): IRecipe[] => {
  switch (type) {
    case 'juice':
      return juiceData;
    case 'shake':
      return shakeData;
    case 'sweet':
      return sweetData;
    case 'savoury':
      return savouryData;

    default:
      return juiceData;
  }
};
