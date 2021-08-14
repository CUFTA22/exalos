import Card from '@lib/Card/Card';
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
      <div className="left">
        <TypeSelect />
        {/* <button onClick={() => toggleModal('typesModal')}>toggle</button> */}
      </div>
    </Card>
  );
};

export default CreateControls;
