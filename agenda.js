document.addEventListener('DOMContentLoaded', function () {
    const fullName = sessionStorage.getItem('fullName');
    const email = sessionStorage.getItem('email');
    
    window.Calendly.initInlineWidget({
        url: 'https://calendly.com/revolvcal/onboarding',
        parentElement: document.querySelector('.calendly-inline-widget'),
        prefill: {
            name: fullName,
            email: email,
        },
        utm: {}
    });
});