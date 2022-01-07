import { useNonInitialEffect } from '@hooks/useNonInitialEffect';
import Select from '@lib/Select/Select';
import usePlanner from '@module/Apps/Planner/usePlanner';
import { findTypeAndTransform, transformToSelectValues } from 'app/utils/functions/selectUtils';
import { useCallback, useState } from 'react';

const TypeSelect = () => {
  const [currentVal, setCurrentVal] = useState(null);
  const { plannerData, selectedWeek, updateCellsData, selectedCells } = usePlanner();

  const isSelected = selectedCells.length > 0;

  const handleChange = useCallback(
    (option: { label: string; value: string }) => {
      setCurrentVal(option.label);
      updateCellsData(selectedWeek, { type_id: option.value });
    },
    [selectedCells]
  );

  useNonInitialEffect(() => {
    setCurrentVal(findTypeAndTransform(plannerData?.types, selectedCells[0]?.type_id)?.label);
  }, [selectedCells]);

  return (
    <Select
      value={currentVal}
      placeholder="Select type..."
      onChange={handleChange}
      options={transformToSelectValues(plannerData?.types, 'name', '_id')}
      width="140px"
      className="no-clickaway"
      disabled={!selectedCells.length}
    />
  );
};

export default TypeSelect;
