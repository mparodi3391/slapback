
const observador = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
});

const elementosOcultos = document.querySelectorAll('.hidden');
const elementosOcultosRight = document.querySelectorAll('.hiddenright');
const elementosOcultosLeft = document.querySelectorAll('.hiddenleft');
elementosOcultos.forEach((el)=> observador.observe(el));
elementosOcultosRight.forEach((el)=> observador.observe(el));
elementosOcultosLeft.forEach((el)=> observador.observe(el));