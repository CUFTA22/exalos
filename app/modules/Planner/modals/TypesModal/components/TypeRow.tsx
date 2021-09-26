import ColorPicker from '@element/ColorPicker/ColorPicker';
import { Color20Regular, Delete20Regular, Edit20Regular } from '@fluentui/react-icons';
import { useNonInitialEffect } from '@hooks/useNonInitialEffect';
import Card from '@lib/Card/Card';
import Input from '@lib/Input/Input';
import SimpleFAB from '@lib/SimpleFAB/SimpleFAB';
import usePlanner from '@module/Planner/usePlanner';
import { Planner_Type } from '@ts/planner.types';
import useDeleteType from 'app/api/planner/type/delete';
import { useState } from 'react';
import styles from '../TypesModal.module.scss';

const TypeRow: React.FC<Planner_Type> = ({ color, name, _id }) => {
  const { updateTypesData } = usePlanner();
  const { deleteType } = useDeleteType();
  const [state, setState] = useState({ name, color, _id });
  const [openPicker, setOpenPicker] = useState(false);

  const changeName = (name: string) => {
    updateTypesData(state._id, { name });
  };
  const changeColor = (color: string) => {
    updateTypesData(state._id, { color });
    setState({ ...state, color });
  };

  const handleDeleteType = async () => await deleteType(_id);
  const togglePicker = () => setOpenPicker(!openPicker);

  useNonInitialEffect(() => setState({ color, name, _id }), [name]);

  return (
    <Card className={styles.type_row}>
      <Input
        defaultValue={state.name}
        onChange={changeName}
        placeholder="Change name"
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
        width="140px"
        isUnderline={false}
        isDebounce
      />

      <div className={styles.type_actions}>
        <ColorPicker
          isOpen={openPicker}
          color={state.color}
          onChange={changeColor}
          isDebounce
          css={{ position: 'fixed', top: '50%', transform: 'translate(-50%, -50%)' }}
        />
        <SimpleFAB
          Icon={<Color20Regular onClick={togglePicker} primaryFill="hsl(240, 28%, 64%)" />}
        />
        <SimpleFAB
          Icon={<Delete20Regular primaryFill="hsl(0, 88%, 77%)" onClick={handleDeleteType} />}
        />
      </div>
    </Card>
  );
};

export default TypeRow;
