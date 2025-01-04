// const carouselTrack = document.querySelector('.carousel-track');
// const cards = Array.from(document.querySelectorAll('.carousel .card'));

// if (carouselTrack && cards.length > 0) {
//     let index = 0;
//     const cardWidth = cards[0].offsetWidth;
//     const totalCards = cards.length / 2; 

//     // Configurar o tamanho do track para comportar os cards duplicados
//     carouselTrack.style.width = `${cardWidth * cards.length}px`;

//     // mover carrosel
//     function moveCarousel() {
//         index++;
//         if (index >= totalCards) {
//             // Reseta para o início
//             carouselTrack.style.transition = "none";
//             index = 0;
//             carouselTrack.style.transform = `translateX(0px)`;
//         } else {
//             carouselTrack.style.transition = "transform 0.5s ease-in-out";
//             carouselTrack.style.transform = `translateX(-${index * cardWidth}px)`;
//         }
//     }

//     // Loop do carrossel
//     setInterval(moveCarousel, 3000); // 3 segundos
// } else {
//     console.error('Carrossel de clientes não configurado corretamente.');
// }

// // document.querySelectorAll('.floating-buttons a').forEach(button => {
// //     button.addEventListener('click', () => {
// //       console.log('Botão clicado!');
// //     });
// //   });
  
// document.addEventListener('DOMContentLoaded', () => {
//   const slides = document.querySelector('.slides');
//   let visibleSlides = Array.from(slides.children).filter((slide) => {
//     return window.getComputedStyle(slide).display !== 'none';
//   });
//   let currentIndex = 0;

//   const updateSlidePosition = () => {
//     slides.style.transform = `translateX(-${currentIndex * 100}%)`;
//   };

//   const refreshVisibleSlides = () => {
//     visibleSlides = Array.from(slides.children).filter((slide) => {
//       return window.getComputedStyle(slide).display !== 'none';
//     });
//     currentIndex = 0; // Reset the index when the layout changes
//     updateSlidePosition();
//   };

//   document.querySelector('.prev').addEventListener('click', () => {
//     currentIndex = (currentIndex > 0) ? currentIndex - 1 : visibleSlides.length - 1;
//     updateSlidePosition();
//   });

//   document.querySelector('.next').addEventListener('click', () => {
//     currentIndex = (currentIndex < visibleSlides.length - 1) ? currentIndex + 1 : 0;
//     updateSlidePosition();
//   });

//   // Recalculate visible slides on window resize
//   window.addEventListener('resize', refreshVisibleSlides);

//   refreshVisibleSlides(); // Initial calculation
// });

// window.addEventListener('resize', () => {
//   const cardWidth = cards[0].offsetWidth;
//   carouselTrack.style.transform = `translateX(-${index * cardWidth}px)`;
// });