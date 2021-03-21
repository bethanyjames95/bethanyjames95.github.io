
window:addEventListener('load', ()=>{
    const hambutton = document.querySelector('.menu-button');
    const mainnav = document.querySelector('.navigation');

    hambutton.addEventListener('click', ()=> {mainnav.classList.toggle('responsive')}, false);

    /* takes care of removing responsive if it gets turned on. We can run into problems with things. */
    window.onresize = ()=> {if(window.innerWidth>760) mainnav.classList.remove('responsive');};



    let dayname = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    
    let monthname = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    let d = new Date();
    let dName = dayname[d.getDay()];
    let dMonth = monthname[d.getMonth()];
    let fulldate = dName + ", " + d.getDate() + " " + dMonth + " " + d.getFullYear();
    let dYear = d.getFullYear();
    
    document.getElementById("date").textContent = fulldate;
    document.getElementById("copy").textContent = dYear;

});


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        
        /*PRESTON*/
        
        let preston = document.createElement('section');
        preston.classList.add("Preston");

        let prestonName = document.createElement('h2');
        let prestonMotto = document.createElement("h3");
        let prestonYear = document.createElement('p');
        let prestonPopulation = document.createElement("p");
        let prestonRain = document.createElement("p");
        let prestonPhoto = document.createElement('img');
        prestonPhoto.setAttribute('src', "img/1.jpg");

        prestonName.textContent =  towns[5].name;
        prestonMotto.textContent = towns[5].motto;
        prestonYear.textContent = "Founded: " + towns[5].yearFounded;
        prestonPopulation.textContent = "Population: " + towns[5].currentPopulation;
        prestonRain.textContent = "Average Annual Rainfall: " + towns[5].averageRainfall;

        preston.appendChild(prestonName);
        preston.appendChild(prestonMotto);
        preston.appendChild(prestonYear);
        preston.appendChild(prestonPopulation);
        preston.appendChild(prestonRain);
        preston.appendChild(prestonPhoto);

        document.querySelector('div.preston').appendChild(preston);

        /*SodaSprings*/
        
        let sodaSprings = document.createElement('section');
        sodaSprings.classList.add("sodaSprings");
        
        let sodaSpringsName = document.createElement('h2');
        let sodaSpringsMotto = document.createElement("h3");
        let sodaSpringsYear = document.createElement('p');
        let sodaSpringsPopulation = document.createElement("p");
        let sodaSpringsRain = document.createElement("p");
        let sodaSpringsPhoto = document.createElement('img');
        sodaSpringsPhoto.setAttribute('src', "img/2.jpg");
        
        sodaSpringsName.textContent =  towns[6].name;
        sodaSpringsMotto.textContent = towns[6].motto;
        sodaSpringsYear.textContent = "Founded: " + towns[6].yearFounded;
        sodaSpringsPopulation.textContent = "Population: " + towns[6].currentPopulation;
        sodaSpringsRain.textContent = "Average Annual Rainfall: " + towns[6].averageRainfall;
        
        sodaSprings.appendChild(sodaSpringsName);
        sodaSprings.appendChild(sodaSpringsMotto);
        sodaSprings.appendChild(sodaSpringsYear);
        sodaSprings.appendChild(sodaSpringsPopulation);
        sodaSprings.appendChild(sodaSpringsRain);
        sodaSprings.appendChild(sodaSpringsPhoto);
        
        document.querySelector('div.sodaSpringsDiv').appendChild(sodaSprings);

        /*fishHaven*/
        
        let fishHaven = document.createElement('section');
        fishHaven.classList.add("FishHaven");
                
        let fishHavenName = document.createElement('h2');
        let fishHavenMotto = document.createElement("h3");
        let fishHavenYear = document.createElement('p');
        let fishHavenPopulation = document.createElement("p");
        let fishHavenRain = document.createElement("p");
        let fishHavenPhoto = document.createElement('img');
        fishHavenPhoto.setAttribute('src', "img/3.jpg");
                
        fishHavenName.textContent =  towns[1].name;
        fishHavenMotto.textContent = towns[1].motto;
        fishHavenYear.textContent = "Founded: " + towns[1].yearFounded;
        fishHavenPopulation.textContent = "Population: " + towns[1].currentPopulation;
        fishHavenRain.textContent = "Average Annual Rainfall: " + towns[1].averageRainfall;
                
        fishHaven.appendChild(fishHavenName);
        fishHaven.appendChild(fishHavenMotto);
        fishHaven.appendChild(fishHavenYear);
        fishHaven.appendChild(fishHavenPopulation);
        fishHaven.appendChild(fishHavenRain);
        fishHaven.appendChild(fishHavenPhoto);
                
        document.querySelector('div.fishHaven').appendChild(fishHaven);

    });