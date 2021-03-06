import printToDOM from '../events/DOMEvents';

let fun = 50;

const funScore = () => fun;

const updateFunScore = () => {
  document.querySelector('#fun-score').innerHTML = `${fun}`;
};

const superFun = (e) => {
  e.preventDefault();
  fun += Math.floor(Math.random(1) * Math.floor(5));
  if (fun > 100) {
    fun = 100;
  }
  updateFunScore();
};

const kindaFun = (e) => {
  e.preventDefault();
  fun += Math.floor(Math.random(1) * Math.floor(2));
  if (fun > 100) {
    fun = 100;
  }
  updateFunScore();
};

const buildPlayQuad = () => {
  let domString = '';
  domString += `
    <div id='play-quad'><h2>PLAY</h2></div>
    <div id='fun-score'><p><b><span id='fun-score'>${fun}</span></p></div>
    <div class='mt-3' id='fun-btn-container'>
      <button type='button' class='btn' id='super-btn'>Rave Girl</button>
      <button type='button' class='btn' id='kinda-btn'>Crossword</button>
    </div>`;

  printToDOM('#play', domString);
  document.querySelector('#super-btn').addEventListener('click', superFun);
  document.querySelector('#kinda-btn').addEventListener('click', kindaFun);
};

export { buildPlayQuad, funScore };
