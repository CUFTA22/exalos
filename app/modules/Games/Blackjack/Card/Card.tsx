import { BlackjackCard } from '@utils/resources/blackjackCards';

const Card: React.FC<BlackjackCard> = ({ color, symbol, value }) => {
  return <div>{value?.[0]}</div>;
};

export default Card;
