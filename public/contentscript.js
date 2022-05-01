const budgetBtnStyle = {
  'background-color': 'darkblue',
  color: 'white',
  cursor: 'pointer',
  'border-radius': '3px 5px 0 3px',
  display: 'inline-flex',
  'justify-content': 'space-evenly',
  'align-items': 'center',
  'align-content': 'center',
  padding: '10px 15px',
  gap: '10px',
  float: 'right',
  'font-size': '0.8rem',
};

const parentElement = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(2) > h2',
);

const budgetValue = document
  .querySelector(
    '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(3) > p:nth-child(3)',
  )
  .textContent.trim();

const budgetBtn = document.createElement('div');
budgetBtn.classList.add('budget-to-beat');
cssStyler(budgetBtn, budgetBtnStyle);

const budgetImg = document.createElement('img');
budgetImg.src = './images/favicon-16x16.png';
budgetImg.style.width = '16px';

const budgetText = document.createElement('span');
budgetText.textContent = ` Budget-to-Beat: ${budgetValue}`;

budgetBtn.appendChild(budgetImg);
budgetBtn.appendChild(budgetText);
parentElement.appendChild(budgetBtn);

function cssStyler(element, style) {
  for (const property in style) element.style[property] = style[property];
}

budgetBtn.addEventListener('mouseenter', () => {
  budgetBtn.style.backgroundColor = 'blue';
});

budgetBtn.addEventListener('mouseleave', () => {
  budgetBtn.style.backgroundColor = 'darkblue';
});
