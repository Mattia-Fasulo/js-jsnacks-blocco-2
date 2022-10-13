const arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const contArr = document.getElementById('cont-arr');
const contRes = document.getElementById('result');
const button = document.getElementById('btn-somma');
console.log(arrNum)

for( i = 0; i < arrNum.length; i++){
    let boxArr = document.createElement('div');
    boxArr.className = ("col-1 card");
    boxArr.innerHTML = `${arrNum[i]}`
    if(!(i % 2) == 0){
        boxArr.className = ("col-1 card elem-disp")
    }
    contArr.append(boxArr);
       
}

let calc = function(){
    contRes.innerHTML = "";
    let messaggio = document.createElement('div');
    let risultato = document.createElement('div');
    let somma = 0;

    for(x = 0; x < arrNum.length; x++){
        if(!(x % 2) == 0){
            somma += parseInt(arrNum[x]);
        }
    }
    messaggio.innerHTML = "La somma dei numeri bianchi è:";
    risultato.innerHTML = somma;
    contRes.append(messaggio);
    contRes.append(risultato);

}

button.addEventListener('click', calc);