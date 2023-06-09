//variables
const calculator = document.querySelector(".Calculator")
const historyArr = []
var isEntered = false
//eventlistener
calculator.addEventListener('click', e =>{
    //variables
    var eT = e.target
    var eId = e.target.id
    var eClss = e.target.className
    var eValue = e.target.innerText
    var result = document.getElementById('result')
    var input = document.getElementById('input')
    var calculatorId = document.getElementById('calculatorId')
    var calcElements = calculatorId.querySelectorAll('DIV , BUTTON , SVG')
   
    var calculate = 0

//amking symbols and numbers work
    //number display properly
    if(eClss ==="numb" || eClss ==="numb0" || eClss ==="numb Whitetheme" || eClss ==="numb0 Whitetheme") {
        if(result.innerText === '0' && eValue!=='.' || isEntered===false){
            result.innerText=""+eValue
            isEntered = true
        }else{
            result.innerText+=eValue
            isEntered = true
        }
    }
    //restart
    if(eId ==='Ac'){
        result.innerText=0
        input.innerText=''
        isEntered = false
    }
    //back to not erase 0
    if((eId ==='back' || eId ==='backSVG')  && isEntered === true){
        if( result.innerText.length== 1 || result.innerText==='0'){
            result.innerText=0
        }else{
        result.innerText=result.innerText.slice(0, -1)
         }
    }
    //dot to not repeat
    if(eClss ==="numbD" || eClss ==="numbD Whitetheme" ) {
        if( isEntered === false && result.innerText !==0){
            result.innerText='0.'
            isEntered = true
        }
        if(result.innerText.includes(".")){ 
            result.innerText+=''
        }else{
            result.innerText+='.'
            isEntered = true
        }

    }
    //theme toggle
    if(eId === 'toggle'){
        selectNodesToChangeCSS( );
    }
    // + - / *
    if (eId === 'minus' || eId === 'plus' || eId === 'division' || eId === 'multiplier'){
    calculationButtons(eValue)
    } 
    // sqr X2 P %
    if (eId === 'sqroot' || eId === 'sqr' || eId === 'pe' || eId === 'perc'  ) {

    }
    // equation
    if ( eId === 'equal'){
        result.innerText=equation()
        input.innerText = ''
        isEntered = false

    }
//Functions

//element selector to change css propertys
function selectNodesToChangeCSS() {
        for (i = 0 ; i < calcElements.length; i++) {
            node = calcElements.item(i)
            //white buttons
            if (node.className === 'funct' || node.className ==='numb' || node.className ==='numb0' ||
            node.className === 'numbD' || node.className ==='nav1'){
                node.classList.add('Whitetheme') 
            } else {
                node.classList.remove('Whitetheme')      
            }
            //blue buttons
            if (node.className === 'nav2' || node.className ==='sign' || node.className ==='signP'){
                node.classList.add('bluebutton') 
            } else {
                node.classList.remove('bluebutton')      
            }
            //equals button
            if (node.className === 'signE' ){
                node.classList.add('buttonEqual') 
            } else {
                node.classList.remove('buttonEqual')      
            }
            //result screens
            if (node.className === 'result' ){
                node.classList.add('resultW')     
            } else {
                node.classList.remove('resultW')      
            }
            if (calculatorId.className === 'Calculator' ){
                calculatorId.classList.add('CalculatorW') 
            } else {
                calculatorId.classList.remove('CalculatorW')  
            }
            //toggle button
            if (node.className === 'toggleW'){
                node.classList.add('toggleB')    
            } else {
                node.classList.remove('toggleB')
            }
        }     
    }

// trim if .0 or .
function trimIfNeeded (){
    var trimed
    if(result.innerText.at(-1)==='.'){
        trimed = result.innerText.slice(0, -1)
    }else{
         trimed = result.innerText
    }
    if(result.innerText.includes(".")){
        if(result.innerText.split('.')[1] == 0){
            trimed = result.innerText.slice(0 , -(result.innerText.split('.')[1].length+1))
        } else{
            trimed = trimed = result.innerText
        }
    }
    return trimed
}
    
//calculation buttons 
function calculationButtons( elementText){
    var span = document.createElement('span');
    span.textContent = elementText;
    span.style.color = '#339DFF';           
    if( input.innerText ===''){
        input.innerText=trimIfNeeded ()
        input.appendChild(span)
        isEntered = false
    }
    if( isEntered === true){
        input.innerText+=trimIfNeeded ()
        input.appendChild(span)
        isEntered = false
    }
    if (isEntered ===false && input.innerText !==''){
        input.innerText=input.innerText.slice(0, -1)
        input.appendChild(span)
    }
}
      
        

// function for functionButtons
function functionButtons (elementText){
    // 1/x sqr  sqrroo
    if ( elementText === '%') {
        if (isEntered){}
    }
}
// make Equation to work
function equation() {
   var result = input.innerText+trimIfNeeded()
   historyArr.unshift(result + '='+ eval(result))
   return eval(result)
}
//console.log(isEntered)
console.log(historyArr)


// history to display
if (eId === 'history'){
    var div = document.createElement('div');
    for ( i = 0 ; i < historyArr.length; i++) {
        div.innerHTML+=i
    }
    input.appendChild(div)
}
})


