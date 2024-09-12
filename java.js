var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

$( document ).ready(function() {
   [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
         img.setAttribute('src', img.getAttribute('data-src'));
         img.onload = function() {
            img.removeAttribute('data-src');
         };
   });
});
