
const botaoTrailer = document.querySelector('.botao-trailer'); //pegar o elemento que repsenta o botao 

const modal = document.querySelector('.modal'); //pegar o elemento da modal no js

const video = document.getElementById("video");//pegar o id do iframe e o link do video
const linkDoVideo = video.src;

const botaoFecharModal = document.querySelector(".fechar-modal");// pegar o elemento de fechar modal

function alterarModal() {
    modal.classList.toggle("aberto");//busca a modal, acesso a lista de classes e adiciono aberto
};

/*abrir modal*/  
botaoTrailer.addEventListener("click", () => {//identificar quando o usuario clica
    alterarModal(); //abrir modal na tela
    video.setAttribute("src", linkDoVideo);
}); //função que controla qunado o evento ocorreu. primeiro argumento é o evento e a segunda a função


/* fechar modal*/
botaoFecharModal.addEventListener("click", () => {// identificar quando o usuario clica
    alterarModal();    // fechar modal
    video.setAttribute("src", "");
});


/*variavel que nao muda, let muda */




