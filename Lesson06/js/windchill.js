
window.addEventListener('load', () => {

    let temperature = document.getElementById("temperature").innerHTML;
    let windSpeed = document.getElementById("windSpeed").innerHTML;
    let windChill = document.getElementById("windChill");


    if ( windSpeed > 3 && temperature > 50)
    {
        windChill.innerText = Math.round((35.74 + (0.6215 * temperature) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * (temperature * (windSpeed ** 0.16)))));
    }
    else {
        windChill.innerText = "N/A";
    }
});