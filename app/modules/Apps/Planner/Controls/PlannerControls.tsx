import { Add24Regular, EyeShow24Regular, Settings24Regular } from '@fluentui/react-icons';
import Card from '@lib/Card/Card';
import FAB from '@lib/FAB/FAB';
import { useState } from 'react';
import TypeSelect from './components/TypeSelect';
import classes from './Controls.module.scss';
import { ControlsProps, initialState, State } from './types';
import Modals from './components/Modals';
import Spinner from '@lib/Spinner/Spinner';
import AddMeetUrl from './components/AddMeetUrl';

const CreateControls: React.FC<ControlsProps> = ({ plannerData }) => {
  const [state, setState] = useState<State>(initialState);

  const toggleModal = (type: keyof State) => setState({ ...state, [type]: !state[type] });

  if (!plannerData) return <Spinner />;

  return (
    <Card className={classes.controls}>
      <Modals state={state} toggleModal={toggleModal} />

      <div className={classes.left}>
        <TypeSelect />
        <FAB onClick={() => toggleModal('typesModal')} className={classes.mleft}>
          <Add24Regular />
        </FAB>

        <div className={classes.divider}></div>

        <AddMeetUrl />
      </div>
      <div className={classes.right}>
        {/* V.3 Templates */}
        {/* <FAB onClick={() => {}} className={classes.mleft}>
          <Extension24Regular />
        </FAB> */}
        <FAB onClick={() => toggleModal('settingsModal')} className={classes.mleft}>
          <Settings24Regular />
        </FAB>
        {/* <FAB onClick={() => toggleModal('showModal')} className={classes.mleft}>
          <EyeShow24Regular />
        </FAB> */}
      </div>
    </Card>
  );
};

export default CreateControls;
