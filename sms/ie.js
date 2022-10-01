
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

const nosotrosDiv = document.querySelectorAll('.gradiente');

nosotrosDiv.forEach(function(element) {
    element.addEventListener('mouseover', (event)=>{
        console.log(element.childNodes)
        let textoChico = element.childNodes[3]
        let texto = element.childNodes[1]
        texto.style.display = 'none';
        textoChico.style.color = 'white'
        textoChico.style.display = 'flex'
        textoChico.style.margin = 'auto'

    })
})

nosotrosDiv.forEach(function(element) {
    element.addEventListener('mouseout', (event)=>{
        let textoChico = element.childNodes[3]
        textoChico.style.display = 'none'
        let texto = element.childNodes[1]
        texto.style.display = 'flex';
    })
})
