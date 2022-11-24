console.log('Contentscript injected');

// step1 get the pound value
let pound_value = document.querySelector('#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(3) > p.makeStyles-btb-27').textContent
pound_value = pound_value ? pound_value.trim() : pound_value;

// step 2 create a style element and append in head of document
const style = document.createElement('style');
style.textContent = `
    .budget-btn {
        background: #052668;
        padding: 10px 15px;
        font-bold: 700;
        color: #fff;
        position: absolute;
        top: 50px;
        right: 20px;
        border-radius: 8px;
        font-size: 18px;
        width: 207px;
        height: auto;
        cursor: pointer;
    }

    .budget-btn:hover + .dropdown,
    .budget-btn:focus + .dropdown  {
        display: block;
    }
    .dropdown {
        background: #fff;
        font-size: 14px;
        position: absolute;
        width: 207px;
        height: auto;
        max-height: 300px;
        z-index: 20;
        padding: 10px 15px;
        right: 20px;
        overflow: hidden;
        overflow-y: auto;
        top: 100px;
        display: none;
    }
    
    .show {
        display:block !important;
    }
`;

document.head.appendChild(style);


// step 3 create budget button
let element = document.createElement('div');
element.className = 'budget-btn'
const injectedText = document.createTextNode(`Budget-to-Beat: ${pound_value}`);
element.appendChild(injectedText);

// step 4 create budget button dropdown
let element_dropdown = document.createElement('div');
element_dropdown.className = 'dropdown';
let dropdown_p = document.createElement('p');
const dropdownText = document.createTextNode(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.
`);
dropdown_p.appendChild(dropdownText)
element_dropdown.appendChild(dropdown_p);



const parentElement = document.querySelector(
    '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(2)',
);

const parentElement_two = document.querySelector(
    '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(2) > budget_btn',
);
parentElement.appendChild(element);
parentElement.appendChild(element_dropdown);


element.addEventListener('click', () => {
    let dropdown = document.querySelector('#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(2) > div.dropdown');

    if (dropdown.classList.contains('show')) {
        console.log('here');
        dropdown.classList.remove('show')
    } else {
        dropdown.classList.add('show')
    }

})