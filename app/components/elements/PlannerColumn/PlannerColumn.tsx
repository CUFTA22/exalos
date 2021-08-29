import PlannerCell from '@element/PlannerCell/PlannerCell';
import styles from './PlannerColumn.module.scss';
import { Props } from './types';

const PlannerColumn: React.FC<Props> = ({ cells }) => {
  return (
    <div className={styles.planner_column}>
      {cells.map((cell, i) => {
        let previousCell = cells[i - 1];
        return <PlannerCell {...cell} key={cell.cell_id} previous={previousCell} />;
      })}
    </div>
  );
};

export default PlannerColumn;
