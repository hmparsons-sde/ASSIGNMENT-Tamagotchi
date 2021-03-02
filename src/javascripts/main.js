import '../styles/main.scss';
import { landingPage, buttonEvent } from './events/landingPage';
import { buildEatQuad } from './Eat/eat';
import { buildPlayQuad } from './Play/play';
import { buildFightQuad } from './Fight/fight';
import { buildSleepQuad } from './Sleep/sleep';

const init = () => {
  landingPage();
  buildEatQuad();
  buildPlayQuad();
  buildFightQuad();
  buildSleepQuad();
  buttonEvent();
};

init();
