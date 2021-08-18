import { Add24Regular, EyeShow24Regular, Settings24Regular } from '@fluentui/react-icons';
import Card from '@lib/Card/Card';
import FAB from '@lib/FAB/FAB';
import { useState } from 'react';
import TypeSelect from '../TypeSelect';
import SettingsModal from '../SettingsModal/SettingsModal';
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
      {state.settingsModal && (
        <SettingsModal isOpen={state.typesModal} toggleModal={() => toggleModal('settingsModal')} />
      )}

      <div className={styles.left}>
        <TypeSelect />
        <FAB
          onClick={() => toggleModal('typesModal')}
          className={styles.mleft}
          Icon={Add24Regular}
        />
      </div>
      <div className={styles.right}>
        <FAB
          onClick={() => toggleModal('settingsModal')}
          className={styles.mleft}
          Icon={Settings24Regular}
        />
        <FAB className={styles.mleft} Icon={EyeShow24Regular} />
      </div>
    </Card>
  );
};

export default CreateControls;
