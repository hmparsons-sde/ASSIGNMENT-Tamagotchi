import printToDOM from '../DOMEvents';

let full = 100;

const updateFull = () => {
  document.querySelector('#full-score').innerHTML = `${full}`;
};

const feedKale = (e) => {
  e.preventDefault();
  full += 10;
  if (full > 100) {
    full = 100;
  }
  updateFull();
};

const feedPizza = (e) => {
  e.preventDefault();
  full -= 3;
  if (full <= 0) {
    full = 'death';
  }
  updateFull();
};

const buildEatQuad = () => {
  let domString = '';
  domString += `
  <div id='eat-quad'><h2>EAT</h2></div>
  <div id='full-score'><p>Fullness: <b><span id='full-score'>${full}</span></p></div>
  <div class='mt-3' id='full-btn-container'>
    <button type='button' class='btn' id='kale-btn'>Kale Salad</button>
    <button type='button' class='btn' id='pizza-btn'>Pizza Party</button>
  </div>`;

  printToDOM('#eat', domString);
  document.querySelector('#kale-btn').addEventListener('click', feedKale);
  document.querySelector('#pizza-btn').addEventListener('click', feedPizza);
};

export default buildEatQuad;
