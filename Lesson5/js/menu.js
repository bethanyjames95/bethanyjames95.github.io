window:addEventListener('load', ()=>{
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', ()=> {mainnav.classList.toggle('responsive')}, false);

    /* takes care of removing responsive if it gets turned on. We can run into problems with things. */
    window.onresize = ()=> {if(window.innerWidth>760) mainnav.classList.remove('responsive');};
});

