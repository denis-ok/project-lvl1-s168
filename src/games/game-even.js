import { getRandomInt, isEven, cons } from '../utils';
import { startGame } from '../index';

const rules = 'Answer "yes" if number even otherwise answer "no".\n';

const pairQA = () => {
  const num = getRandomInt(1, 100);
  const answer = isEven(num) ? 'Yes' : 'No';
  const pair = cons(num, answer);
  return pair;
};

const launch = () => startGame(rules, pairQA);

export default launch;
