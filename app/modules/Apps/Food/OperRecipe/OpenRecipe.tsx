import classes from './OpenRecipe.module.scss';
import Modal from '@lib/Modal/Modal';
import { ModalProps } from '@ts/modal.types';
import { IRecipe } from '@utils/resources/recipes';
import Typography from '@lib/Typography/Typography';

interface Props extends ModalProps {
  recipe: IRecipe;
}

const OpenRecipe: React.FC<Props> = ({ isOpen, toggleModal, recipe }) => {
  return (
    <Modal content_className={classes.modal_recipe} isOpen={isOpen} onRequestClose={toggleModal}>
      <div className={classes.top}>
        <Typography text={recipe?.title} fSize={32} fWeight={600} maxLines={1} />

        <Typography
          text={'Page: ' + recipe?.page?.toString()}
          fSize={20}
          fWeight={500}
          color="secondary"
          maxLines={1}
        />
      </div>

      <Typography
        text={recipe?.description}
        fSize={18}
        fWeight={500}
        className={classes.description}
        color="secondary"
        maxLines={20}
      />
    </Modal>
  );
};

export default OpenRecipe;
