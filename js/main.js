// const altura = document.body.scrollHeight - window.innerHeight;
// const fondo = document.getElementById('fondo');

// window.onscroll = () => {
// 	const anchoFondo = (window.pageYOffset / altura) * 700;
// 	if(anchoFondo <= 100){
// 		fondo.style.width = anchoFondo + '%';
// 	}
// }

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){

    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){

    nav.style.right = "-250px";
    background_menu.style.display = "none";
}

/**
   * Back to top button
   */
let backtotop = select('.back-to-top')
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active')
    } else {
      backtotop.classList.remove('active')
    }
  }
  window.addEventListener('load', toggleBacktotop)
  onscroll(document, toggleBacktotop)
}
