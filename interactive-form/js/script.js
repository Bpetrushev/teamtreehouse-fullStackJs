const inputOther = document.querySelector('#other-title');
const activities = document.querySelector('.activities');
const design = document.querySelector('#design');
const payment = document.querySelector('#payment');

const name = document.querySelector('#name');
const mail = document.querySelector('#mail');

window.onload = () => {
    //focus on page load first input field
    const inputName = document.querySelector('#name').focus();
    //hide on page load input field for other job role
    inputOther.style.display = 'none';
    hideAllTShirtColor();
    //hide all payment methods onload page
    document.querySelector('.credit-card').style.display = 'none';
    document.querySelector('.paypal').style.display = 'none';
    document.querySelector('.bitcoin').style.display = 'none';
}

//check if job role is other or not and show or hide new input.
function checkJobsRole(e){
    e.target.value == "other" ? inputOther.style.display = 'block' : inputOther.style.display = 'none';
}

//addEventListener to jobrole select menu
document.querySelector('#title').addEventListener('change', checkJobsRole);

//
function tShirtSection(e){
    const value = e.target.value;
    const type = tShirtDesignChek(value);
    const colorSection = document.querySelector('#color');
    if(type != null){
        for(let i=0; i<colorSection.children.length; i++){
            if(tShirtColorChecRejex(type).test(colorSection.children[i].textContent)){
                colorSection.children[i].style.display = 'block';
            } else {
                colorSection.children[i].style.display = 'none';
            }
    
        }
    } else {
        hideAllTShirtColor();
    }
}

//check value on design cange
function tShirtDesignChek(value){
    const regex = /js\s?\w*/;
    const found = value.match(regex);
    return found;
}

//return regex for a type of t-shirt
function tShirtColorChecRejex(type){
    return type === 'js puns' ? /\(JS/ : /\(I/;
}

//hide all t-shirt color scheme
function hideAllTShirtColor(){
    const colorSection = document.querySelector('#color');
    let checkPleaseSelect = false;
    //hide all option for select menu except element with class pleaseSelect
    for(let i=0; i<colorSection.children.length; i++){
        if(colorSection.children[i].className !== 'pleaseSelect'){
            colorSection.children[i].style.display = 'none';
        } else {
            checkPleaseSelect = true;
            colorSection.children[i].style.display = 'block';
        }
    }

    //insert "Please select a T-shirt theme" and select it
    if(!checkPleaseSelect){
        const newText = document.createElement('option');
        newText.className='pleaseSelect';
        newText.textContent = 'Please select a T-shirt theme';
        colorSection.appendChild(newText);
        colorSection.selectedIndex = colorSection.children.length-1;
    }
}

//addEventListener on change design for T-shirt
design.addEventListener('change', tShirtSection);

function activitiesEvent(e){
    if(e.target.type = 'checkbox'){
        const dateAndTime = e.target.getAttribute('data-day-and-time');
        const nameAttribute = e.target.getAttribute('name');
        const allInputs = document.querySelectorAll('.activities input');
        

        //disable all input element with same dateAndTime
        allInputs.forEach(el => {
            if(e.target.checked === true){
                if(el.getAttribute('data-day-and-time') === dateAndTime && el.getAttribute('name') !== nameAttribute){
                    el.setAttribute('disabled', true);
                }
            } else {
                if(el.getAttribute('data-day-and-time') === dateAndTime){
                    el.removeAttribute('disabled');
                }
            }
        });

       //totalcost add and change data.
       if(e.target.checked === true){
            if(!document.querySelector('.total-cost')){
                const totalCost = document.createElement('p');
                totalCost.className = 'total-cost';
                totalCost.innerHTML = `Total Cost: <span>${e.target.getAttribute('data-cost')}</span>`;
                activities.appendChild(totalCost);
            } else {
                const totalCostValue = document.querySelector('.total-cost span');
                const newTotalCostValue = parseInt(totalCostValue.textContent,10) + parseInt(e.target.getAttribute('data-cost'),10);
                totalCostValue.textContent = newTotalCostValue;
            }
        } else {
            const totalCostValue = document.querySelector('.total-cost span');
            const newTotalCostValue = parseInt(totalCostValue.textContent,10) - parseInt(e.target.getAttribute('data-cost'),10);
            totalCostValue.textContent = newTotalCostValue;
        }
    }
}

//addEventListener on change for activities check
activities.addEventListener('change', activitiesEvent);


function showOrHidePaymentMethod(value, e){
    value = value.replace(' ', '-');
    const parent = e.parentElement;
    //for loop to check if element class is same like input value
    for(let i=0; i<parent.children.length; i++){
        if(parent.children[i].className === value){
            parent.children[i].style.display = 'block';
        } else if(parent.children[i].tagName === 'DIV'){
            parent.children[i].style.display = 'none';
        }
    }
}

//addEventListener on change input for payment methods
payment.addEventListener('change', (e) =>{
    showOrHidePaymentMethod(e.target.value, e.target);
});

function isValidName(name) {
    return /^[a-z]+\s[a-z]+$/ig.test(name);
}
function isValidEmail(email){
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}

function showOrHideTip(show, element){
    if(show){
        element.style.border = '2px solid green';
    } else {
        element.style.border = '3px solid red';
    }
}

function createListener(validator){
    return e => {
        const text = e.target.value;
        const valid = validator(text);
        const showTip = text !== "" && valid;
        showOrHideTip(showTip, e.target);
    }
}

name.addEventListener('input', createListener(isValidName));
mail.addEventListener("input", createListener(isValidEmail));