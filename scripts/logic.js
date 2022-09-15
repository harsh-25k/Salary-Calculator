window.addEventListener('load', bindEvents)
function bindEvents(){
    document.getElementById('bt').addEventListener('click', compute);
}

function compute(){
    var basicSalary = window.document.getElementById('salary').value;
    console.log("I am Compute...", basicSalary);
    var hra = basicSalary * 0.5;
    var da = basicSalary * 0.4;
    document.getElementById('hra').innerText = hra;
    document.getElementById('da').innerText = da;
}