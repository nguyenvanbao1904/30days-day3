var openModal = document.querySelector('.open-modal-btn')
var Modal = document.querySelector('.modal')
var closeModal = document.querySelector('.modal-header i')
var btnClose = document.querySelector('.modal-footer button')

var open = function(e){
    Modal.classList.toggle('hiden')
}
openModal.addEventListener('click',open)
closeModal.addEventListener('click',open)
btnClose.addEventListener('click',open)

Modal.addEventListener('click',function(e){
        if(e.target==e.currentTarget){
            open()
        }
})
document.onkeydown = function(e){
    switch (e.which) {
        case 27:
            Modal.className='modal hiden'
            break;
    }
}