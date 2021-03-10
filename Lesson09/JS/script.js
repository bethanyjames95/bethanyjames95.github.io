
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