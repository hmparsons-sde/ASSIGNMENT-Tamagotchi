import printToDOM from '../DOMEvents';

const buildSleepQuad = () => {
  const score = 100;
  let domString = '';
  domString += `<div class='card' style='width: 30rem;'>
                <div class='card-body'>
                <h1 class="card-title">Rest</h1>
                <div class="button-container">
                    <button class="submit" id="button-nap">Nap</button>
                    <button class="submit" id="button-slumber">Slumber</button>
                </div>
                <div id="energy-score">Energy: ${score}</div>
                </div>
                </div>`;
  printToDOM('sleep', domString);
};

export default buildSleepQuad;
// const buildSleepQuad = () => {
//   let score = 50;
//   document.querySelector('#sleep').html(`
//   <div class="card-container card-container-sleep">
//       <h1 class="card-title">Nap</h1>
//       <div class="button-container">
//           <button class="action-button" id="button-nap">Nap</button>
//           <button class="action-button" id="button-slumber">Slumber</button>
//       </div>
//       <div id="energy-score">Energy: ${score}</div>
//   </div>
// `);
//   document.querySelector('#button-nap').addEventListener('click', () => {
//     score += 50;
//     if (score > 100) {
//       score = 100;
//     }
//     document.querySelector('energy-score').html(`Energy: ${score}`);
//   });
//   document.querySelector('#button-slumber').addEventListener('click', () => {
//     score += 60;
//     if (score > 100) {
//       score = 100;
//     }
//     document.querySelector('#energy-score').html(`Energy: ${score}`);
//   });
// };

// export default buildSleepQuad;
