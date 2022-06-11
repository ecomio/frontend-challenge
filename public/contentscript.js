console.log('Contentscript injected');

const valueBudget = document.querySelector('.makeStyles-btb-27').textContent;
const element = document.createElement('div');
const injectedText = document.createTextNode(`Budget-to-Beat:${valueBudget}`);

element.appendChild(injectedText);
element.style.cssText = `
background-image: url('./images/favicon-32x32.png');
position:absolute;
background-color: #0b239b;
padding: 20px 20px 20px 45px;
text-align: center;
border-radius: 10px;
font-size:15px;
color: white;
margin-left: 80%;
background-repeat:no-repeat;
      font-weight:bold;
      background-position-y: center;
      background-position-x: 10px;
`;
const innerElement = document.createElement('div');
element.addEventListener(
  'mouseover',
  () => {
    innerElement.style.display = 'none';
  },
  false,
);
const parentElement = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section ',
);

parentElement.prepend(element);
parentElement.prepend(innerElement);
