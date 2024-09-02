window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 50) { 
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
