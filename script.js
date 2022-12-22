const thumbnails = document.querySelectorAll('.thumbnail-container');
thumbnails.forEach((thumbnail) => thumbnail.addEventListener('click', changeImageMain));

function changeImageMain(e) {
    const imageMain = document.getElementById('image-main');
    const newMain = document.createElement('img');
    
    const imageId = e.target.parentElement.id;
    newMain.src = `images/image-${imageId}.jpg`;

    newMain.id = 'image-main';

    imageMain.parentNode.replaceChild(newMain, imageMain);

    currentEvent = e;
    overlayAndBorder();
}

let currentEvent;
function overlayAndBorder() {
    const overlay = document.querySelectorAll('.overlay');
    overlay.forEach(element => element.classList.remove('select-overlay'));

    const clickedThumbnail = currentEvent.target.parentElement.childNodes[3];
    clickedThumbnail.classList.add('select-overlay');
}



const mainImageContainer = document.querySelector('.main-image-container');

mainImageContainer.addEventListener('click', (e) => {
    console.log(e.target.id);
});