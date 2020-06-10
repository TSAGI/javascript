var players = ["Peter","Sree", "Sandra","Elton","Kmen","Evlyn","Kiwi"];

var gameData = [ 
    {
      "csGo": [
        { "name": "Peter", "location": "Neverland", "status": "expert" },
        { "name": "Sree", "location": "Toronto", "status": "Awesome" },
        { "name": "Sandra", "location": "Neverland", "status": "newbie" },
        { "name": "Elton", "location": "Mumbai", "status": "Awesome" },
        { "name": "Kmen", "location": "Neverland", "status": "newbie" },
        { "name": "Evlyn", "location": "Zurich", "status": "expert" },
        { "name": "Kiwi", "location": "LA", "status": "expert" }
      ]
    },
    {
      "pubG": [
        { "name": "Peter", "location": "Toronto", "status": "expert" },
        { "name": "Sree", "location": "Alberta", "status": "Awesome" },
        { "name": "Sandra", "location": "Neverland", "status": "newbie" },
        { "name": "Elton", "location": "New Delhi", "status": "Awesome" },
        { "name": "Kmen", "location": "Neverland", "status": "newbie" },
        { "name": "Evlyn", "location": "Zurich", "status": "expert" },
        { "name": "Kiwi", "location": "Mexico", "status": "expert" }
      ]
    }
  ]

var playerGames = [];
var games = [];
var location = [];

for(index in players){
    for(element in gameData){
        var gameName = String(Object.keys(gameData[element])); 
        var gameNameElement = gameData[element][gameName][index];      
        if(players[index] == gameNameElement.name){
                games[element] = {
                    name: gameName,                    
                    status: gameNameElement.status                    
                };           
                location[element] = gameNameElement.location;            
            }
        }
        
        playerGames[index] = {
            name: players[index],
            games: games.slice(),
            location: location.slice()
        }
}

// console.dir(playerGames, {depth: null});

// gameData.forEach((obj => obj[String(Object.keys(obj))].forEach(element =>   
//     playerGames.push({
//       name: element.name,
//       location: element.location
//     })
//   )));

// const result = playerGames.reduce((acc, d) => {
//   const found = acc.find(a => a.name === d.name);
//   var location =  d.location ; // the element in data property
//   if (!found) {
//     acc.push({name:d.name, location: location}) // not found, so need to add data property
//   }
//   return acc;
// }, []);

//   console.dir(result, {depth: null});
  


