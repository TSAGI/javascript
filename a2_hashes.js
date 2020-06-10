var ballots = [{1: 'Smudge', 2: 'Tigger', 3: 'Simba'},
           {1: 'Bella', 2: 'Lucky', 3: 'Tigger'},
           {1: 'Bella', 2: 'Boots', 3: 'Smudge'},
           {1:'Boots', 2: 'Felix', 3:'Bella'},
           {1: 'Lucky', 2: 'Felix', 3: 'Bella'},
           {1: 'Smudge', 2: 'Simba', 3: 'Felix'}]

// GATHER ALL THE CONTESTANTS INTO ONE ARRAY
var a = ballots.map(b => b[1]);
var b = ballots.map(b => b[2]);
var c = ballots.map(b => b[3]);
a = a.concat(b).concat(c).sort();

// ELIMINATE DUPLICATES
a = Array.from(new Set(a));

// CREATE AN ARRAY THAT WILL HOLD THE FINAL RESULTS AND POPULATE IT
var results = [];
for(index in a) {
    var total = 0;
    ballots.forEach(function(obj){
        for(i=1; i<4; i++){
            if(obj[i] == [a[index]]){
                total += parseInt(Object.keys(obj[i])[i]);
            }
        }
    });
    results.push({[a[index]]: total})
}

// CREATE AN ARRAY CONTAINING THE TOTAL NUMBER VOTES EACH CONTESTANT RECEIVED, AND SORT IT
// IN DESCENDING ORDER (GREATEST TO SMALLEST)
sorted = [];
results.forEach(function(obj){
    sorted.push(Number(Object.values(obj)));
});
sorted = sorted.sort().reverse();

// USE THE PREVIOUS ARRAY (SORTED) TO CREATE AN ARRAY THAT LISTS THE WINNERS FROM FIRST TO LAST PLACE. 
sortedResults = [];
for(index in sorted){
    results.forEach(function(obj){
        if(sorted[index] === Number(Object.values(obj))){
            sortedResults.push(obj);
        }
    })    
}
// REMOVE DUPLICATES
sortedResults = Array.from(new Set(sortedResults));
console.log(sortedResults);


