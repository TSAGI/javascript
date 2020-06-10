var digits = ['1','2','3','4','5','6','7','8','9'];
var en = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var fr = ['un','deux','trois','quatre','cinq','six','sept','huit','neuf'];

var languages = {};
for(index in digits){
    languages[digits[index]] = {french: fr[index], english: en[index]};
}

console.log(languages);