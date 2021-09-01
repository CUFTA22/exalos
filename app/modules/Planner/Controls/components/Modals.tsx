import ConfirmationModal from '@shared/ConfirmationModal/ConfirmationModal';
import usePlanner from '@module/Planner/usePlanner';
import SettingsModal from '../../modals/SettingsModal/SettingsModal';
import ShowModal from '../../modals/ShowModal/ShowModal';
import TypesModal from '../../modals/TypesModal/TypesModal';
import { ModalsProps } from '../types';

const Modals: React.FC<ModalsProps> = ({ state, toggleModal }) => {
  const { plannerData } = usePlanner();

  return (
    <>
      <TypesModal
        isOpen={state.typesModal}
        toggleModal={() => toggleModal('typesModal')}
        plannerData={plannerData}
      />

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
