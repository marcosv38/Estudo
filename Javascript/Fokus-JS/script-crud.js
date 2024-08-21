const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const ulTarefas = document.querySelector('.app__section-task-list');
const botaoCancelar = document.querySelector('.app__form-footer__button--cancel');
const paragrafoDescricaoTarefa = document.querySelector('.app__section-active-task-description');


//ao recuperar a lista de tarefas é necessário transformar para array novamente o || []  serve para caso n tenha nd no localstorage
const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
let tarefaSelecionada = null;

function atualizarTarefas(){
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

botaoCancelar.addEventListener('click', ()=>{
    textArea.value = "";
    formAdicionarTarefa.classList.add('hidden');
});

//criação do elemento tarefa
function criarElementoTarefa(tarefa) {
    const li = document.createElement('li');
    li.classList.add('app__section-task-list-item');
    const svg = document.createElement('svg');
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    `;

    const paragrafo = document.createElement('p');
    paragrafo.textContent = tarefa.descricao;
    paragrafo.setAttribute('class', 'app__section-task-list-item-description');

    const botao = document.createElement('button');
    botao.classList.add('app_button-edit');

    //atualiza o texto no paragrafo da tarefa a partir de uma caixa de dalogo
    botao.onclick = ()=>{
        const novaDescricao =  prompt("Qual é o novo nome da tarefa?");
        //colocando uma string para validação ela só será true se tiver algum caractere
        if(novaDescricao){
            paragrafo.textContent = novaDescricao;
            tarefa.descricao = novaDescricao;
            atualizarTarefas();
        }
        
    }

    const imagemBotao = document.createElement('img');
    imagemBotao.setAttribute('src', '/imagens/edit.png');
    botao.append(imagemBotao);

    li.append(svg);
    li.append(paragrafo);
    li.append(botao);

    li.onclick = () =>{
        document.querySelectorAll('.app__section-task-list-item-active')
            .forEach(elemento => {
                elemento.classList.remove('app__section-task-list-item-active');
            });
        if(tarefaSelecionada==tarefa){
            paragrafoDescricaoTarefa.textContent = '';
            tarefaSelecionada = null;
            return;
        }
        tarefaSelecionada = tarefa;
        paragrafoDescricaoTarefa.textContent = tarefa.descricao;
        li.classList.add('app__section-task-list-item-active');
    }

    return li;

}

//toggle alterna entre adicionar e remover.
btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden');
});


//Pegando o valor do textArea quando der submit no form
formAdicionarTarefa.addEventListener('submit', (evento) => {
    //preventDefault serve para retirar o comportamento padrão do botão
    evento.preventDefault();

    const tarefa = {
        descricao: textArea.value
    }

    tarefas.push(tarefa);

    const elementoTarefa = criarElementoTarefa(tarefa);
    ulTarefas.append(elementoTarefa);

    //é necessário transformar em string para salvar no localStorage
    atualizarTarefas();
    textArea.value = '';
    formAdicionarTarefa.classList.add('hidden');

});


//Adicionar tarefas criando um elemento a cada tarefa salva no localStorage
tarefas.forEach(tarefa => {
    const elementoTarefa = criarElementoTarefa(tarefa);
    ulTarefas.append(elementoTarefa);
})
