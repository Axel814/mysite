'use strict';

const product = document.getElementById('product');
const term = document.getElementById('term');
const glue = document.getElementById('glue');
const motorOil = document.getElementById('motorOil');
const wrenches = document.getElementById('wrenches');
const nuts = document.getElementById('nuts');

function updateQuota() {
    let total = 0;
    
    switch (product.value) {
        case 'motor':
            total += 80;
            break;
        case 'pump':
            total += 30;
            break;
        case 'gears':
            total += 20;
    }

    const value = +term.value;

    if (value > 5 && value < 10) {
        total *= .95;
    } else if (value > 10 && value <= 30) {
        total *= .90;
    } else if (value > 30 && value <= 60) {
        total *= .85;
    } else if (value > 60) {
        total *= .80;
    }

    total += glue.checked ? 3 : 0;
    total += motorOil.checked ? 8 : 0;
    total += wrenches.checked ? 15 : 0;
    total += nuts.checked ? 5 : 0;

    document.getElementById('quote').value = total.toFixed(2);
}

product.onchange =
    term.onchange =
    glue.onchange =
    motorOil.onchange =
    wrenches.onchange =
    nuts.onchange = updateQuota;

updateQuota();

function validate() {
    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const telephone = document.getElementById('tel');
    const mail = document.getElementById('mail');
    const policy = document.getElementById('policy');

    if (
        /[a-z,A-Z,á,é,í,ó,ú,â,ê,ô,ã,õ,ç,Á,É,Í,Ó,Ú,Â,Ê,Ô,Ã,Õ,Ç,ü,ñ,Ü,Ñ]{1,15}/
            .exec(firstName.value) &&
        /[a-z,A-Z,á,é,í,ó,ú,â,ê,ô,ã,õ,ç,Á,É,Í,Ó,Ú,Â,Ê,Ô,Ã,Õ,Ç,ü,ñ,Ü,Ñ,' ']{1,40}/
            .exec(lastName.value) && 
        /^[0-9]{1,10}$/
            .exec(telephone.value) &&
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            .exec(mail.value) &&
        policy.checked
    ) {
        document.forms[0].submit();
    } else {
        alert('El formato de los datos introducidos no es válido');
    }
}

document.getElementById('submitBtn').onclick = validate;