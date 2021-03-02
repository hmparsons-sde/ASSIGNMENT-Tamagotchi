import printToDOM from './DOMEvents';

const landingPage = () => {
  let domString = '';
  domString += `
  <div class='jumbotron jumbotron-fluid'></div>
  <div id='pet'>
  <div class='btn-group d-flex justify-content-between' id='image-buttons'>
  <button type='button' class='btn' id='ice'>ICE ICE BABY</button>
  <button type='button' class='btn' id='goth'>GOTH BAE</button>
  <button type='button' class='btn' id='surf'>SURF'S UP</button>
  </div>
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

const handleButtonClicks = (e) => {
  const buttonId = e.target.id;
  if (buttonId === 'ice') {
    document.querySelector('body').style.backgroundImage = 'url(https://wallpapercave.com/wp/wp1878684.jpg)';
  } else if (buttonId === 'goth') {
    document.querySelector('body').style.backgroundImage = 'url(http://dslv9ilpbe7p1.cloudfront.net/ivuQs6Dp55C8sq2reoaV0g_store_banner_image.jpeg)';
  } else if (buttonId === 'surf') {
    document.querySelector('body').style.backgroundImage = 'url(https://wallpapercave.com/wp/wp5934930.jpg)';
  }
};

const buttonEvent = () => {
  document.querySelector('#ice').addEventListener('click', handleButtonClicks);
  document.querySelector('#goth').addEventListener('click', handleButtonClicks);
  document.querySelector('#surf').addEventListener('click', handleButtonClicks);
};

export { landingPage, buttonEvent };
