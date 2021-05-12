const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([-3.7428317,-38.5422904], 15);
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


// create and add Marker
L
.marker([-3.7428317,-38.5422904],{icon})
.addTo(map)



// image galery
function selectImage(event) {
    
    // Botão clicado
    const button = event.currentTarget

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    
    function removeActiveClass(button){
        button.classList.remove("active")
    }

    buttons.forEach(removeActiveClass)

    // selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")


    // atualizar o container de imagem
    imageContainer.src = image.src

    // add a classe .active para o botão clicado
    button.classList.add('active')

}