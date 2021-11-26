import styles from './CardFlipped.module.scss';

const CardFlipped = () => {
  return (
    <div className={styles.card_flipped}>
      <div className={styles.inner_ring}></div>
    </div>
  );
};

export default CardFlipped;
