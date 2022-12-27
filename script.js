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
const closeGallery = document.getElementById('close-modal');
const galleryModal = document.querySelector('.galleryModal');
const body = document.querySelector('body');

mainImageContainer.addEventListener('click', () => {
    galleryModal.style.display = 'flex';
    galleryModal.showModal();   
    body.style.overflow = 'hidden';
});

closeGallery.addEventListener('click', () => {
    galleryModal.style.display = 'none';
    galleryModal.close();
    body.style.overflow = 'auto';
});

window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        galleryModal.style.display = 'none';
        body.style.overflow = 'auto';
    };
});

const modalThumbnails = document.querySelectorAll('.modal-thumbnail-container');
modalThumbnails.forEach((thumbnail) => thumbnail.addEventListener('click', changeImageModal));

let currentThumbnailIndex = 0;
const thumbnailList = ['product-1', 'product-2', 'product-3', 'product-4'];

function changeImageModal(e) {
    const imageMainModal = document.getElementById('modal-img-main');
    const newMainModal = document.createElement('img');
    
    const modalImageId = e.target.parentElement.id;
    newMainModal.src = `images/image-${modalImageId}.jpg`;

    newMainModal.id = 'modal-img-main';

    imageMainModal.parentNode.replaceChild(newMainModal, imageMainModal);

    currentEvent = e;
    overlayAndBorder();

    currentThumbnailIndex = thumbnailList.findIndex((product) => product === modalImageId);
}

const next = document.getElementById('next');
const previous = document.getElementById('previous');

next.addEventListener('click', nextImage);
previous.addEventListener('click', previousImage);

function nextImage() {
    if(currentThumbnailIndex === 3) return;
    currentThumbnailIndex += 1;

    const imageMainModal = document.getElementById('modal-img-main');
    const newMainModal = document.createElement('img');

    newMainModal.src = `images/image-${thumbnailList[currentThumbnailIndex]}.jpg`;

    newMainModal.id = 'modal-img-main';

    imageMainModal.parentNode.replaceChild(newMainModal, imageMainModal);
}

function previousImage() {
    if(currentThumbnailIndex === 0) return;
    currentThumbnailIndex -= 1;

    const imageMainModal = document.getElementById('modal-img-main');
    const newMainModal = document.createElement('img');

    newMainModal.src = `images/image-${thumbnailList[currentThumbnailIndex]}.jpg`;

    newMainModal.id = 'modal-img-main';

    imageMainModal.parentNode.replaceChild(newMainModal, imageMainModal);
}

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const addToCart = document.getElementById('add-to-cart');

let selectedNumber = 0;
const ProductNumDisplay = document.getElementById('product-num-display');

plus.addEventListener('click', () => {
    selectedNumber += 1;
    ProductNumDisplay.textContent = selectedNumber;
});

minus.addEventListener('click', () => {
    if (selectedNumber === 0) return;
    selectedNumber -= 1;
    ProductNumDisplay.textContent = selectedNumber;
});

addToCart.addEventListener('click', updateCart);

let numberInCart = 0;
function updateCart() {
    numberInCart += selectedNumber;
    selectedNumber = 0;
    ProductNumDisplay.textContent = 0;

    cartBtn.appendChild(cartNumberIcon);
    if(numberInCart > 0) {
        cartNumberIcon.style.display = 'block';
        cartNumberIcon.textContent = numberInCart;
        
    } else cartNumberIcon.style.display = 'none';
}

const cartNumberIcon = document.createElement('div');
cartNumberIcon.className = 'cartNumberIcon';

const cartBtn = document.getElementById('cartBtn');