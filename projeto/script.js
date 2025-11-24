const seletorCor=document.getElementById('seletorCor');
const btnAplicarCor=document.getElementById('btnAplicarCor');

btnAplicarCor.addEventListener("click",(e)=>{

    const cor =seletorCor.value;
    document.documentElement.style.setProperty("--cor-fundo",cor);

});

const chips = document.querySelectorAll('.chip');
const galeria = document.getElementById('galeria');

const imagemInicial = chips[0].dataset.imagem;
galeria.style.backgroundImage = `url(${imagemInicial})`;

chips.forEach((chip)=>{
    chip.addEventListener("click",(e)=>{
        galeria.classList.add('Ativa');
        galeria.style.backgroundImage = `url(${chip.dataset.image})`;
    }   );
});

