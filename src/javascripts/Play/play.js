import printToDOM from '../DOMEvents';

const buildPlayQuad = () => {
  const score = 100;
  let domString = '';
  domString += `<div class='card' style='width: 30rem;'>
                <div class='card-body'>
                <h1 class="card-title">Fun</h1>
                <div class="button-container">
                    <button class="submit" id="button-super-fun">Party</button>
                    <button class="submit" id="button-kinda-fun">Chill</button>
                </div>
                <div id="fun-score">Fun: ${score}</div>
                </div>
                </div>`;
  printToDOM('play', domString);
};

export default buildPlayQuad;

// import printToDOM from '../DOMEvents';

// const buildPlayQuad = () => {
//   let domString = '';
//   let score = 50;
//   domString += `<div class="card-container card-container-eat">
//       <h1 class="card-title">Eat</h1>
//       <div class="button-container">
//           <button class="action-button" id="button-healthy">Healthy</button>
//           <button class="action-button" id="button-unhealthy">Unhealthy</button>
//       </div>
//       <div id="eat-score">Fun: ${score}</div>
//   </div>`;

//   document.querySelector('#button-super-fun').addEventListener('click', () => {
//     score += 50;
//     if (score > 100) {
//       score = 100;
//     }
//     document.querySelector('fun-score').html(`Fun: ${score}`);
//   });
//   document.querySelector('#button-kinda-fun').addEventListener('click', () => {
//     score += 2;
//     if (score > 100) {
//       score = 100;
//     }
//     document.querySelector('#fun-score').html(`Fun: ${score}`);
//   });
//   printToDOM('#play', domString);
// };

// export default buildPlayQuad;
