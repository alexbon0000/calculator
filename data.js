// смена темы
function al(){
        var element =
        document.getElementById("top");
        element.classList.toggle("topic1");

        var element =
        document.getElementById("fon");
        element.classList.toggle("calc1");
        var element =
        document.getElementById("btn1");
        element.classList.toggle("bg-g1");
        var element =
        document.getElementById("btn2");
        element.classList.toggle("bg-g1");
        
    }
    document.querySelector('#top').addEventListener('click', () => {
     al();
});


let oneNumber = ''; // первая цифра 
let sign = ''; // знак
let twoNumber = ''; // вторая цифра 
let equals = false; // проверка нажато равно
let repeatSign = false; // проверка нажато знак повторно

//экран
const screen = document.querySelector('.screen');  

// очистить экран  
function clear (){
    oneNumber = '';
    sign = '';
    twoNumber = '';
    screen.textContent = '0'; 
    equals = false; 
    repeatSign = false;
}
document.querySelector('.ac').addEventListener('click', ()=>{
    clear();
});


document.querySelector('.buttons').addEventListener('click', (event) => {
    if (event.target.classList.contains('buttons')) return;
    if (event.target.classList.contains('ac')) return;
    screen.textContent = '';
    const number = event.target.dataset.value;
    const operator = event.target.dataset.operator; 
    if (number) {
        if ( twoNumber === '' && sign === ''){
        oneNumber += number;
        screen.textContent = oneNumber; 
          
        }
       else if (oneNumber!=='' && twoNumber!=='' && equals){
            twoNumber += number;
            screen.textContent = twoNumber;
            
        }
        else  {
        twoNumber += number;
        screen.textContent = twoNumber;
        
        }
    }
    if (operator && oneNumber!=='' && sign!== '' && twoNumber!=='' ) {
        switch (sign) {
            case '+':
                oneNumber = (+oneNumber) + (+twoNumber);
                break;
            case '-':
                oneNumber = oneNumber - twoNumber;
                break;
            case 'X':
                oneNumber = oneNumber * twoNumber;
                break;
            case '/':
                if (twoNumber === '0'){
                    screen.textContent = 'Ошибка';
                    oneNumber = '';
                    sign = '';
                    twoNumber = '';
                    return;
                };
                oneNumber = oneNumber / twoNumber;
                break;
        }
        screen.textContent = twoNumber;
        sign = operator;
        twoNumber ='';
        repeatSign = true;
        
        
    }

    if (operator){
        sign = operator;
        screen.textContent = sign;
        
    }

    if (event.target.classList.contains('percent')) {
        twoNumber = oneNumber/100*twoNumber;
        twoNumber = twoNumber.toFixed(2);
        screen.textContent = twoNumber;
        
    }

    if (event.target.classList.contains('plusMinus')) {
        if (twoNumber === ''){
        oneNumber = oneNumber*(-1);
        screen.textContent = oneNumber;  
          
        }else {
        twoNumber = twoNumber*(-1);
        screen.textContent = twoNumber;
        
        }
        
        
    }

    if (event.target.classList.contains('equal')) {
    
        switch (sign) {
            case '+':
                oneNumber = (+oneNumber) + (+twoNumber);
                break;
            case '-':
                oneNumber = oneNumber - twoNumber;
                break;
            case 'X':
                oneNumber = oneNumber * twoNumber;
                break;
            case '/':
                if (twoNumber === '0'){
                    screen.textContent = 'Ошибка';
                    oneNumber = '';
                    sign = '';
                    twoNumber = '';
                    return;
                };
                oneNumber = oneNumber / twoNumber;
                break;
        }
        if (repeatSign){
            twoNumber = '';
            
        }
        screen.textContent = oneNumber;
        twoNumber = '';
        equals = true;
        
    }
    
});




  