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

    console.log(eClss)

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
    if(eId ==='back'){
        result.innerHTML=""
        }
})