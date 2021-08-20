import { Planner_Cell, Planner_Data, Planner_Type } from '@ts/planner.types';
import removeArrayItem from 'app/utils/functions/removeArrayItem';
import { useSession } from 'next-auth/client';
import { useState } from 'react';
import { cache } from 'swr';
import { Planner_Updates } from './types';

/**
 * Used for all updates on planner data
 * @returns {Promise}
 */

const usePlannner = (): Planner_Updates => {
  // prettier-ignore
  const [ {user: { email } } ] = useSession();
  // prettier-ignore
  const plannerData: Planner_Data = cache.get(`/api/planner/${email}`)

  const [visibleTypes, setVisibleTypes] = useState<Planner_Type[]>(plannerData?.types || []);
  const [selectedCells, setSelectedCells] = useState<Planner_Cell[]>([]);

  // --------------------------------------------------------------------------------------------
  // Cell Actions
  // --------------------------------------------------------------------------------------------

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
    // mutate
    setSelectedCells(newData);
  };

  // --------------------------------------------------------------------------------------------
  // Type Actions
  // --------------------------------------------------------------------------------------------

  const updateVisibleTypes = (action: 'add' | 'remove', type: Planner_Type) => {
    switch (action) {
      case 'add':
        return setVisibleTypes([...visibleTypes, type]);
      case 'remove':
        return setVisibleTypes(removeArrayItem(visibleTypes, type));
    }
  };

  const updateTypesData = (data: Planner_Type) => {
    const newData = visibleTypes.map((type) => ({ ...type, ...data }));
    // mutate
    setVisibleTypes(newData);
  };

  // --------------------------------------------------------------------------------------------
  // Week Actions
  // --------------------------------------------------------------------------------------------

  const addWeek = () => {};
  const removeWeek = () => {};

  return {
    selectedCells,
    updateSelectedCells,
    updateCellsData,
    updateVisibleTypes,
    updateTypesData,
  };
};

export default usePlannner;
