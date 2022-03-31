import PlannerCell from '@element/PlannerCell/PlannerCell';
import classes from './PlannerColumn.module.scss';
import { Props } from './types';

const PlannerColumn: React.FC<Props> = ({ cells }) => {
  return (
    <div className={classes.planner_column}>
      {cells.map((cell) => (
        <PlannerCell key={cell.cell_id} {...cell} />
      ))}
    </div>
  );
};

export default PlannerColumn;
