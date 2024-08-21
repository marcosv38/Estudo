const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');


btnAdicionarTarefa.addEventListener('click', ()=>{
    formAdicionarTarefa.classList.toggle('hidden');
});