import classes from './CardFlipped.module.scss';

const CardFlipped = () => {
  return (
    <div className={classes.card_flipped}>
      <div className={classes.inner_ring}></div>
    </div>
  );
};

export default CardFlipped;
