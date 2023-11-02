'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 

function loadIFrame() {
  var iframe = document.createElement('iframe');
  iframe.src = "";
  iframe.id = "api-frame";
  iframe.sandbox = "allow-scripts allow-same-origin allow-popups allow-forms";
  iframe.allow = "autoplay; fullscreen; xr-spatial-tracking";
  iframe.setAttribute('xr-spatial-tracking', true);
  iframe.setAttribute('execution-while-out-of-viewport', true);
  iframe.setAttribute('execution-while-not-rendered', true);
  iframe.setAttribute('web-share', true);
  iframe.setAttribute('allowfullscreen', true);
  iframe.setAttribute('mozallowfullscreen', true);
  iframe.setAttribute('webkitallowfullscreen', true);
  var image = document.getElementById('property1');
  image.parentNode.insertBefore(iframe, image);
  image.style.display = 'none';

  var uid = "43d48aa333a14f38a44c11f47a646ac1"
  var client = new Sketchfab( iframe );

  client.init( uid, {
                success: function onSuccess( api ) {
                    console.log( 'Success' );
                    api.load();
                    api.start();
                    api.addEventListener( 'viewerready', function() {
                        console.log( 'Viewer is ready' );
                        // once the viewer is ready, show the iframe
                        let $apiFrame = document.getElementById( 'api-frame' );
                        $apiFrame.classList.remove( 'hidden' ); // Remove hidden class
                    } );
                },
                error: function onError( callback ) {
                    console.log( this.error );
                }
            } );

}

function closeIFrame() {
  var iframe = document.getElementById("api-frame");
  var newImage = document.createElement('img');

// Set attributes for the image
  newImage.id = 'property1';
  newImage.src = './assets/images/property-1.jpg';
  newImage.alt = 'New Apartment Nice View';
  newImage.className = 'w-100';
  newImage.onclick = loadIFrame; 
  iframe.parentNode.insertBefore(newImage, iframe);
  iframe.style.display = 'none';
}

function loadIFrameProperty2() {
  var iframe = document.createElement('iframe');
  iframe.src = "";
  iframe.id = "api-frame2";
  iframe.sandbox = "allow-scripts allow-same-origin allow-popups allow-forms";
  iframe.allow = "autoplay; fullscreen; xr-spatial-tracking";
  iframe.setAttribute('xr-spatial-tracking', true);
  iframe.setAttribute('execution-while-out-of-viewport', true);
  iframe.setAttribute('execution-while-not-rendered', true);
  iframe.setAttribute('web-share', true);
  iframe.setAttribute('allowfullscreen', true);
  iframe.setAttribute('mozallowfullscreen', true);
  iframe.setAttribute('webkitallowfullscreen', true);
  var image = document.getElementById('property2');
  image.parentNode.insertBefore(iframe, image);
  image.style.display = 'none';

  var uid = "6e7b60b74e864387b18c1bb41e606d45";
  var client = new Sketchfab( iframe );

  client.init( uid, {
                success: function onSuccess( api ) {
                    console.log( 'Success' );
                    api.load();
                    api.start();
                    api.addEventListener( 'viewerready', function() {
                        console.log( 'Viewer is ready' );
                        // once the viewer is ready, show the iframe
                        let $apiFrame = document.getElementById( 'api-frame' );
                        $apiFrame.classList.remove( 'hidden' ); // Remove hidden class
                    } );
                },
                error: function onError( callback ) {
                    console.log( this.error );
                }
            } );
}


function closeIFrameProperty2() {
  var iframe = document.getElementById("api-frame2");
  var newImage = document.createElement('img');

// Set attributes for the image
  newImage.id = 'property2';
  newImage.src = './assets/images/property-2.jpg';
  newImage.alt = 'Modern Apartments';
  newImage.className = 'w-100';
  newImage.onclick = loadIFrame; 
  iframe.parentNode.insertBefore(newImage, iframe);
  iframe.style.display = 'none';
}
