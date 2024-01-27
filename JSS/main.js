document.addEventListener('DOMContentLoaded', function () {
    // Tu código JavaScript aquí

    let sections = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('header nav a');

    // Función para desplazamiento suave
    function scrollToSection(idSeccion) {
        const seccionObjetivo = document.getElementById(idSeccion);
        if (seccionObjetivo) {
            window.scrollTo({
                top: seccionObjetivo.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    }

    // Función para determinar la sección visible
    function getVisibleSection() {
        let superior = window.scrollY + 100; // Ajuste según sea necesario
        for (const sec of sections) {
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;

            if (superior >= offset && superior < offset + height) {
                return sec.getAttribute('id');
            }
        }
        return null;
    }

    // Función para manejar el desplazamiento al hacer clic en los enlaces
    function handleNavClick(evento) {
        evento.preventDefault();
        const idSeccionObjetivo = evento.target.getAttribute('href');
        if (idSeccionObjetivo) {
            scrollToSection(idSeccionObjetivo.substring(1));
        }
    }

    // Asigna el evento de desplazamiento suave a cada enlace de navegación
    navlinks.forEach(enlace => {
        enlace.addEventListener('click', handleNavClick);
    });
});

    // Actualiza la clase activ



/* FUNCIONES DE SERVICIOS */

const texto1 = document.querySelector('#texto1');
const cierretexto1 = document.querySelector('#cierretexto1');
const popup1 = document.querySelector('#popup1');

texto1.addEventListener("click", ()=>{popup1.showModal();})
cierretexto1.addEventListener("click", ()=>{popup1.close();})

const texto2 = document.querySelector('#texto2');
const cierretexto2 = document.querySelector('#cierretexto2');
const popup2 = document.querySelector('#popup2');

texto2.addEventListener("click", ()=>{popup2.showModal();})
cierretexto2.addEventListener("click", ()=>{popup2.close();})

const texto3 = document.querySelector('#texto3');
const cierretexto3 = document.querySelector('#cierretexto3');
const popup3 = document.querySelector('#popup3');

texto3.addEventListener("click", ()=>{popup3.showModal();})
cierretexto3.addEventListener("click", ()=>{popup3.close();})

const texto4 = document.querySelector('#texto4');
const cierretexto4 = document.querySelector('#cierretexto4');
const popup4 = document.querySelector('#popup4');

texto4.addEventListener("click", ()=>{popup4.showModal();})
cierretexto4.addEventListener("click", ()=>{popup4.close();})

/* FUNCIONES DE STAFF */

const btnsn = document.getElementById('texthide_btn');   // Boton
const texthide = document.getElementById('texthide'); // texto que se esconde

btnsn.addEventListener('click', toggleText);

function toggleText(){
    texthide.classList.toggle('showsn');

    if(texthide.classList.contains('showsn')){
        btnsn.innerHTML = 'Ver menos';
      } 
         else{
             btnsn.innerHTML = 'Ver más';

         }
 };

/* SOBRE MÍ */

const btn_staff = document.getElementById('esconderparrafostaff_btn');  // boton
const texthidestaff = document.getElementById('esconderparrafostaff'); // texto que se esconde

btn_staff.addEventListener('click', toggleTextstaff);

function toggleTextstaff(){
    texthidestaff.classList.toggle('mostrarstaff');

    if(texthidestaff.classList.contains('mostrarstaff')){
        btn_staff.innerHTML = 'Ver menos';
    }
    else{
        btn_staff.innerHTML = 'Ver más';
    }
 };  

 // POPUP1
const carruselContainer = document.querySelector('.carrousel');
const imagenesPopup1 = document.querySelector('.imagenespopup1');
const totalSlides = imagenesPopup1.children.length;
let index = 0;

function nextSlide() {
    index++;
    if (index >= totalSlides) {
        index = 0; // Reiniciar al principio cuando llega al final
    }
    updateSlide();
}

function prevSlide() {
    index--;
    if (index < 0) {
        index = totalSlides - 1; // Ir al final cuando retrocede desde el principio
    }
    updateSlide();
}


function updateSlide() {
    const translationValue = -index * 100 + '%';
    imagenesPopup1.style.transition = 'transform 0.5s ease-in-out';
    imagenesPopup1.style.transform = 'translateX(' + translationValue + ')';
}

// Agregar un listener para el evento de transición
imagenesPopup1.addEventListener('transitionend', () => {
    if (index === 0 || index === totalSlides - 1) {
        // Eliminar la transición al llegar al inicio o final del carrusel
        imagenesPopup1.style.transition = 'none';
    }
});


function expandir() {
    var section = document.getElementById('coberturas');
   
};

