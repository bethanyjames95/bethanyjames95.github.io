
window:addEventListener('load', ()=>{
    const hambutton = document.querySelector('.menu-button');
    const mainnav = document.querySelector('.navigation');

    hambutton.addEventListener('click', ()=> {mainnav.classList.toggle('responsive')}, false);

    /* takes care of removing responsive if it gets turned on. We can run into problems with things. */
    window.onresize = ()=> {if(window.innerWidth>760) mainnav.classList.remove('responsive');};

    let date = new Date("01/29/2021");
    document.getElementById('date').innerHTML = date.toDateString();
});

