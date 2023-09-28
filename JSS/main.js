let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            });       
        };
    });
};

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

// const hidesb = document.getElementById('hidesb');
// const texthide = document.getElementById('texthide');

// hidesb.addEventListener('click', toggleText);

// function toggleText(){
//     texthide.classList.toggle('show');

//     if(texthide.classList.contains('show')){
//         hidesb.innerHTML = 'Ver menos';
//     }
//         else{
//             hidesb.innerHTML = 'Ver más';
//         }
// }

const showsb = document.getElementsByClassName('show');
showsb.addEventListener('click', ()=>{
    let div = document.createElement('div');
    div.innerHTML = ` 
    
        <img src="img/871577_6157dacac0794941857a999841b208cc~mv2 (1).jpg">  </img>
    
    
    `;
    

    document.body.section.append();
})


