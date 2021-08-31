import React from 'react';
import styles from './PlannerCell.module.scss';
import clsx from 'clsx';
import usePlanner from '@module/Planner/usePlanner';
import useCellPosition from './helpers/useCellPosition';
import { Planner_Cell } from '@ts/planner.types';

const PlannerCell: React.FC<Planner_Cell> = (cell) => {
  const { cell_id, task_id, text, type } = cell;

  const { selectedCells, updateSelectedCells } = usePlanner();
  const position = useCellPosition(cell_id, selectedCells);

  const handleMouseDown = () => {
    updateSelectedCells('SELECTED_CELL_ADD', cell);
  };

  // Idea - right click -> opens popup < Expand, Join Meet, Clear Cell >
  const display_text = ['top', 'solo'].includes(position) ? text : '';

  return (
    <div
      className={clsx(styles.planner_cell, styles[`selected_${position}`])}
      onDragOver={handleMouseDown}
    >
      {cell_id}
      {display_text}
    </div>
  );
};

export default PlannerCell;
