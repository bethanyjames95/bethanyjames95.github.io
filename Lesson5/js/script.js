
window:addEventListener('load', ()=>{
    const hambutton = document.querySelector('.menu-button');
    const mainnav = document.querySelector('.navigation');

    hambutton.addEventListener('click', ()=> {mainnav.classList.toggle('responsive')}, false);

    /* takes care of removing responsive if it gets turned on. We can run into problems with things. */
    window.onresize = ()=> {if(window.innerWidth>760) mainnav.classList.remove('responsive');};

    let date = new Date("01/29/2021");
    document.getElementById('date').innerHTML = date.toDateString();
});

function toggleMenu() {
    let day = new Array(7);
    day[0] = "Monday";
    day[1] = "Tuesday";
    day[2] = "Wednesday";
    day[3] = "Thursday";
    day[4] = "Friday";
    day[5] = "Saturday";
    day[6] = "Sunday";
}

if (day == 4) {
    document.getElementsByClassName('friday-banner').style.display = "block";
} else {
    document.getElementsByClassName('friday-banner').style.display = "none";
}