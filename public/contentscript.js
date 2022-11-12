// css for injected markup
const css = `

.action_button {
    background-color: #1E90FF;
    border-radius: 2px;
    padding: 4px 8px;
    outline: none;
    border: none;
    color: white;
    display: inline-flex;
    align-items: center;
    font-weight: bold;
    position: absolute;
    right: 0px;
    margin: 0 20px;
}

.action_button:hover {
    background-color: #0C56BC;
    transition: ease-in-out;
    cursor: pointer;
}



.detail_wrapper{
    margin-top: 40px;
    margin-right: 20px;
    padding: 10px;
    background: white;
    border: 1px solid black;
    border-radius: 3px ;
    position: absolute;
    color: black;
    right: 0;
    transition: ease-in-out;
    
}

.detail_wrapper[data-hidden=true]{
    display: none;
}

.detail_wrapper[data-hidden=false]{
    display: block;
}

.eco-icon{
    margin-right: 5px;
}

#mount-point{
    top: -90px;
    position:relative;
}
`;

const head = document.head || document.getElementsByTagName('head')[0];
const style = document.createElement('style');

head.appendChild(style);

if (style.styleSheet) {
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

// ------------------------------------ENTRY POINT------------
const parentElement = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(2) > h2',
);

/**
 *
 * creates a valid html element
 *
 */
const createElement = ({ tag = 'div', attributes = {}, children = [], textNode = '' }) => {
  const element = document.createElement(tag);
  const attributeKeyValList = Object.entries(attributes);
  if (attributeKeyValList.length > 0) {
    attributeKeyValList.forEach(([name, value]) => {
      element.setAttribute(name, value);
    });
  }
  if (children.length) {
    children.forEach((child) => {
      const childElement = createElement(child);
      element.appendChild(childElement);
    });
  }
  if (textNode) {
    const elementText = document.createTextNode(textNode);
    element.appendChild(elementText);
  }
  return element;
};

const btbValue = document.querySelector('.makeStyles-btb-27').textContent;

const buttonElement = {
  tag: 'button',
  textNode: `Budget-to-Beat: ${btbValue}`,
  attributes: {
    class: 'absolute action_button',
    id: 'btbButton',
    onclick: function hello() {
      alert('hello world');
    },
  },
  children: [
    {
      tag: 'span',
      children: [
        {
          tag: 'img',
          attributes: {
            src: '/eco.mio_icon_white.png',
            width: '20px',
            height: '20px',
            class: 'eco-icon',
          },
        },
      ],
    },
  ],
};

const detailElement = {
  tag: 'div',
  children: [
    {
      tag: 'p',
      attributes: {
        class: 'makeStyles-answer-25',
      },
      textNode: `You save ${btbValue} in carbon credits`,
    },
  ],
  attributes: {
    'data-hidden': true,
    class: 'detail_wrapper',
  },
};

let rootElement = createElement({
  tag: 'div',
  attributes: {
    class: 'relative',
    id: 'mount-point',
  },
  children: [buttonElement, detailElement],
});

const toggleDetail = () => {
  const prev = detailElement.attributes['data-hidden'];
  detailElement.attributes['data-hidden'] = !prev;
  const newElementTree = createElement({
    tag: 'div',
    attributes: {
      class: 'relative',
      id: 'mount-point',
    },
    children: [buttonElement, detailElement],
  });
  document.querySelector('#mount-point').remove();
  const parentElement = document.querySelector(
    '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(2) > h2',
  );
  parentElement.appendChild(newElementTree);
};

document.body.addEventListener('click', function (event) {
  if (event.target.id == 'btbButton') {
    toggleDetail();
  }
});

parentElement.appendChild(rootElement);
