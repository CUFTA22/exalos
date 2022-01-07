import usePlanner from '@module/Apps/Planner/usePlanner';
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

      <ShowModal isOpen={state.showModal} toggleModal={() => toggleModal('showModal')} />
    </>
  );
};

export default Modals;
