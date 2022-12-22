const thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach((thumbnail) => thumbnail.addEventListener('click', changeImageMain));

let currentEvent;
function changeImageMain(e) {
    const imageMain = document.getElementById('image-main');
    const newMain = document.createElement('img');
    
    const imageId = e.target.id;
    newMain.src = `images/image-product-${imageId}.jpg`;

    newMain.id = 'image-main';

    imageMain.parentNode.replaceChild(newMain, imageMain);

    currentEvent = e;
    overlayAndBorder();
}

function overlayAndBorder() {
    console.log(currentEvent);
}



const mainImageContainer = document.querySelector('.main-image-container');

mainImageContainer.addEventListener('click', (e) => {
    console.log(e.target.id);
});