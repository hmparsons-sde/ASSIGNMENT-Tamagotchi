import '../styles/main.scss';
import buildEatQuad from './Eat/eat';
import buildPlayQuad from './Play/play';
import buildFightQuad from './Fight/fight';
import buildSleepQuad from './Sleep/sleep';

const init = () => {
  buildEatQuad();
  buildSleepQuad();
  buildFightQuad();
  buildPlayQuad();
};

init();
