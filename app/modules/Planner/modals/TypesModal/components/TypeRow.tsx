import { Color20Regular, Edit20Regular } from '@fluentui/react-icons';
import Card from '@lib/Card/Card';
import Input from '@lib/Input/Input';
import SimpleFAB from '@lib/SimpleFAB/SimpleFAB';
import { Planner_Type } from '@ts/planner.types';
import { useState } from 'react';
import styles from '../TypesModal.module.scss';

const TypeRow: React.FC<Planner_Type> = ({ color, name }) => {
  const [state, setState] = useState({ name, color });

  const changeName = () => {};

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
        <SimpleFAB Icon={<Edit20Regular primaryFill="hsl(240, 28%, 64%)" />} />
      </div>
    </Card>
  );
};

export default TypeRow;
