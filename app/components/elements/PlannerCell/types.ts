import { Planner_Cell } from '@ts/planner.types';

export interface Props extends Planner_Cell {
  previous: Planner_Cell;
}
