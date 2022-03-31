import classes from './PlannerWeek.module.scss';
import { Planner_Week } from '@ts/planner.types';
import usePlanner from '@module/Apps/Planner/usePlanner';
import clsx from 'clsx';
import { Dismiss12Regular } from '@fluentui/react-icons';
import useDeleteWeek from 'app/api/planner/week/delete';
import { useState } from 'react';
import ConfirmationModal from '@shared/ConfirmationModal/ConfirmationModal';

const PlannerWeek: React.FC<Planner_Week> = ({ week_id }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const { deleteWeek, isLoading } = useDeleteWeek();
  const { selectedWeek, setSelectedWeek } = usePlanner();

  const toggleDeleteModal = () => setDeleteModal(!deleteModal);
  const handleDelete = () => deleteWeek(week_id);

  const isSelected = selectedWeek === week_id;

  return (
    <div
      className={clsx(classes.planner_week, { [classes.active]: isSelected })}
      onClick={() => setSelectedWeek(week_id)}
    >
      <ConfirmationModal
        action={handleDelete}
        isOpen={deleteModal}
        toggleOpen={toggleDeleteModal}
        subtitle="Please confirm deletion of this week"
        isLoading={isLoading}
      />

      {week_id}

      <Dismiss12Regular
        onClick={toggleDeleteModal}
        primaryFill="hsl(0, 88%, 77%)"
        className={classes.remove_week}
      />
    </div>
  );
};

export default PlannerWeek;
