import ConfirmationModal from '@element/ConfirmationModal/ConfirmationModal';
import SettingsModal from '../modals/SettingsModal/SettingsModal';
import ShowModal from '../modals/ShowModal/ShowModal';
import TypesModal from '../modals/TypesModal/TypesModal';
import { ModalsProps } from './types';

const Modals: React.FC<ModalsProps> = ({ state, toggleModal }) => {
  return (
    <>
      {state.typesModal && (
        <TypesModal isOpen={state.typesModal} toggleModal={() => toggleModal('typesModal')} />
      )}
      {state.settingsModal && (
        <SettingsModal isOpen={state.typesModal} toggleModal={() => toggleModal('settingsModal')} />
      )}
      {state.showModal && (
        // <ShowModal isOpen={state.showModal} toggleModal={() => toggleModal('showModal')} />
        <ConfirmationModal
          action={() => {}}
          isOpen={state.showModal}
          toggleOpen={() => toggleModal('showModal')}
        />
      )}
    </>
  );
};

export default Modals;
