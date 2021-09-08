import { Planner_Type } from '@ts/planner.types';

const getTypeStyles = (type: string, types: Planner_Type[], isSelected: boolean) => {
  if (!types) return {};

  const color = types.find((t) => t._id === type)?.color;

  if (!color) return {};

  return {
    boxShadow: `inset 4px 0 0 ${color} ${isSelected ? ', 0 0 2px 1px hsl(206, 88%, 77%)' : ''}`,
    background: `${color}0D`,
  };
};

export default getTypeStyles;
