function openModal(img) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modal-img');
    var closeModal = document.getElementsByClassName('close-modal')[0];
    
    modal.style.display = 'block';
    modalImg.src = img.src;
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}