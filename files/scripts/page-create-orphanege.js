// create map
const map = L.map("mapid").setView([-3.7428317,-38.5422904], 15);


// create and add titleLayer
L
.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/assets/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
})

// marcando a variavel como let permite q possa alterar futuramente, diferente da const
// iniciando a variavel vazia para modificar futuramente
let marker;

// create and add marker
// função do leaflet: on. O event retorna uma longitude e uma latitude
map.on('click', function(event){
    const lat = event.latlng.lat;
    const lng = event.latlng.lng

    // colocando lat e lng no input do html
    document.querySelector('[name=lat]') .value = lat;
    document.querySelector('[name=lng]') .value = lng;
    // remove icon
    // se o marker existir ele vai para o map.remove
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})


// adicionar o campo de fotos
function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-upload (com o All ele pega tudo)
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // clone da ultima imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // Verificar se o campo esta vazio. Se estiver não adiciona
    const input = newFieldContainer.children[0]
    if (input.value == "") {
        return
    }
    // limpa para trazer limpo antes de adicionar ao campo de imagens
    newFieldContainer.children[0].value=""
    // adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer)

}

// OBS:
// querySelect sempre pega o primeiro e ignora os outros, para pegar tudo precisa colocar o All
// clone Node recebe um booliano. Se for True ele copia tudo q tem dentro do campo. Se for False ele copia so a tag por fora

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload') 

    if(fieldsContainer.length <= 1) {
        span.parentNode.children[0].value=""
        return
    }

    // deletar o campo
    span.parentNode.remove();
}


// selecionar sim e não
function toggleSelect(event) {

    // retirar a classe active
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    }) //Arrow function: .forEach(button) => button.classList.remove('active')

    // colocara classe active
    const button = event.currentTarget //currenteTarget (o que ta clicado)
    button.classList.add('active')

    // atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open-on-weekends"]')
    input.value = button.dataset.value // data-value verificando sim e nao (add no html 1 para sim e 0 para não)

}
