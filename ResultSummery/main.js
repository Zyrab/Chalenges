
const displaySummeryResults = () => {
        // to get content of json file with quiz content
        fetch('data.json')
        .then(response => response.json())
        .then(summeryResult => {
        
        let totalScore = 0
        let score = document.getElementById('score')
        // loops through json file and gets 10 questions randomly. 
        for ( let i = 0 ; i < summeryResult.length ; i++ ){
            let score = summeryResult[i].score
            totalScore += summeryResult[i].score
            let scoreSpanId = summeryResult[i].category.toLowerCase(); // Or you could use another method for ID if necessary
            document.getElementById(scoreSpanId).textContent=score  
        }     
        score.textContent = Math.round(totalScore/ summeryResult.length)
      })
      .catch(error => {
        // Handle any errors that occur during the fetch
        console.error('Error fetching JSON:', error);
      });
}

document.getElementById('button').addEventListener('click' , displaySummeryResults)
