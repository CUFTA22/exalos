import { Video24Regular } from '@fluentui/react-icons';
import Input from '@lib/Input/Input';
import usePlanner from '@module/Planner/usePlanner';
import { debounce } from 'app/utils/functions/debounce';
import { useCallback, useEffect, useState } from 'react';

const AddMeetUrl = () => {
  const { selectedCells, updateCellsData, selectedWeek } = usePlanner();
  const [value, setValue] = useState('');

  const debouncedOnChange = useCallback(
    debounce((val: string) => updateCellsData(selectedWeek, { meet_url: val }), 1000),
    [selectedWeek, updateCellsData]
  );

  const handleChange = (val: string) => {
    setValue(val);
    debouncedOnChange(val);
  };

  useEffect(() => {
    setValue(selectedCells[0]?.meet_url);
  }, [selectedCells]);

  return (
    <Input
      value={value}
      onChange={(val) => handleChange(val)}
      placeholder="Add meet url"
      width="240px"
      className="no-clickaway"
      icons_front={[<Video24Regular primaryFill="hsl(240, 28%, 64%)" />]}
      //   isDebounce
      disabled={!selectedCells.length}
    />
  );
};

export default AddMeetUrl;
