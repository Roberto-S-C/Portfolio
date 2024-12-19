const aiClothes = [
    "/projects/AiClothes/Logo.png",
    "/projects/AiClothes/Home.png",
    "/projects/AiClothes/Create.png",
    "/projects/AiClothes/Product.png"
];

document.addEventListener('DOMContentLoaded', () => {
    let aiClothesImage = document.getElementById("aiclothes");
    let leftArrow = document.querySelector('.left-arrow');
    let rightArrow = document.querySelector('.right-arrow');
    let selectedImage = 0;

    function updateImage() {
        aiClothesImage.src = aiClothes[selectedImage];
    }

    leftArrow.addEventListener('click', () => {
        selectedImage = selectedImage === 0 ? aiClothes.length - 1 : selectedImage - 1;
        updateImage();
    });

    rightArrow.addEventListener('click', () => {
        selectedImage = selectedImage === aiClothes.length - 1 ? 0 : selectedImage + 1;
        updateImage();
    });
});