import { ModalProps } from '@ts/modal.types';
import { Planner_Data } from '@ts/planner.types';

export interface Props extends ModalProps {
  plannerData: Planner_Data;
}
export interface State {
  name: string;
  color: string;
  openPicker: boolean;
}

export const initialState: State = {
  name: '',
  color: '#ffffff',
  openPicker: false,
};
