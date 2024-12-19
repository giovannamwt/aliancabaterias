const carouselTrack = document.querySelector('.carousel-track');
const cards = Array.from(document.querySelectorAll('.carousel .card'));

if (carouselTrack && cards.length > 0) {
    let index = 0;
    const cardWidth = cards[0].offsetWidth;
    const totalCards = cards.length / 2; 

    // Configurar o tamanho do track para comportar os cards duplicados
    carouselTrack.style.width = `${cardWidth * cards.length}px`;

    // mover carrosel
    function moveCarousel() {
        index++;
        if (index >= totalCards) {
            // Reseta para o início
            carouselTrack.style.transition = "none";
            index = 0;
            carouselTrack.style.transform = `translateX(0px)`;
        } else {
            carouselTrack.style.transition = "transform 0.5s ease-in-out";
            carouselTrack.style.transform = `translateX(-${index * cardWidth}px)`;
        }
    }

    // Loop do carrossel
    setInterval(moveCarousel, 3000); // 3 segundos
} else {
    console.error('Carrossel de clientes não configurado corretamente.');
}
