var openModal = document.querySelector('.open-modal-btn')
var Modal = document.querySelector('.modal')
var closeModal = document.querySelector('.modal-header i')
var btnClose = document.querySelector('.modal-footer button')

var open = function(e){
    Modal.classList.toggle('hiden')
}
var close = function(e){
    var dk = confirm('Are you sure ?')
    if(dk===true){
        Modal.className='modal hiden'
    }
}
openModal.addEventListener('click',open)
closeModal.addEventListener('click',close)
btnClose.addEventListener('click',close)

Modal.addEventListener('click',function(e){
        if(e.target==e.currentTarget){
            close()
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