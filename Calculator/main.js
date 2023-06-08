//variables
const calculator = document.querySelector(".Calculator")

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
        if(result.innerText === '0' && eValue!=='.'){
            result.innerText=""+eValue
        }else{
            result.innerText+=eValue
        }
    }
    //restart
    if(eId ==='Ac'){
    result.innerText=0
    }
    //back to not erase 0
    if(eId ==='back' || eId ==='backSVG'){
        if( result.innerText.length== 1 || result.innerText==='0'){
            result.innerText=0
        }else{
        result.innerText=result.innerText.slice(0, -1)
        }}
    //dot to not repeat
    if(eClss ==="numbD" || eClss ==="numbD Whitetheme" ) {
        if(result.innerText.includes(".")){ 
            result.innerText+=''
        }else{
            result.innerText+='.'
        }
    }
    //theme toggle
    if(eId === 'toggle'){
        selectNodesToChangeCSS( );
    }
    calculationButtons(eId,eValue)
    
//Functions

    //calculation buttons 
    function calculationButtons(elementid , elementText){
        if (elementid === 'minus' || elementid === 'plus' || elementid === 'division' || elementid === 'multiplier'){
            var span = document.createElement('span');
            span.textContent = elementText;
            span.style.color = '#339DFF';

            if( input.innerText ===''){
                input.innerText=result.innerText
                input.appendChild(span);
            } else {
                input.innerText+=result.innerText
                input.appendChild(span);
            }
        }
    }
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

})


    