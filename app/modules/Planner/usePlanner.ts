import { Planner_Cell, Planner_Data } from '@ts/planner.types';
import fetcher from 'app/api/fetcher';
import removeArrayItem from 'app/utils/functions/removeArrayItem';
import { useState } from 'react';
import useSWR from 'swr';

const usePlannner = (initialData?: Planner_Data) => {
  const { data: plannerData, error } = useSWR('/api/planner', fetcher, { initialData });

  const [selectedCells, setSelectedCells] = useState<Planner_Cell[]>([]);

  const updateSelectedCells = (action: 'add' | 'remove', cell: Planner_Cell) => {
    switch (action) {
      case 'add':
        return setSelectedCells([...selectedCells, cell]);
      case 'remove':
        return setSelectedCells(removeArrayItem(selectedCells, cell));
    }
  };

  const updateCellsData = (data: Planner_Cell) => {
    const newData = selectedCells.map((cell) => ({ ...cell, ...data }));
    setSelectedCells(newData);
  };

  return { selectedCells, updateSelectedCells, updateCellsData };
};

export default usePlannner;
