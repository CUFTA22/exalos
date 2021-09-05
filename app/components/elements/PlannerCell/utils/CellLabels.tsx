import { Maximize16Regular, Video16Regular } from '@fluentui/react-icons';
import { Planner_Cell } from '@ts/planner.types';

interface Props extends Planner_Cell {
  className: string;
}

const CellLabels: React.FC<Props> = ({ meet_url, task_id, className }) => {
  return (
    <div className={className}>
      {meet_url && <Video16Regular primaryFill="hsl(240, 28%, 64%)" />}
      {task_id && <Maximize16Regular primaryFill="hsl(240, 28%, 64%)" />}
    </div>
  );
};

export default CellLabels;
