const btnOpen = document.getElementById('btn-open');
const btnOpen1 = document.getElementById('btn-open1');
const btnOpen2 = document.getElementById('btn-open2');
const btnOpen3 = document.getElementById('btn-open3');
const btnOpen4 = document.getElementById('btn-open4');
const btnOpen5 = document.getElementById('btn-open5');
const btnOpen6 = document.getElementById('btn-open6');
const btnOpen7 = document.getElementById('btn-open7');
const modal = document.getElementById('wrapper-modal');

const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');

btnOpen.addEventListener('click',()=>{
    modal.classList.add('active');
} );
btnOpen1.addEventListener('click',()=>{
    modal.classList.add('active');
} );
btnOpen2.addEventListener('click',()=>{
    modal.classList.add('active');
} );
btnOpen3.addEventListener('click',()=>{
    modal.classList.add('active');
} );
btnOpen4.addEventListener('click',()=>{
    modal.classList.add('active');
} );
btnOpen5.addEventListener('click',()=>{
    modal.classList.add('active');
} );
btnOpen6.addEventListener('click',()=>{
    modal.classList.add('active');
} );
btnOpen7.addEventListener('click',()=>{
    modal.classList.add('active');
} );

const closeModal = () =>{
modal.classList.remove('active');
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);

