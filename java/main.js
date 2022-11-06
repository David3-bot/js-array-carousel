const images = [
    "../img/01.webp",
    "../img/02.webp",
    "../img/03.webp",
    "../img/04.webp",
    "../img/05.webp",
];

let currentImgIndex = 0

const sliderContainerEl = document.querySelector(".slider");
const sliderImgEl = document.querySelector(".slider-img");

const btnNext = document.getElementById("slider-btn-prima");
const btnPrev = document.getElementById("slider-btn-dopo");

sliderImgEl.src = images[currentImgIndex];

for (let i = 0; i < images.length; i++) {

    let sliderImgEl = document.createElement("img");
    sliderImgEl.src = images [i];

    if (i === 0) {
        sliderImgEl.classList.add("d-block");
    }

    sliderContainerEl.append(sliderImgEl);
}

btnNext.addEventListener("click"), function (){
    const element = document.getElementById("slider-img");
    element.classList.remove("d-none");

}

