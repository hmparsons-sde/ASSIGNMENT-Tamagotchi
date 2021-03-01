import { fullScore } from '../Eat/eat';
import { strengthScore } from '../Fight/fight';
import { funScore } from '../Play/play';
import { energyScore } from '../Sleep/sleep';
import printToDOM from '../DOMEvents';

const healthStats = () => {
  const average = (fullScore() + strengthScore() + funScore() + energyScore());
  console.warn(average);
  return average;
};

const healthAverage = () => {
  const overall = healthStats() / 4;
  return overall;
};

const progressBar = () => {
  let domString = '';
  domString += `<div class='progress'>
  <div id='progressbar' class='progress-bar progress-bar-striped bg-info' role='progressbar' style='width=100' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100' value='100'></div>
</div>`;
  printToDOM('#progress', domString);
};

const updateBar = () => {
  const progress = document.getElementById('progressbar');
  progress.value += healthAverage;
};
// const updateBar = () => {
//   const bars = document.getElementsByClassName('progress-bar');
//   bars[0].style.width = `${parseInt(healthAverage, 10)}%`;
//   if (healthAverage >= 0 && healthAverage <= 39) {
//     document.getElementById('prog').className = 'bg-danger';
//   }
//   if (healthAverage >= 40 && healthAverage <= 69) {
//     document.getElementById('prog').className = 'bg-info';
//   }
//   if (healthAverage >= 70 && healthAverage <= 100) {
//     document.getElementById('prog').className = 'bg-success';
//   }
//   if (healthAverage > 100) {
//     document.getElementById('prog').className = 'bg-danger';
//     document.getElementById('alert-100').style.opacity = '100%';
//   }
//   if (healthAverage < 0) {
//     document.getElementById('prog').className = 'bg-danger';
//     document.getElementById('alert-0').style.opacity = '100%';
//   }
// };

export { progressBar, updateBar };
