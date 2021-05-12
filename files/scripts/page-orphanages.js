// create map
const map = L.map("mapid").setView([-3.7428317,-38.5422904], 15);
// setView: ([latitude,longitude],zoom)


// create and add titleLayer
L
.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/assets/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})

function addMarker({id, name, lat, lng}){

    // create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"><img src="/assets/images/arrow-white.svg"> </a>`)
    // interpolar: tipo o format do python

    // create and add Marker
    L
    .marker([lat,lng],{icon})
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})