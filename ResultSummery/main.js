
const displaySummeryResults = () => {
        // to get content of json file with quiz content
        fetch('data.json')
        .then(response => response.json())
        .then(summeryResult => {
        
        let totalScore = 0
        let score = document.getElementById('score')
        let summeryDiv = document.getElementById('summeryDiv')
        summeryDiv.innerHTML=''
        // loops through json file and gets 10 questions randomly. 
        for ( let i = 0 ; i < summeryResult.length ; i++ ){
            totalScore += summeryResult[i].score
            let result = summeryResult[i]
            console.log(summeryResult[i].category , summeryResult[i].score , summeryResult[i].icon)

            let wrapperDiv = document.createElement('div');
            wrapperDiv.className = 'wrapper';
          
            // Create componentsDiv
            let componentsDiv = document.createElement('div');
            componentsDiv.className = 'componentsDiv ' + result.category.toLowerCase() + 'Color'; // Add color class dynamically
          
            // Create component div
            let componentDiv = document.createElement('div');
            componentDiv.className = 'component';
          
            // Create and append img element
            let img = document.createElement('img');
            img.src = result.icon;
            img.alt = result.category.toLowerCase();
            componentDiv.appendChild(img);
          
            // Create and append paragraph for category name
            let categoryName = document.createElement('p');
            categoryName.textContent = result.category;
            componentDiv.appendChild(categoryName);
          
            // Append component div to componentsDiv
            componentsDiv.appendChild(componentDiv);
          
            // Create progress paragraph
            let progressPara = document.createElement('p');
            progressPara.className = 'progress';
          
            // Create and append span for score
            let scoreSpan = document.createElement('span');
            scoreSpan.textContent = result.score;
            progressPara.appendChild(scoreSpan);
          
            // Append static text node "/ 100"
            progressPara.appendChild(document.createTextNode(' / 100'));
          
            // Append progress paragraph to componentsDiv
            componentsDiv.appendChild(progressPara);
          
            // Append componentsDiv to wrapperDiv
            wrapperDiv.appendChild(componentsDiv);
          
            // Append wrapperDiv to the parentDiv
            summeryDiv.appendChild(wrapperDiv);

        }     
        score.textContent = Math.round(totalScore/ summeryResult.length)
      })
      .catch(error => {
        // Handle any errors that occur during the fetch
        console.error('Error fetching JSON:', error);
      });
}

document.getElementById('button').addEventListener('click' , displaySummeryResults)
