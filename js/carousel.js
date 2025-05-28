//carousel

//Array storage class
let carouselArr = [];



//class Carousel
class Carousel {

constructor(imagem, texto, link) {
    this.imagem = imagem;
    this.texto = texto;
    this.link = link;
}


    static Start(arr){
        if(arr){
            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel._arr = arr; // salva o array para usar no Next()
                Carousel.Next(); // mostra a primeira imagem
                Carousel._interval = setInterval(function(){ Carousel.Next(); }, 2000); // troca a cada 2 segundos
            }
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){

    let item = Carousel._arr[Carousel._sequence];

    document.getElementById("carousel").innerHTML = `<img src="img/${item.imagem}">`;
    document.getElementById("carousel-title").innerHTML = `<a href="${item.link}"><p>${item.texto}</p></a>`;

    Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
}

    };
