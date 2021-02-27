import printToDOM from '../DOMEvents';

let energy = 50;

const updateEnergy = () => {
  document.querySelector('#energy-score').innerHTML = `${energy}`;
};

const nap = (e) => {
  e.preventDefault();
  energy += 50;
  if (energy > 100) {
    energy = 100;
  }
  updateEnergy();
};

const slumber = (e) => {
  e.preventDefault();
  energy += 60;
  if (energy > 100) {
    energy = 100;
  }
  updateEnergy();
};

const buildSleepQuad = () => {
  let domString = '';
  domString += `
      <div id='sleep-quad'><h2>SNOOZE</h2></div>
      <div id='energy-score'><p>Energy: <b><span id='energy-score'>${energy}</span></p></div>
      <div class='mt-3' id='sleep-btn-container'>
        <button type='button' class='btn' id='nap-btn'>Power Nap</button>
        <button type='button' class='btn' id='slumber-btn'>Delta Waves</button>
      </div>`;
  printToDOM('#sleep', domString);
  document.querySelector('#nap-btn').addEventListener('click', nap);
  document.querySelector('#slumber-btn').addEventListener('click', slumber);
};

export default buildSleepQuad;
