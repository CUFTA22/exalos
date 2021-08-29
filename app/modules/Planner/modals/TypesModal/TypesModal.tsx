import styles from './TypesModal.module.scss';
import Modal from '@lib/Modal/Modal';
import { ModalProps } from '@ts/modal.types';
import Input from '@lib/Input/Input';
import { useState } from 'react';
import { initialState } from './types';
import { Add24Regular, CircleHalfFill24Regular, Color24Regular } from '@fluentui/react-icons';
import TypeRow from './components/TypeRow';
import { usePlannerData } from 'app/api/planner/get';
import useAddType from 'app/api/planner/type/post';

const TypesModal: React.FC<ModalProps> = ({ isOpen, toggleModal }) => {
  const plannerData = usePlannerData();
  const { addType, isLoading } = useAddType();

  const [state, setState] = useState(initialState);
  const setName = (name: string) => setState({ ...state, name });

  const handleAddType = async () => await addType(state);

  const renderTypes = () => plannerData?.data?.types?.map((type) => <TypeRow {...type} />);

  return (
    <Modal content_className={styles.modal_types} isOpen={isOpen} onRequestClose={toggleModal}>
      <Input
        value={state.name}
        onChange={setName}
        placeholder="Enter type name"
        width="400px"
        icons_front={[<CircleHalfFill24Regular primaryFill={state.color} />]}
        icons_back={[
          <Color24Regular primaryFill="hsl(240, 28%, 64%)" />,
          <Add24Regular primaryFill="hsl(240, 28%, 64%)" onClick={!isLoading && handleAddType} />,
        ]}
      />
      <div className={styles.types_wrapper}>{renderTypes()}</div>
    </Modal>
  );
};

export default TypesModal;
