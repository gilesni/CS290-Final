function showNameModal() {

    var modalBackdrop = document.getElementById('empty-space');
    var nameModal = document.getElementById('login-modal');

    // Show the modal and its backdrop.
    modalBackdrop.classList.remove('hidden');
    nameModal.classList.remove('hidden');

}

function closeNameModal() {

    var modalBackdrop = document.getElementById('empty-space');
    var nameModal = document.getElementById('login-modal');

    // Show the modal and its backdrop.
    modalBackdrop.classList.add('hidden');
    nameModal.classList.add('hidden');

}

window.addEventListener('DOMContentLoaded', function () {
    var checkInButton = document.getElementById('check-in-button');
    checkInButton.addEventListener('click', showNameModal);


});