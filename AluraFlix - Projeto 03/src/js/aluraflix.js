
var listaFilmes = ["https://m.media-amazon.com/images/I/71lUe7SD3mL._AC_UF894,1000_QL80_.jpg","https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg","https://i.ebayimg.com/images/g/m88AAOSwtC1gr5ry/s-l1600.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUytKf2yNryWPUAnv4FuqVhQPRa4udR8Myw&usqp=CAU",
];


var i = 0;
while (i < listaFilmes.length) {
    document.write('<img src=' + listaFilmes[i] + ">");
    i++;
}

function adicionarImagem() {
    // Obter o valor da URL da imagem do campo de entrada
    var imageUrl = document.getElementById('imageUrl').value;

    // Criar um elemento de imagem
    var imgElement = document.createElement('img');

    // Atribuir a URL da imagem ao atributo src
    imgElement.src = imageUrl;

    // Adicionar a imagem ao contêiner na tela
    document.getElementById('imageContainer').appendChild(imgElement);
}