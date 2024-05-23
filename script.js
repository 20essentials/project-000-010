console.groupCollapsed("REFERENCE");
console.log("Based in: ", "https://www.hotelrivieradeifiori.it/#to-suites-sul-mare");
console.log("VIDEO 1 ->", "https://www.hotelrivieradeifiori.it/images/slider-home/hrf-inverno.mp4");
console.log("img1 ->", "https://www.hotelrivieradeifiori.it/media/zoo/images/aregai-dreamhome_a6b4d125d712bc421336c199a2bf1383.jpg");
console.log("img2 ->", "https://www.hotelrivieradeifiori.it/media/zoo/images/bike-hotel-riviera-dei-fiori_355b20029f755235c55f6e82850c0bde.jpg");
console.log("img3 ->", "https://www.hotelrivieradeifiori.it/media/zoo/images/camere-hotel-riviera-dei-fiori_15af5be4bebd7157e4bdd0785d2aa500.jpg");
console.log("img4 ->", "https://www.hotelrivieradeifiori.it/media/zoo/images/montecarlo_08233279635e3a0fef45467bc35d1722.jpg");
console.log("img5 ->", "https://www.hotelrivieradeifiori.it/media/zoo/images/offerta-the-mall-sanremo_8e05074197d3d7868316c7b6981a969e.jpg");
console.log("img6 ->", "https://www.hotelrivieradeifiori.it/media/zoo/images/prenota-prima-riviera-dei-fiori_8260f6ad1acb990eead7152dab4fb4d9.jpg");
console.log("img7 ->", "https://www.hotelrivieradeifiori.it/media/zoo/images/ristorante-hotel-riviera-dei-fiori_090ccabb3a8ac4453019a7d0fb4b98ca.jpg");
console.log("img8 ->", "https://www.hotelrivieradeifiori.it/media/zoo/images/santuario-dei-cetacei_dfb6b12218b2a2d3aa40173b497e871d.jpg");
console.log("img9 ->", "https://www.hotelrivieradeifiori.it/media/zoo/images/spa-hotel-riviera-dei-fiori_3946fb55465d7718c674393375adad58.jpg");
console.groupEnd();

const d = document;

d.addEventListener("DOMContentLoaded", e => {
  scrollSpy();
});


function scrollSpy() {
  let $imgs = d.querySelectorAll("section[data-scroll-spy]");

  let observador = new IntersectionObserver(cb, {threshold: 0.5});

  function cb(entries) {
    entries.forEach(entry => {
      const id = entry.target.getAttribute("id");

      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href='#${id}']`).classList.add("active");
      }
      else {
        d.querySelector(`a[data-scroll-spy][href='#${id}']`).classList.remove("active");
      }
    })
  }

  $imgs.forEach(img => observador.observe(img));
}
