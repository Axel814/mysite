'use strict';

const map = L.map('map').setView([40.484319, -3.364456], 19);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Mecacomp'
}).addTo(map);

const marker = L.marker([40.484319, -3.364456])
    .addTo(map)
    .bindTooltip('Nuestra ubicación');

function success(position) {
    L.Routing.control({
        waypoints: [
            L.latLng(40.484319, -3.364456),
            L.latLng(position.coords.latitude, position.coords.longitude)
        ],
        language: 'es'
    }).addTo(map);
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

const options = {
    maximumAge: 0,
    timeout: 3000,
    enableHighAccuracy: true
};

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        success,
        error,
        options
    );
}