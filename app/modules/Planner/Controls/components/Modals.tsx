import ConfirmationModal from '@element/ConfirmationModal/ConfirmationModal';
import SettingsModal from '../../modals/SettingsModal/SettingsModal';
import ShowModal from '../../modals/ShowModal/ShowModal';
import TypesModal from '../../modals/TypesModal/TypesModal';
import { ModalsProps } from '../types';

const Modals: React.FC<ModalsProps> = ({ state, toggleModal }) => {
  return (
    <>
      <TypesModal isOpen={state.typesModal} toggleModal={() => toggleModal('typesModal')} />

      <SettingsModal
        isOpen={state.settingsModal}
        toggleModal={() => toggleModal('settingsModal')}
      />

      <ConfirmationModal
        action={() => {}}
        isOpen={state.showModal}
        toggleOpen={() => toggleModal('showModal')}
      />
    </>
  );
};

export default Modals;
