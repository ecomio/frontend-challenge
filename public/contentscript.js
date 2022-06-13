console.log('Contentscript injected');
let budge = document.querySelector('.makeStyles-btb-27').textContent;
let element = document.createElement('div');
const injectedText = document.createTextNode(`Budget-to-Beat: ${budge}`);

element.appendChild(injectedText);
element.style.cssText = `
background-image: url("./images/favicon-16x16.png");
background-repeat:no-repeat;
background-position-x: 12px;
background-position-y: 12px;
background-color: #051669;
border-radius: 7px;
font-size:13px;
color: white;
margin-left: 80%;
padding: 8px 8px 8px 40px;


`;
let innerElement = document.createElement('div');
element.addEventListener(
  'mouseover',
  function (event) {
    event.target.style.color = 'orange';
    setTimeout(function () {
      event.target.style.color = 'white';
    }, 500);
  },
  false,
);
const parentElement = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(2) > h2',
);

parentElement.append(element);
parentElement.append(innerElement);
