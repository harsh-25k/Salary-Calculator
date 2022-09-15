import{salaryOperations} from "./model.js"

// glue b/w view and model
//take input from view and give output to view
//call model/logic

window.addEventListener('load', bindEvents);

function bindEvents(){
    document.getElementById('bt').addEventListener('click', compute);
}

function createptag(){
    const ptag  = document.createElement('p');
    document.getElementById('root').appendChild(ptag);
    return ptag;
}

function compute(){
    var basicSalary = window.document.getElementById('salary').value;
    salaryOperations.takeSalary(basicSalary);
    //basicSalary = parseFloat(basicSalary);
    
    //approach 1
    /* document.getElementById('hra').innerText = `house rent allowance ${salaryOperations.hra(basicSalary)}`;
    document.getElementById('da').innerText = `house rent allowance ${salaryOperations.da(basicSalary)}`;
    document.getElementById('ta').innerText = `travel allowance ${salaryOperations.ta(basicSalary)}`;
    document.getElementById('ma').innerText = `medical allowance ${salaryOperations.ma(basicSalary)}`;
    document.getElementById('pf').innerText = `provident fund ${salaryOperations.pf(basicSalary)}`;
    document.getElementById('gs').innerText = `gross salary ${salaryOperations.gs(basicSalary)}`;
    document.getElementById('tax').innerText = `tax ${salaryOperations.tax(basicSalary)}`;
    document.getElementById('ns').innerText = `net salary ${salaryOperations.ns(basicSalary)}`;

    */

    for(let key in salaryOperations){
        if(key == 'basicSalary' || key == 'takeSalary'){
            continue;
        }
        const ptag = createptag();
        ptag.innerText = `${key} is ${salaryOperations[key](basicSalary)}`;


        //document.getElementById(key).innerText = salaryOperations[key](basicSalary);
    }

    //approach 2
    /*for(let key in salaryOperations){
        var para = document.createElement("p");
        para.innerText = `${key} is ${salaryOperations[key](basicSalary)}`;
        document.body.appendChild(para);
    }
    */
    //approach 3
    /*var fieldset = document.querySelector('fieldset');
    fieldset.innerHTML = '';
    for(let key in salaryOperations){
        if(typeof salaryOperations[key] == "function"){
            var para = document.createElement("p");
            para.innerHTML = `${key} is ${salaryOperations[key](basicSalary)}`;
            fieldset.appendChild(para);
        }
    }*/
}