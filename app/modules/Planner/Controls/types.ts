import { Planner_Data } from '@ts/planner.types';

export interface ControlsProps {
  plannerData: Planner_Data;
}

export interface State {
  typesModal: boolean;
  settingsModal: boolean;
  showModal: boolean;
}

export const initialState: State = {
  settingsModal: false,
  typesModal: false,
  showModal: false,
};

export interface ModalsProps {
  state: State;
  toggleModal: (type: keyof State) => void;
}
