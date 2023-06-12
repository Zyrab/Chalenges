//variables
const calculator = document.querySelector(".Calculator");
const historyDiv = document.getElementById('historyAdd')
const deletehistory = document.getElementById('Delete')
const historyArr = [];
var isEntered = false;
var symbolIsUsed = false;
//eventlistener
calculator.addEventListener('click', e =>{ 
    var big = document.getElementById('result');
    var small = document.getElementById('input');

    var eId = e.target.id;
    var eClss = e.target.className;
    var eText = e.target.innerText

     //calculator screen clear
     if(eId ==='Ac'){
        big.innerText=0;
        small.innerText='';
        isEntered = false;
        symbolIsUsed = false;
    }
    //back button functionality
    if((eId ==='back' || eId ==='backSVG')  && isEntered === true){
        if( big.innerText.length== 1 || big.innerText==='0'){
            big.innerText =0;
        }else{
        big.innerText=big.innerText.slice(0, -1);
        }
    }
    //Dot is printed only once
    if(eClss ==="numbD" || eClss ==="numbD Whitetheme" ) {
        if( isEntered === false && big.innerText !==0){
            big.innerText ='0.';
            isEntered = true;
            console.log(big.innerText);
        }
        if(big.innerText.includes(".")){ 
            big.innerText+='';
        }else{
            big.innerText +='.';
            isEntered = true;
        }
    }

    calculationButtons(eText, eId, small, big , eClss)
})

// ereasing unwanted  symbols
function trimIfNeeded ( big){
    var trimed;
    if(big.innerText.at(-1)==='.'){
        trimed = big.innerText.slice(0, -1);
    }else{
         trimed = big.innerText;
    }
    if(big.innerText.includes(".")){
        if(big.innerText.split('.')[1] == 0){
            trimed = big.innerText.slice(0 , -(big.innerText.split('.')[1].length+1));
        } else{
            trimed = trimed = big.innerText;
        }
    }
    return trimed;
}

//calculation buttons 
function calculationButtons( elementText , Id , small, big, eClss){
    if (Id === 'minus' || Id === 'plus' || Id === 'division' || Id === 'multiplier'){   
        var span = document.createElement('span');
        span.textContent = elementText;
        span.style.color = '#339DFF';           
        if (small.innerText.includes(')')){
            if (small.innerText.includes('+(') || small.innerText.includes('-(') ||small.innerText.includes('*(') || small.innerText.includes('/(')){
                small.innerText=eval(small.innerText.slice(0, -(small.innerText.split('(')[1].length+1))+big.innerText)
                big.innerText=small.innerText
                small.appendChild(span);
                isEntered= false
            }else{
                small.innerText=big.innerText;
                small.appendChild(span);
                isEntered= false
            }
        }
        if (isEntered ===false && small.innerText !==''){
            small.innerText=small.innerText.slice(0, -1);
            small.appendChild(span);
            isEntered= false
        }
        if( small.innerText.includes('=')){
            small.innerText=trimIfNeeded(big)
            small.appendChild(span);
            isEntered= false
        }
        if( small.innerText ===''){
            small.innerText=trimIfNeeded (big);
            small.appendChild(span);
            isEntered = false;
        }
        if( isEntered === true && small.innerText.includes('=')==false ){
            historyArr.unshift(small.innerText + trimIfNeeded (big)+'='+ eval(small.innerText + trimIfNeeded (big)))
            small.innerText=eval(small.innerText + trimIfNeeded (big));
            small.appendChild(span);
            big.innerText = eval(small.innerText.slice(0, -1));
            isEntered = false;
            // to add in the history
            addToHistory()
        }
    }
    if(eClss ==="numb" || eClss ==="numb0" || eClss ==="numb Whitetheme" || eClss ==="numb0 Whitetheme") {
        if(result.innerText === '0' && elementText!=='.' || isEntered===false){
            result.innerText=""+elementText;
            isEntered = true;
        }else{
            result.innerText+=elementText;
            isEntered = true;
        }
    }
    // equation
    if ( Id === 'equal'){
        var txt = small.innerText+trimIfNeeded(big);
        if( txt.includes("(")){
            if (small.innerText.includes('+(') || small.innerText.includes('-(') ||small.innerText.includes('*(') || small.innerText.includes('/(')){
                small.innerText=eval(small.innerText.slice(0, -(small.innerText.split('(')[1].length+1))+big.innerText)
                big.innerText=small.innerText
                isEntered= false
            }else{
                small.innerText = small.innerText +'='+big.innerText;
                isEntered = false;
            }
        } else{
            big.innerText = eval(txt);
            small.innerText = txt +'='+big.innerText;
            isEntered = false;
            console.log(big.innerText)
        }
        // to add in the history
        historyArr.unshift(small.innerText)
        addToHistory()
    }
    if(Id === 'pe'){
        small.innerText += "("+trimIfNeeded(big)+'*'+3.14+")"
        big.innerText=trimIfNeeded(big)*3.14
        isEntered=false
        historyArr.unshift(small.innerText + '='+ big.innerText)
        addToHistory()
    }
    if(Id === 'sqr'){
        small.innerText += "("+trimIfNeeded(big)+'*'+trimIfNeeded(big)+")"
        big.innerText=trimIfNeeded(big)*trimIfNeeded(big)
        isEntered=false
        historyArr.unshift(small.innerText + '='+ big.innerText)
        addToHistory()
    }
    if(Id === 'sqroot'){
        var sqroot = calculateSquareRoot(trimIfNeeded(big))
        small.innerText += "(√"+sqroot+")"
        big.innerText=sqroot
        isEntered=false
        historyArr.unshift(small.innerText + '='+ big.innerText)
        addToHistory()
    }
    if(Id === 'perc'){
        var percent = calculatePercent(trimIfNeeded(small),trimIfNeeded(big))
        small.innerText += "("+percent+")"
        big.innerText=percent
        isEntered=false
        historyArr.unshift(small.innerText + '='+ eval(small.innerText))
        addToHistory()
    }
}


//calculating square root
function calculateSquareRoot(number){
    if ( number < 0 ){ return }
    let guess = number; // initial guess is number itelf
    //iterativly improving the guess using Newton-Rapson method
    const precision = 0.00000000000001; // desired level of precision
    while (Math.abs( guess * guess - number ) > precision) {
        guess = ( guess + (number / guess)) / 2;
    }
    return guess
}

//calculatinig percent
function calculatePercent(number , numberPercent){
    let percent = (number.slice(0 , -1) * (numberPercent/100))
    return percent
}

//calculations to be added to the history
function addToHistory(){

    var p = document.createElement('p')
        p.textContent = historyArr[0]
        p.className = 'historyP'
        historyDiv.appendChild(p)
}

deletehistory.addEventListener('click', e=>{
    var p = document.querySelector('.historyP')
    if (e.target.id){
        historyArr.splice(0,historyArr.length)
        p.remove()
    }
})