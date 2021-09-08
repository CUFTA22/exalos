import React, { useRef } from 'react';
import styles from './PlannerCell.module.scss';
import clsx from 'clsx';
import usePlanner from '@module/Planner/usePlanner';
import useCell from './utils/useCell';
import { Planner_Cell, Planner_Cell_Updates } from '@ts/planner.types';
import CellHour from './utils/CellHour';
import useClickAway from '@hooks/useClickAway';
import CellLabels from './utils/CellLabels';
import { getTypeStyles } from './utils/getTypeStyles';
import Input from '@lib/Input/Input';
import CellDay from './utils/CellDay';

const PlannerCell: React.FC<Planner_Cell> = (props) => {
  const cellRef = useRef(null);

  const plannerCtrl = usePlanner();
  const cellCtrl = useCell(props.cell_id);

  // Type styles - left box shadow and background
  const typeStyles = getTypeStyles(props.type, plannerCtrl.plannerData?.types, cellCtrl.isSelected);

  // Handlers
  const handleClick = () => plannerCtrl.updateSelectedCells('SELECTED_CELL_ADD', props);
  const handleUpdateCell = (data: Planner_Cell_Updates) =>
    plannerCtrl.updateCellsData(plannerCtrl.selectedWeek, data);

  // Unfocus cell when click outside
  useClickAway(cellRef, () => plannerCtrl.updateSelectedCells('SELECTED_CELL_REMOVE', props));

  return (
    <div
      ref={cellCtrl.isSelected ? cellRef : null}
      className={clsx(styles.planner_cell, styles[`selected_${cellCtrl.isSelected}`], {
        [styles.sameAsPrev]: cellCtrl.sameAsNext,
      })}
      onClick={handleClick}
      style={{ ...typeStyles }}
    >
      <CellHour cell_id={props.cell_id} className={styles.display_hour} />
      <CellDay cell_id={props.cell_id} className={styles.display_day} />

      <Input
        width="86%"
        fSize="10px"
        defaultValue={props.text}
        onChange={(text) => handleUpdateCell({ text })}
        disabled={!cellCtrl.isSelected}
        isDebounce
        isUnderline={false}
      />

      <CellLabels {...props} className={styles.display_labels} />
    </div>
  );
};

export default PlannerCell;
