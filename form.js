document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup-form');
    const createButton = document.getElementById('create-account-button');
    
    form.addEventListener('input', function () {
        const firstName = form['first-name'].value.trim();
        const lastName = form['last-name'].value.trim();
        const email = form['email'].value.trim();
        
        if (firstName && lastName && email) {
            createButton.disabled = false;
        } else {
            createButton.disabled = true;
        }
    });

    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        
        const firstName = formData.get('first-name');
        const lastName = formData.get('last-name');
        const fullName = `${firstName} ${lastName}`;
        
        formData.set('full-name', fullName);
        
        const success = await sendDataToGoogleSheets(formData);
        
        if (success) {
            sessionStorage.setItem('fullName', fullName);
            sessionStorage.setItem('email', formData.get('email'));
            window.location.href = 'agenda.html';
        } else {
            alert('Erreur lors de l\'envoi des données. Veuillez réessayer.');
        }
    });
});