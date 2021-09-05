import {
  Add24Regular,
  CalendarStar16Regular,
  CalendarStar24Regular,
  Extension24Regular,
  EyeShow24Regular,
  Settings24Regular,
  Video24Regular,
} from '@fluentui/react-icons';
import Card from '@lib/Card/Card';
import FAB from '@lib/FAB/FAB';
import { useState } from 'react';
import TypeSelect from './components/TypeSelect';
import styles from './Controls.module.scss';
import { ControlsProps, initialState, State } from './types';
import Modals from './components/Modals';
import Input from '@lib/Input/Input';

const CreateControls: React.FC<ControlsProps> = ({ plannerData }) => {
  const [state, setState] = useState<State>(initialState);

  const toggleModal = (type: keyof State) => setState({ ...state, [type]: !state[type] });

  return (
    <Card className={styles.controls}>
      <Modals state={state} toggleModal={toggleModal} />

      <div className={styles.left}>
        <TypeSelect />
        <FAB onClick={() => toggleModal('typesModal')} className={styles.mleft}>
          <Add24Regular />
        </FAB>

        <div className={styles.divider}></div>

        <Input
          value="https://meet.google.com/69696969"
          onChange={() => {}}
          placeholder="Add meet url"
          width="240px"
          className="no-clickaway"
          icons_front={[<Video24Regular primaryFill="hsl(240, 28%, 64%)" />]}
        />
      </div>
      <div className={styles.right}>
        {/* V.3 Templates */}
        {/* <FAB onClick={() => {}} className={styles.mleft}>
          <Extension24Regular />
        </FAB> */}
        <FAB onClick={() => toggleModal('settingsModal')} className={styles.mleft}>
          <Settings24Regular />
        </FAB>
        <FAB onClick={() => toggleModal('showModal')} className={styles.mleft}>
          <EyeShow24Regular />
        </FAB>
      </div>
    </Card>
  );
};

export default CreateControls;
