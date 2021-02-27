import printToDOM from '../DOMEvents';

let strength = 100;

const updateStrength = () => {
  document.querySelector('#strength-score').innerHTML = `${strength}`;
};

const braveRetreat = (e) => {
  e.preventDefault();
  strength += 1;
  if (strength > 100) {
    strength = 100;
  }
  updateStrength();
};

const upperCut = (e) => {
  e.preventDefault();
  strength -= 10;
  if (strength <= 0) {
    strength = 100;
  }
  updateStrength();
};

const buildFightQuad = () => {
  let domString = '';
  domString += `
    <div id='fight-quad'><h2>FIGHT</h2></div>
    <div id='strength-score'><p>Strength: <b><span id='strength-score'>${strength}</span></p></div>
    <div class='mt-3' id='fight-btn-container'>
      <button type='button' class='btn' id='retreat-btn'>Retreat (Bravely)</button>
      <button type='button' class='btn' id='fight-btn'>Uppercut (Hi-Ya!)</button>
    </div>`;

  printToDOM('#fight', domString);
  document.querySelector('#retreat-btn').addEventListener('click', braveRetreat);
  document.querySelector('#fight-btn').addEventListener('click', upperCut);
};

export default buildFightQuad;
