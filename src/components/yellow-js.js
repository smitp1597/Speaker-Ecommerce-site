
var h =document.querySelector('h1');
var p= h.getBoundingClientRect();
var c= document.querySelector('.cursor');

document.body.onmousemove = function(e) {
  /*Adjust the position of the cursor*/
  c.style.left=e.clientX-20+'px';
  c.style.top=e.clientY-20+'px';
  /*Adjust the radial-gradient*/
  h.style.setProperty('--x',(e.clientX-p.top)+'px');
  h.style.setProperty('--y',(e.clientY-p.left)+'px');
}