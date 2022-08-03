
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const filmes = document.querySelectorAll(".filme");
let filmeAtual = 0;

function esconderFilmeSelecionado(){
    const filmeSelecionado = document.querySelector(".selecionado");
    filmeSelecionado.classList.remove("selecionado");
}

function mostrarFilme(indiceFilme){
    filmes[indiceFilme].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function () {

    if (filmeAtual === filmes.length - 1) {
        filmeAtual = 0;
    } else {
        filmeAtual++;
    }

    esconderFilmeSelecionado();

    mostrarFilme(filmeAtual);
});

btnVoltar.addEventListener("click", function () {

    if (filmeAtual === 0) {
        filmeAtual = filmes.length - 1;
    } else {
        filmeAtual--;
    }

    esconderFilmeSelecionado();
    mostrarFilme(filmeAtual);
});

