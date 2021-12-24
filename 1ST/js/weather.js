const API_KEY = "f6ded5a18359f5659093432ee665362a"; 

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in",lat,lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url);
}

function onGeoError() {
    alert("Can't Find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);  






