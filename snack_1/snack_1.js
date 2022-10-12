const button = document.getElementById('button');
const result = document.getElementById('result')
let inNum = document.getElementById('in-num');
const calc = function(){
    let valNum = inNum.value;
    if ((valNum % 2) == 0){
        result.innerHTML = valNum;
    }
    else {
        result.innerHTML = parseInt(valNum) + 1;
    }
}

button.addEventListener('click', calc)