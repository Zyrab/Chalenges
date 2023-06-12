//variables
const calculator1 = document.querySelector(".Calculator")
//eventlistener
calculator1.addEventListener('click', e =>{
    //variables
    var eT = e.target
    var eId = e.target.id
    var eClss = e.target.className
    var eValue = e.target.innerText
    var result = document.getElementById('result')
    var input = document.getElementById('input')
    var calculatorId = document.getElementById('calculatorId')
    var calcElements = calculatorId.querySelectorAll('DIV , BUTTON , SVG')
   
    //theme toggle
    if(eId === 'toggle'){
        selectNodesToChangeCSS();
    }
    // history toggle
    if(eId === 'history'){

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
    function historyToggle(){

    }

})


