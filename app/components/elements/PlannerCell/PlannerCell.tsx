import React from 'react';
import styles from './PlannerCell.module.scss';
import clsx from 'clsx';
import usePlanner from '@module/Planner/usePlanner';
import useCellPosition from './utils/useCellPosition';
import { Planner_Cell, Planner_Cell_Updates } from '@ts/planner.types';
import CellInput from './utils/CellInput';
import { formatCellHour } from './utils/formatCellHour';
import CellHour from './utils/CellHour';

const PlannerCell: React.FC<Planner_Cell> = ({ cell_id, task_id, text, type, meet_url }) => {
  const { selectedCells, updateSelectedCells, updateCellsData, selectedWeek } = usePlanner();
  const position = useCellPosition(cell_id, selectedCells);

  const handleClick = () =>
    updateSelectedCells('SELECTED_CELL_ADD', { cell_id, task_id, text, type, meet_url });

  const handleUpdateCell = (data: Planner_Cell_Updates) => updateCellsData(selectedWeek, data);

  // Idea - right click -> opens popup < Expand, Join Meet, Clear Cell >
  const display_text = position ? text : ''; // to hide multiple in a row

  return (
    <div
      className={clsx(styles.planner_cell, styles[`selected_${position}`])}
      onClick={handleClick}
    >
      <CellHour cell_id={cell_id} className={styles.display_hour} />

      <CellInput
        defaultValue={text}
        onChange={(text) => handleUpdateCell({ cell_id, text })}
        disabled={!position}
      />
    </div>
  );
};

export default PlannerCell;
