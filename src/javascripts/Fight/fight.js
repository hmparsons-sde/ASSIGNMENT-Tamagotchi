import printToDOM from '../DOMEvents';

const buildFightQuad = () => {
  const score = 100;
  let domString = '';
  domString += `<div class='card' style='width: 30rem;'>
                <div class='card-body'>
                <h1 class="card-title">Fight</h1>
                <div class="button-container">
                    <button class="submit" id="button-violence">Roundhouse</button>
                    <button class="submit" id="button-brave">Brave Retreat</button>
                </div>
                <div id="strength-score">Strength: ${score}</div>
                </div>
                </div>`;
  printToDOM('fight', domString);
};

export default buildFightQuad;

// const buildFightQuad = () => {
//   let score = 100;
//   document.querySelector('#fight').html(`
//   <div class="card-container card-container-fight">
//       <h1 class="card-title">Fight</h1>
//       <div class="button-container">
//           <button class="action-button" id="button-violence">Upper Cut</button>
//           <button class="action-button" id="button-brave">Brave Retreat</button>
//       </div>
//       <div id="strength-score">Strength: ${score}</div>
//   </div>
// `);
//   document.querySelector('#button-brave').addEventListener('click', () => {
//     score += 1;
//     if (score > 100) {
//       score = 100;
//     }
//     document.querySelector('strength-score').html(`Strength: ${score}`);
//   });
//   document.querySelector('#button-violence').addEventListener('click', () => {
//     score -= 10;
//     if (score > 100) {
//       score = 100;
//     }
//     document.querySelector('#strength-score').html(`Strength: ${score}`);
//   });
// };

// export default buildFightQuad;
