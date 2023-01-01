This is my first experience of the Frontend Mentor. It's an intermediate level site that I attempted after
"The Odin Project's" foundations.

My solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview
Responsive E-commerce website which is mostly composed of manipulation with the DOM.
Mainly changing images on the gallery and cart-items.  

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![screenshot-a](images/screenshot-e1)
![screenshot-b](images/screenshot-e2)

### Links

- Solution URL: https://github.com/john0ground/Ecommerce-product-page-
- Live Site URL: https://john0ground.github.io/Ecommerce-product-page-/

## My process
  - Started with the overall structure, using border property to determine margins and positions with the elements.

  - Separate different sections of the header, using mostly flexbox as well as on the 'main' (image-gallery and description).

  - Proceeded with the javascript and adding a container for the thumbnails to have a fixed position. In active mode or clicked, position from flexbox will change due to the added orange border and an overlay. 

  - Making the modal, changing the main image depended on the 'event', image is replaced by getting the target.id and using it as a string to match it with the supposed image src.

  - The 'previous' and 'next' elements were positioned absolute, relative to the main image and using translate half to display to the center. For its function, I made an array with the product names matched for the images' source name. And then iterate to get the source names every 'clicked'.

  - Created a function for the cart-section with iterating numbers above zero. Then made a global variable 'numberInCart' to assign a number every time a user add items. And the empty button svg to assign it again to 0;

  - Added 2 divs (basket-filled and basket-empty) with a display none for the cart-header. Then made a function which will change their supposed display property depending if the cart === 0 or 'else'.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JS

### What I learned
  -using the fill and stroke property for the svgs. The 'next' and 'previous' icons' were different because their display paths were decided with the borders(stroke) instead of the background.

  -removing the eventListener for showing the modal gallery using window.innerWidth in javascript.
  ```js
if (window.innerWidth <= 375) {
    mainImageContainer.removeEventListener('click', displayModal);
}
```

  -display an element to none if window is clicked outside certain elements.
  ````js
  document.body.addEventListener('click', (e) => {
    if(e.target.id === 'cartBtn' || e.target.id === 'delete' || e.target.id === 'avatar' || e.target.id === 'checkout') return;
    else {
        basketEmpty.style.display = 'none';
        basketFilled.style.display = 'none';
    }
});
  ````

### Continued development
-Should lean more to javascript concepts, I only know the foundations and noticed that I only use beginner snippets for functions which either produce more lines of code or create bugs for complex systems.

-Focusing on manipulating images on galleries. My codes on the DOM are not the most efficient, sometimes the main image loads longer which affects its positioning.

Media-queries - still learning with dealing the site on different sizes.

Svgs - very helpful for future projects, researching more for different markup.
