import classes from './TypesModal.module.scss';
import Modal from '@lib/Modal/Modal';
import Input from '@lib/Input/Input';
import { useState } from 'react';
import { initialState, Props } from './types';
import { Add24Regular, CircleHalfFill24Regular, Color24Regular } from '@fluentui/react-icons';
import TypeRow from './components/TypeRow';
import useAddType from 'app/api/planner/type/post';
import ColorPicker from '@element/ColorPicker/ColorPicker';

const TypesModal: React.FC<Props> = ({ isOpen, toggleModal, plannerData }) => {
  const { addType, isLoading } = useAddType();

  const [state, setState] = useState(initialState);
  const setName = (name: string) => setState({ ...state, name });

  const handleAddType = () => {
    addType(state);
    setState(initialState);
  };

  const changeColor = (color: string) => setState({ ...state, color });
  const togglePicker = () => setState({ ...state, openPicker: !state.openPicker });
  const renderTypes = () => plannerData?.types?.map((type) => <TypeRow key={type._id} {...type} />);

  return (
    <Modal content_className={classes.modal_types} isOpen={isOpen} onRequestClose={toggleModal}>
      <Input
        value={state.name}
        onChange={setName}
        onEnter={handleAddType}
        placeholder="Enter type name"
        width="400px"
        icons_front={[
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '4px',
              backgroundColor: state.color,
            }}
          ></div>,
        ]}
        icons_back={[
          <div>
            <Color24Regular
              onClick={togglePicker}
              className="no-clickaway"
              primaryFill="hsl(240, 28%, 64%)"
            />
            <ColorPicker isOpen={state.openPicker} color={state.color} onChange={changeColor} />
          </div>,
          <Add24Regular primaryFill="hsl(240, 28%, 64%)" onClick={!isLoading && handleAddType} />,
        ]}
      />
      <div className={classes.types_wrapper}>{renderTypes()}</div>
    </Modal>
  );
};

export default TypesModal;
