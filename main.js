document.addEventListener('DOMContentLoaded',() =>
{const elementosCarousel=document.querySelectorAll('.carousel');
M.Carousel.init(elementosCarousel,{duration:100, dist:-80,shift:5,padding:5,numVisible:5,noWrap:true});});



edgrid.menu('main-nav','main-menu');


(function(d){
  let nav = d.getElementById('nav-container');
  let top = nav.offsetTop;
  window.addEventListener('scroll', () => {
    let scroll = d.body.scrollTop;
    if (scroll >= top) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });
})(document);
