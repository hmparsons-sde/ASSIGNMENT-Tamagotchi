import '../styles/main.scss';
import { landingPage, buttonEvent } from './landingPage';
import { buildEatQuad } from './Eat/eat';
import { buildPlayQuad } from './Play/play';
import { buildFightQuad } from './Fight/fight';
import { buildSleepQuad } from './Sleep/sleep';
import { progressBar, updateBar } from './data/healthStats';

const init = () => {
  landingPage();
  buildEatQuad();
  buildPlayQuad();
  buildFightQuad();
  buildSleepQuad();
  progressBar();
  updateBar();
  buttonEvent();
};

init();
