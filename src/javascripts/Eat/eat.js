import printToDOM from '../events/DOMEvents';

let full = 100;

const fullScore = () => full;

const updateFull = () => {
  document.querySelector('#full-score').innerHTML = `${full}`;
};

const feedKale = (e) => {
  e.preventDefault();
  full += Math.floor(Math.random(1) * Math.floor(10));
  if (full > 100) {
    full = 100;
  }
  updateFull();
};

const feedPizza = (e) => {
  e.preventDefault();
  full -= Math.floor(Math.random(1) * Math.floor(5));
  if (full <= 0) {
    full = 0;
    document.querySelector('#eat-quad').innerHTML = '<h2 class=\'text-danger\'>GAME OVER</h2>';
    document.querySelector('#eat-quad').style.backgroundColor = '#0e0d15';
  }
  updateFull();
};

const buildEatQuad = () => {
  let domString = '';
  domString += `
  <div id='eat-quad'><h2>EAT</h2></div>
  <div id='full-score'><p><b><span id='full-score'>${full}</span></p></div>
  <div class='mt-3' id='full-btn-container'>
    <button type='button' class='btn' id='kale-btn'>Kale Salad</button>
    <button type='button' class='btn' id='pizza-btn'>Pizza Party</button>
  </div>`;

  printToDOM('#eat', domString);
  document.querySelector('#kale-btn').addEventListener('click', feedKale);
  document.querySelector('#pizza-btn').addEventListener('click', feedPizza);
};

export { buildEatQuad, fullScore };
