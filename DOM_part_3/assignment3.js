// Given is a list of users in data.js
// Create a html page that displays each user info in a card format using js (refer to the image)
// Each card should contain the name of the user , a button 'VOTE' and the label saying 0 votes
// On clicking the vote button the corresponding label in the card should increment the vote count
// Add a Result button at the end of html page
// At any point of time clicking the Result button should display a label saying who is the winner with maximum votes
var contestants = [];
document.addEventListener('DOMContentLoaded', () => {
    let mainDiv = document.querySelector('#dataList');
    data.forEach((element) => {
        var counter = 0;
        contestants[element.name] = counter;
        let dataDiv = document.createElement('div');
        dataDiv.classList = 'dataElement';
        dataDiv.innerHTML = "<div class='name'> " + element.name + "</div>"
        let tallyDiv = document.createElement('div');
        tallyDiv.classList = 'tallyElement';
        tallyDiv.innerHTML = counter + " votes"; 
        let vote = document.createElement('button');
        vote.onclick = () => {
            counter++;
            tallyDiv.innerHTML = counter + " votes";
            contestants[element.name] = counter;
            };
        vote.innerText = 'Vote';
        vote.id = 'voteButton';
        dataDiv.appendChild(tallyDiv);
        dataDiv.appendChild(vote);
            
        mainDiv.appendChild(dataDiv); 

    });
    let result = document.createElement('div');
    result.id = 'result';
    let para = document.createElement('p');
    let resultButton = document.createElement('button');
    result.onclick = () => {
        let winner = Object.keys(contestants).reduce((a,b) => {return contestants[a] > contestants[b] ? a : b});
        para.innerText = winner + " wins !!";
    }
    resultButton.innerText = 'RESULT';
    resultButton.id = 'resultButton';
    result.appendChild(para);
    result.appendChild(resultButton);
    mainDiv.appendChild(result);

});


