var openModal = document.querySelector('.open-modal-btn')
var Modal = document.querySelector('.modal')
var closeModal = document.querySelector('.modal-header i')
var btnClose = document.querySelector('.modal-footer button')

var open1 = function(e){
    Modal.classList.toggle('hiden')
}

var open = function(e){
    Modal.classList.toggle('hiden')
    var dk = confirm('Are you sure ?')
            if(dk===true){
                Modal.className='modal hiden'
            }
}
openModal.addEventListener('click',open1)
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
            var dk = confirm('Are you sure ?')
            if(dk===true){
                Modal.className='modal hiden'
            }
            break;
    }
}