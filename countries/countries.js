document.addEventListener('DOMContentLoaded', () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(e => e.json())
    .then(countries => {
        listCountries(countries);
    });
});
var string1 = [];
var string2 = [];
listCountries = (countries) => {
    let nameDiv = document.querySelector('#countryList');
    
    countries.forEach((country, id) => {
        let languages = country.languages.map(language => language.name);
        
        string1[id] = "<div class='name'> " + country.name + "<button onclick='expand(" +
        id + ")' id='expandButton'>v</button></div>";
        
        string2[id] = "<div class='name'> " + country.name + "<button onclick='retract(" +
        id + ")' id='expandButton'>^</button></div>" 
        + "<div class='flag'><img src='" + country.flag + "'></div>" + "<div class='capital'> Capital: " 
        + country.capital + "</div>" + "<div class='currency'> Currency: " + country.currencies[0].code
        + " (" + country.currencies[0].symbol + ")</div>" + "<div class='languages'>Languages: "
        + languages.join(", ") + "</div>";
        
        let dataDiv = document.createElement('div');
        dataDiv.setAttribute('id', `${id}`);
        dataDiv.classList = 'countryElement';
        dataDiv.innerHTML = string1[id];
        nameDiv.appendChild(dataDiv);

        expand = (id) => {
            var elem = document.getElementById(id);
            elem.innerHTML = string2[id];
        }

        retract = (id) => {
            var elem = document.getElementById(id);
            elem.innerHTML = string1[id];
        }
    })   
}



