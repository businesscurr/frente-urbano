
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
    contenidoRegistro       = document.querySelector('.contenido-registro'),
    ContainerImgProfile     = document.querySelector('.container-photo-profile'),
    hideRecord_1            = document.querySelector('#hide-record-1'),
    hideRecord_2            = document.querySelector('#hide-record-2'),
    btnRegister1            = document.querySelector('#btn-register-1'),
    btnRegister2            = document.querySelector('#btn-register-2'),
    arrowRegistro           = document.querySelector('#arrow-registro'),
    linkOlvidoPass          = document.querySelector('#link-olvido-pass'),
    modalOlvidoContrasena   = document.querySelector('.modal-olvido-contrasena'),
    closeModalOlvidoContrasenia = document.querySelector('#close-modal-olvido-contrasenia'),
    btnHide1                = document.querySelector('#btnHide1'),
    modalOlvidoPass2        = document.querySelector('.modal-olvido-pass2'),
    closeModalHidePass2     = document.querySelector('.closeModalHidePass2'),
    closeModalTermsConditions = document.querySelector('.closeModalTermsConditions'),
    modalTermsAndConditions   = document.querySelector('.modal-terms-and-conditions'),
    linkTermsConditions       = document.querySelector('#link-terms-conditions');
    
 
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
        ContainerImgProfile.classList.add('d-none');

    })
});

btnCloseAccordeon.addEventListener('click', () => {
    bloque.forEach( ( cadaBloque , i )=>{
        bloque[i].classList.remove('activo');
        btnCloseAccordeon.classList.remove('d-flex');
        ContainerImgProfile.classList.remove('d-none');
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

btnRegister1.addEventListener('click', () => {
    hideRecord_1.classList.add('d-none');
    hideRecord_2.classList.add('d-block');
    arrowUpRegistro.classList.remove('arrow-up-registro-activo');
    arrowRegistro.classList.add('d-flex')
});

arrowRegistro.addEventListener('click', () => {
    hideRecord_1.classList.remove('d-none');
    hideRecord_2.classList.remove('d-block');
    arrowUpRegistro.classList.add('arrow-up-registro-activo');
    arrowRegistro.classList.remove('d-flex')
});

linkOlvidoPass.addEventListener('click', () => {
    modalOlvidoContrasena.classList.add('d-block')
});

closeModalOlvidoContrasenia.addEventListener('click', () => {
    modalOlvidoContrasena.classList.remove('d-block')
});

btnHide1.addEventListener('click', () => {
    modalOlvidoPass2.classList.add('d-block')
});

closeModalHidePass2.addEventListener('click', () => {
    modalOlvidoPass2.classList.remove('d-block')
});

linkTermsConditions.addEventListener('click', () => {
    modalTermsAndConditions.classList.add('d-block');

});

closeModalTermsConditions.addEventListener('click', () => {
    modalTermsAndConditions.classList.remove('d-block')
});

