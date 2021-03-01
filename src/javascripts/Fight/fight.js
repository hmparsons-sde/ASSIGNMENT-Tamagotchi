import printToDOM from '../DOMEvents';

let strength = 100;

const strengthScore = () => strength;

const updateStrength = () => {
  document.querySelector('#strength-score').innerHTML = `${strength}`;
};

const braveRetreat = (e) => {
  e.preventDefault();
  strength += Math.floor(Math.random(1) * Math.floor(5));
  if (strength > 100) {
    strength = 100;
  }
  updateStrength();
};

const upperCut = (e) => {
  e.preventDefault();
  strength -= Math.floor(Math.random(1) * Math.floor(10));
  if (strength <= 0) {
    strength = 0;
    document.querySelector('#fight-quad-heading').innerHTML = '<h2 class=\'text-danger\'>GAME OVER</h2>';
    document.querySelector('#fight-quad-heading').style.backgroundColor = '#0e0d15';
  }
  updateStrength();
};

const buildFightQuad = () => {
  let domString = '';
  domString += `<div id='fight-quad'>
    <div id='fight-quad-heading'><h2>FIGHT</h2></div>
    <div id='strength-score'><p><b><span id='strength-score'>${strength}</span></p></div>
    <div class='mt-3' id='fight-btn-container'>
      <button type='button' class='btn' id='retreat-btn'>Retreat (Bravely)</button>
      <button type='button' class='btn' id='fight-btn'>Uppercut (Hi-Ya!)</button>
      </div>
      </div>`;

  printToDOM('#fight', domString);
  document.querySelector('#retreat-btn').addEventListener('click', braveRetreat);
  document.querySelector('#fight-btn').addEventListener('click', upperCut);
};

export { buildFightQuad, strengthScore };
