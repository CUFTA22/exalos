import styles from './PlannerCell.module.scss';
import { Planner_Cell } from '@ts/planner.types';
import { Props } from './types';

const PlannerCell: React.FC<Props> = ({ text, type, cell_id, task_id, previous }) => {
  const shouldDisplay = text !== previous?.text;

  const display_text = shouldDisplay ? text : '';

  // Idea - right click -> opens popup < Expand, Join Meet, Clear Cell >

  return (
    <div className={styles.planner_cell}>
      {cell_id}
      {display_text}
    </div>
  );
};

export default PlannerCell;
