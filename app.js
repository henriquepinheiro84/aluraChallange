

function pesquisar() {

    let section = document.getElementById("resultados-pesquisa")
    let campoPesquisa = document.getElementById("campo-pesquisa").value



    console.log(campoPesquisa)

    let resutlados = ""
    if (!campoPesquisa) {
        section.innerHTML = "<p> Nenhum dado encontrado! </p>"
        section.innerHTML += "<p> Nada foi digitado. </p>"
        return
    }
    for (let jogador of jogadoresDeTenis) {

        if (jogador.nome.includes(campoPesquisa) || jogador.idade == campoPesquisa) {
            resutlados += `
   <div class="item-resultado">
            <h2>
                <a href="" target="_blank" >${jogador.nome}</a>
            </h2>
            <p class="descricao-meta"> Altura: ${jogador.altura} </p>
            <p class="descricao-meta"> Idade: ${jogador.idade} </p>
            <p class="descricao-meta"> Posição no Ranking: ${jogador.ranking} </p>
            <a href="http://google.com">Mais informações</a>
            
        </div>
`
        }

    }
    if (!resutlados) {
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }
    section.innerHTML = resutlados
}

// semelhante ao R.id do Android
// Para usar o react usar o CDN para baixar os arquivos necessários.
