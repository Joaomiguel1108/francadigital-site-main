const campoTexto = document.getElementById('campoTexto');
campoTexto.addEventListener('input', (e)=>{
    console.log(e.target.value);
}); 

const caixa = document.getElementById('caixa');
//caixa.innerHTML = '<h2>Texto adicionadio pelo java</h2>';

const mensagem = document.getElementById('mensagem');
const btn = document.getElementById('btn');
btn.addEventListener('click', (e)=>{
    const valor = campoTexto.value;
    mensagem.textContent = `Olá ${valor}`;
    
});