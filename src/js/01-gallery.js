import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const imageHtml = galleryItems
    .map(
        ({ original, preview, description }) =>
     `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" 
           alt="${description}" />
   </a>
</li>`
  ).join('');

galleryEl.insertAdjacentHTML("beforeend", imageHtml);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,

  closeText: "×",
  nav: true,
  animationSlide: true,
  animationSpeed: 250,
});