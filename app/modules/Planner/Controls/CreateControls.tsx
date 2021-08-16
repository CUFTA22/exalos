import { EyeShow24Regular, Settings24Regular } from '@fluentui/react-icons';
import Card from '@lib/Card/Card';
import FAB from '@lib/FAB/FAB';
import { useState } from 'react';
import TypeSelect from '../TypeSelect';
import TypesModal from '../TypesModal/TypesModal';
import styles from './Controls.module.scss';
import { initialState, State } from './types';

const CreateControls = () => {
  const [state, setState] = useState<State>(initialState);

  const toggleModal = (type: keyof State) => setState({ ...state, [type]: !state[type] });

  return (
    <Card className={styles.controls}>
      {state.typesModal && (
        <TypesModal isOpen={state.typesModal} toggleModal={() => toggleModal('typesModal')} />
      )}
      <div className={styles.left}>
        <TypeSelect />
        {/* <button onClick={() => toggleModal('typesModal')}>toggle</button> */}
      </div>
      <div className={styles.right}>
        <FAB className={styles.fab} Icon={Settings24Regular} />
        <FAB className={styles.fab} Icon={EyeShow24Regular} />
      </div>
    </Card>
  );
};

export default CreateControls;
