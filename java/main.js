const imagesList = [
    "../img/01.webp",
    "../img/02.webp",
    "../img/03.webp",
    "../img/04.webp",
    "../img/05.webp",
];

let currentImgIndex = 0

const mainImgContainer = document.querySelector(".main-img-container");

const btnNext = document.getElementById("btn_next");
const btnPrev = document.getElementById("btn_prev");




for (let i = 0; i < imagesList.length; i++) {

    const currentImg = imagesList[i];


    const imgEl = document.createElement("img");
    imgEl.src = currentImg;
    imgEl.classList.add("img-fluid");


    const thumbEl = document.createElement("img");
    thumbEl.src = currentImg;


    if (i === currentImgIndex) {
        imgEl.classList.add("active");

    }


    mainImgContainer.append(imgEl);

}


btnNext.addEventListener("click", function () {

    currentImgIndex++;

    const oldActiveEl = mainImgContainer.querySelector(".active");


    oldActiveEl.classList.remove("active");



    const imgElements = mainImgContainer.querySelectorAll("img");


    const newActiveEl = imgElements[currentImgIndex];


    newActiveEl.classList.add("active");

}); 