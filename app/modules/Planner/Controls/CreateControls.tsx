import {
  Add24Regular,
  EyeShow24Regular,
  Settings24Regular,
  Video24Regular,
} from '@fluentui/react-icons';
import Card from '@lib/Card/Card';
import FAB from '@lib/FAB/FAB';
import { useState } from 'react';
import TypeSelect from '../TypeSelect';
import styles from './Controls.module.scss';
import { ControlsProps, initialState, State } from './types';
import Modals from './Modals';

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
        <FAB onClick={() => toggleModal('typesModal')} className={styles.mleft}>
          <Video24Regular />
        </FAB>
      </div>
      <div className={styles.right}>
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
