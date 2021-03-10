
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

    if ( dName == 'Friday'){
        document.getElementById('pancake').style.display = "block";
    }   
    else {
        document.getElementById('pancake').style.display = "none";
    }

});

WebFont.load({
    google: { 
        families: ['Montserrat', 'Padauk', 'Quicksand']
    }
}); 








const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        /**************************************************************/
        let prestoncard = document.createElement('section');
        prestoncard.classList.add('classprestontext');

        let prestonname = document.createElement('h2');
        let prestonmotto = document.createElement('h3');
        let prestonyear = document.createElement('p');
        let prestonpop = document.createElement('p');
        let prestonrain = document.createElement('p');

        prestonname.textContent = towns[5].name;
        prestonmotto.textContent = towns[5].motto;
        prestonyear.textContent = "Founded in: " + towns[5].yearFounded;
        prestonpop.textContent = "Population: " + towns[5].currentPopulation;
        prestonrain.textContent = "AVG Annual Rain Fall: " + towns[5].averageRainfall;
        
        prestoncard.appendChild(prestonname);
        prestoncard.appendChild(prestonmotto);
        prestoncard.appendChild(prestonyear);
        prestoncard.appendChild(prestonpop);
        prestoncard.appendChild(prestonrain);

        document.querySelector('div.prestoncard').appendChild(prestoncard);

        let prestonphotosection = document.createElement('section');
        prestonphotosection.classList.add('classprestonphoto');

        let prestonphoto = document.createElement('img');
        prestonphoto.setAttribute('src', 'images/' + towns[5].photo);
        prestonphotosection.appendChild(prestonphoto);
        document.querySelector('div.prestoncard').appendChild(prestonphotosection);

        /**************************************************************/
        let sodaspringscard = document.createElement('section');
        sodaspringscard.classList.add('classsodaspringstext');

        let sodaspringsname = document.createElement('h2');
        let sodaspringsmotto = document.createElement('h3');
        let sodaspringsyear = document.createElement('p');
        let sodaspringspop = document.createElement('p');
        let sodaspringsrain = document.createElement('p');

        sodaspringsname.textContent = towns[6].name;
        sodaspringsmotto.textContent = towns[6].motto;
        sodaspringsyear.textContent = "Founded in: " + towns[6].yearFounded;
        sodaspringspop.textContent = "Population: " + towns[6].currentPopulation;
        sodaspringsrain.textContent = "AVG Annual Rain Fall: " + towns[6].averageRainfall;
        
        sodaspringscard.appendChild(sodaspringsname);
        sodaspringscard.appendChild(sodaspringsmotto);
        sodaspringscard.appendChild(sodaspringsyear);
        sodaspringscard.appendChild(sodaspringspop);
        sodaspringscard.appendChild(sodaspringsrain);

        document.querySelector('div.sodaspringscard').appendChild(sodaspringscard);

        let sodaspringsphotosection = document.createElement('section');
        sodaspringsphotosection.classList.add('classsodaspringsphoto');

        let sodaspringsphoto = document.createElement('img');
        sodaspringsphoto.setAttribute('src', 'images/' + towns[6].photo);
        sodaspringsphotosection.appendChild(sodaspringsphoto);
        document.querySelector('div.sodaspringscard').appendChild(sodaspringsphotosection);

        /**************************************************************/
        let fishhavencard = document.createElement('section');
        fishhavencard.classList.add('classfishhaventext');

        let fishhavenname = document.createElement('h2');
        let fishhavenmotto = document.createElement('h3');
        let fishhavenyear = document.createElement('p');
        let fishhavenpop = document.createElement('p');
        let fishhavenrain = document.createElement('p');

        fishhavenname.textContent = towns[1].name;
        fishhavenmotto.textContent = towns[1].motto;
        fishhavenyear.textContent = "Founded in: " + towns[1].yearFounded;
        fishhavenpop.textContent = "Population: " + towns[1].currentPopulation;
        fishhavenrain.textContent = "AVG Annual Rain Fall: " + towns[1].averageRainfall;
        
        fishhavencard.appendChild(fishhavenname);
        fishhavencard.appendChild(fishhavenmotto);
        fishhavencard.appendChild(fishhavenyear);
        fishhavencard.appendChild(fishhavenpop);
        fishhavencard.appendChild(fishhavenrain);

        document.querySelector('div.fishhavencard').appendChild(fishhavencard);

        let fishhavenphotosection = document.createElement('section');
        fishhavenphotosection.classList.add('classfishhavenphoto');

        let fishhavenphoto = document.createElement('img');
        fishhavenphoto.setAttribute('src', 'images/' + towns[1].photo);
        fishhavenphotosection.appendChild(fishhavenphoto);
        document.querySelector('div.fishhavencard').appendChild(fishhavenphotosection);
    });