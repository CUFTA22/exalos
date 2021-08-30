import { Color20Regular, Delete20Regular, Edit20Regular } from '@fluentui/react-icons';
import { useNonInitialEffect } from '@hooks/useNonInitialEffect';
import Card from '@lib/Card/Card';
import Input from '@lib/Input/Input';
import SimpleFAB from '@lib/SimpleFAB/SimpleFAB';
import { Planner_Type } from '@ts/planner.types';
import useDeleteType from 'app/api/planner/type/delete';
import { useState } from 'react';
import styles from '../TypesModal.module.scss';

const TypeRow: React.FC<Planner_Type> = ({ color, name, _id }) => {
  const { deleteType, isLoading } = useDeleteType();
  const [state, setState] = useState({ name, color, _id });

  const changeName = () => {};

  const handleDeleteType = async () => await deleteType(_id);

  useNonInitialEffect(() => setState({ color, name, _id }), [name]);

  return (
    <Card className={styles.type_row}>
      <Input
        value={state.name}
        onChange={changeName}
        placeholder="Change name"
        width="100px"
        disabled
      />

      <div className={styles.type_actions}>
        <SimpleFAB Icon={<Color20Regular primaryFill="hsl(240, 28%, 64%)" />} />
        <SimpleFAB
          Icon={<Delete20Regular primaryFill="hsl(0, 88%, 77%)" onClick={handleDeleteType} />}
        />
      </div>
    </Card>
  );
};

export default TypeRow;
