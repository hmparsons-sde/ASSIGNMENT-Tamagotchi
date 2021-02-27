import printToDOM from '../DOMEvents';

const buildEatQuad = () => {
  const score = 100;
  let domString = '';
  domString += `<div class='card' style='width: 30rem;'>
                <div class='card-body'>
                <h1 class="card-title">Eat</h1>
                <div class="button-container">
                    <button class="submit" id="button-healthy">Healthy</button>
                    <button class="submit" id="button-unhealthy">Unhealthy</button>
                </div>
                <div id="eat-score">Full: ${score}</div>
                </div>
                </div>`;
  printToDOM('eat', domString);
};

export default buildEatQuad;
//   document.querySelector('#button-healthy').addEventListener('click', () => {
//     score += 10;
//     if (score > 100) {
//       score = 100;
//     }
//     document.querySelector('#eat-score').innerHTML(`Full: ${score}`);
//   });
//   document.querySelector('#button-unhealthy').addEventListener('click', () => {
//     score -= 3;
//     if (score > 100) {
//       score = 100;
//     }
//     document.querySelector('#eat-score').innerHTML(`Full: ${score}`);
//   });
