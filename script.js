document.getElementById('awardsForm').addEventListener('submit', function(event) {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkboxes.length === 0) {
        alert('Selecione pelo menos um filme antes de enviar.');
        event.preventDefault();
    }
});
