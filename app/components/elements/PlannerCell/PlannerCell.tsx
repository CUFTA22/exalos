import React, { useEffect, useRef, useState } from 'react';
import classes from './PlannerCell.module.scss';
import clsx from 'clsx';
import usePlanner from '@module/Apps/Planner/usePlanner';
import useCell from './utils/useCell';
import { Planner_Cell, Planner_Cell_Updates } from '@ts/planner.types';
import CellHour from './utils/CellHour';
import useClickAway from '@hooks/useClickAway';
import CellLabels from './utils/CellLabels';
import getTypeStyles from './utils/getTypeStyles';
import Input from '@lib/Input/Input';
import useEventListener from '@hooks/useEventListener';
import useFocus from './utils/useFocus';

const PlannerCell: React.FC<Planner_Cell> = (props) => {
  const { plannerData, updateSelectedCells, updateCellsData, selectedWeek } = usePlanner();
  const { isSelected } = useCell(props.cell_id);
  const cellRef = useRef(null);
  const [inputRef, setFocus] = useFocus();
  const [inputVal, setInputVal] = useState(props.text);

  // Type styles - left box shadow and background
  const typeStyles = getTypeStyles(props.type_id, plannerData?.types, isSelected);

  // Handlers
  const handleClick = () => updateSelectedCells('SELECTED_CELL_ADD', props);
  const handleUpdateCell = (data: Planner_Cell_Updates) => {
    setInputVal(data.text);
    updateCellsData(selectedWeek, data);
  };

  // Unfocus cell when click outside
  useClickAway(cellRef, () => updateSelectedCells('SELECTED_CELL_REMOVE', props));

  // Focus input on Enter
  useEventListener('keydown', (e: KeyboardEvent) => setFocus(isSelected, e));

  useEffect(() => {
    setInputVal(props.text);
  }, [props.text]);

  return (
    <div
      ref={isSelected ? cellRef : null}
      className={clsx(classes.planner_cell, classes[`selected_${isSelected}`])}
      onClick={handleClick}
      style={{ ...typeStyles }}
    >
      <CellHour cell_id={props.cell_id} className={classes.display_hour} />

      {isSelected ? (
        <Input
          ref={inputRef}
          width="86%"
          fSize="10px"
          defaultValue={inputVal}
          onChange={(text) => handleUpdateCell({ text })}
          disabled={!isSelected}
          isDebounce
          isUnderline={false}
        />
      ) : (
        <div className={classes.display_text}>{inputVal}</div>
      )}

      <CellLabels {...props} className={classes.display_labels} />
    </div>
  );
};

export default PlannerCell;
