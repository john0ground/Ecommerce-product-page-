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
const closeGallery = document.querySelector('.close-gallery');
const galleryModal = document.querySelector('.galleryModal');
const body = document.querySelector('body');

mainImageContainer.addEventListener('click', () => {
    galleryModal.showModal();
    body.style.overflow = 'hidden';
});

// closeGallery.addEventListener('click', () => {
//     galleryModal.close();
//     body.style.overflow = 'auto';
// });

window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        body.style.overflow = 'auto';
    };
});

const modalThumbnails = document.querySelectorAll('.modal-thumbnail-container');
modalThumbnails.forEach((thumbnail) => thumbnail.addEventListener('click', changeImageModal));

function changeImageModal(e) {
    const imageMainModal = document.getElementById('modal-img-main');
    const newMainModal = document.createElement('img');
    
    const modalImageId = e.target.parentElement.id;
    newMainModal.src = `images/image-${modalImageId}.jpg`;

    newMainModal.id = 'modal-img-main';

    imageMainModal.parentNode.replaceChild(newMainModal, imageMainModal);

    currentEvent = e;
    overlayAndBorder();
}

