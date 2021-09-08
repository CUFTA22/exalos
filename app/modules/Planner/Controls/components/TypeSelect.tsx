import Select from '@lib/Select/Select';
import usePlanner from '@module/Planner/usePlanner';
import { transformToSelectValues } from 'app/utils/functions/transformToSelectValues';

const TypeSelect = () => {
  const { plannerData, selectedWeek, updateCellsData, selectedCells } = usePlanner();

  const isSelected = selectedCells.length > 0;

  const handleChange = (data: { label: string; value: string }) =>
    updateCellsData(selectedWeek, { type_id: data.value });

  return (
    <Select
      className="no-clickaway"
      placeholder="Select type..."
      onOptionChange={handleChange}
      options={transformToSelectValues(plannerData?.types, 'name')}
      isDisabled={!isSelected}
    />
  );
};

export default TypeSelect;
