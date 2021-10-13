
// MODAL

let btnLogin                = document.querySelector('#btnLogin'),
    modalLogin              = document.querySelector('.modal-login'),
    closeModal              = document.querySelector('.close-modal'),
    bloque                  = document.querySelectorAll('.bloque'),
    h2                      = document.querySelectorAll('.btnAccordeon'),
    btnCloseAccordeon       = document.querySelector('.container-close-accordeon'),
    btnAccordeonRegistro    = document.querySelector('.btnAccordeonRegistro'),
    arrowUpRegistro         = document.querySelector('.arrow-up-registro'),
    arrowUpRegistroActivo   = document.querySelector('.arrow-up-registro-activo'),
    contenidoRegistro       = document.querySelector('.contenido-registro');
 
btnLogin.addEventListener('click', () => {
    modalLogin.classList.remove('d-none');
    modalLogin.classList.add('d-flex');
});

closeModal.addEventListener('click', () => {
    modalLogin.classList.add('d-none');
});

h2.forEach( ( cadaBtn , i )=>{

    h2[i].addEventListener('click', ()=>{

        bloque.forEach( ( cadaBloque , i )=>{
            bloque[i].classList.remove('activo');
            btnCloseAccordeon.classList.remove('d-flex');
        })

        bloque[i].classList.add('activo')
        btnCloseAccordeon.classList.add('d-flex');

    })
});

btnCloseAccordeon.addEventListener('click', () => {
    bloque.forEach( ( cadaBloque , i )=>{
        bloque[i].classList.remove('activo');
        btnCloseAccordeon.classList.remove('d-flex');
    })
});

function openCity(evt, cityName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

btnAccordeonRegistro.addEventListener('click', () => {
    arrowUpRegistro.classList.add('arrow-up-registro-activo')
    contenidoRegistro.classList.add('contenido-registro-activo')
    btnAccordeonRegistro.classList.add('btnAccordeonRegistro-active')
});

arrowUpRegistro.addEventListener('click', () => {
    arrowUpRegistro.classList.remove('arrow-up-registro-activo')
    contenidoRegistro.classList.remove('contenido-registro-activo')
    btnAccordeonRegistro.classList.remove('btnAccordeonRegistro-active')
});

