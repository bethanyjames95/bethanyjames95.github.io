
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


//Lazy Loading
// says after page has loaded
window.addEventListener("load",(event)=>{
            
    const images = document.querySelectorAll("[data-src]");
    //console.log(images);

    function preloadImage(img){
        console.log("trying to load"+img);
        const src= img.getAttribute("data-src");
        if(!src){
            return;
        }
        img.src = src;
    }
    const imgOptions = {
        threshold:0,
        rootMargin: "0px 0px 200px 0px"
    }

    const imgObserver = new IntersectionObserver( (entries, imgObserver)=> {
        console.log(entries);
        entries.forEach(entry=>{
            if(!entry.isIntersecting){
                return;
            }
            else {
                preloadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        })

    }, imgOptions);
    images.forEach(image=>{
        imgObserver.observe(image);
    });
    
});