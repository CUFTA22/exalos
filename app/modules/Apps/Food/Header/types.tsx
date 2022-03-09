import {
  DrinkMargarita24Regular,
  DrinkToGo24Regular,
  Food24Regular,
  FoodCake24Regular,
  FoodEgg24Regular,
  IFluentIconsProps,
} from '@fluentui/react-icons';

export interface Props {
  query: string;
  setQuery: (val: string) => void;
  type: { value: string; label: string };
  setType: (val: { value: string; label: string }) => void;
}

export const foodTypes = [
  { label: 'Juice', value: 'juice' },
  { label: 'Shake', value: 'shake' },
  { label: 'Sweet', value: 'sweet' },
  { label: 'Savoury', value: 'savoury' },
];

export const findFoodIcon = (
  type: string,
  selected: boolean
): React.ReactElement<IFluentIconsProps> => {
  switch (type) {
    case 'juice':
      return (
        <DrinkMargarita24Regular
          primaryFill={selected ? 'hsl(206, 88%, 77%)' : 'hsl(240, 28%, 64%)'}
        />
      );
    case 'shake':
      return (
        <DrinkToGo24Regular primaryFill={selected ? 'hsl(206, 88%, 77%)' : 'hsl(240, 28%, 64%)'} />
      );
    case 'sweet':
      return (
        <FoodCake24Regular primaryFill={selected ? 'hsl(206, 88%, 77%)' : 'hsl(240, 28%, 64%)'} />
      );
    case 'savoury':
      return (
        <FoodEgg24Regular primaryFill={selected ? 'hsl(206, 88%, 77%)' : 'hsl(240, 28%, 64%)'} />
      );

    default:
      return <Food24Regular primaryFill={selected ? 'hsl(206, 88%, 77%)' : 'hsl(240, 28%, 64%)'} />;
  }
};
