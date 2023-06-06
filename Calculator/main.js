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
    var calculate = 0

    console.log(eId)

    //number display
    if(eClss ==="numb" || eClss ==="numb0" || eClss ==="numbD" ) {
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

    //back
    if(eId ==='back' || eId ==='backSVG'){
        if( result.innerText.length== 1 || result.innerText==='0'){
            result.innerText=0
        }else{
        result.innerText=result.innerText.slice(0, -1)
        }}
    //dot
        if(result.innerText.includes(".")){
        result.innerText=result.innerText.slice(0, -1)
        }
    
})