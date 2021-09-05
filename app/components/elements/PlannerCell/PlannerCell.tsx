import React, { useRef } from 'react';
import styles from './PlannerCell.module.scss';
import clsx from 'clsx';
import usePlanner from '@module/Planner/usePlanner';
import useCellPosition from './utils/useCellPosition';
import { Planner_Cell, Planner_Cell_Updates } from '@ts/planner.types';
import CellInput from './utils/CellInput';
import { formatCellHour } from './utils/formatCellHour';
import CellHour from './utils/CellHour';
import useClickAway from '@hooks/useClickAway';
import CellLabels from './utils/CellLabels';
import { getTypeStyles } from './utils/getTypeStyles';

const PlannerCell: React.FC<Planner_Cell> = (props) => {
  const { selectedCells, updateSelectedCells, updateCellsData, plannerData, selectedWeek } =
    usePlanner();
  const cellRef = useRef(null);
  const isSelected = useCellPosition(props.cell_id, selectedCells);

  // Type styles - left box shadow and background
  const typeStyles = getTypeStyles(props.type, plannerData?.types, isSelected);

  // Handlers
  const handleClick = () => updateSelectedCells('SELECTED_CELL_ADD', props);
  const handleUpdateCell = (data: Planner_Cell_Updates) => updateCellsData(selectedWeek, data);

  // Unfocus cell when click outside
  useClickAway(cellRef, () => updateSelectedCells('SELECTED_CELL_REMOVE', props));

  return (
    <div
      ref={isSelected ? cellRef : null}
      className={clsx(styles.planner_cell, styles[`selected_${isSelected}`])}
      onClick={handleClick}
      style={{ ...typeStyles }}
    >
      <CellHour cell_id={props.cell_id} className={styles.display_hour} />

      <CellInput
        defaultValue={props.text}
        onChange={(text) => handleUpdateCell({ text })}
        disabled={!isSelected}
      />

      <CellLabels {...props} className={styles.display_labels} />
    </div>
  );
};

export default PlannerCell;
