import printToDOM from './DOMEvents';

const landingPage = () => {
  let domString = '';
  domString += `
  <div class='jumbotron jumbotron-fluid'></div>
  <div id="progress"></div>
  <div id="pet"></div>
  <div id='quad-container'>
    <div id='row-one'>
      <div id='eat' class='quad'></div>
      <div id='fight' class='quad'></div>
    </div>
    <div id='row-two'></div>
    <div id='row-three'>
      <div id='play' class='quad'></div>
      <div id='sleep' class='quad'></div>
    </div>
  </div>`;

  printToDOM('#app', domString);
};

export default landingPage;
