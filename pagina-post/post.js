
const sessaoPost = document.getElementById("posts");
const postAtual = document.getElementById("postAtual");
let qtdPosts = Posts.length;

/* Carrega post passado via URL */
function postSelecionado() {
    let urlParams = new URLSearchParams(window.location.search)
    let idPost = parseInt(urlParams.get('postId'))
    let postRetorno = Posts.filter((post) => post.id === idPost )
    let postSelecionado
    if(postRetorno.length > 0){
        postSelecionado = `
            <article>
                <h6>${postRetorno[0].data}</h6>
                <div class="article-img-principal">
                    <img src="${postRetorno[0].img}" alt="">
                </div>
                <div class="article-info-principal">
                    <h2>${postRetorno[0].titulo}</h2>
                    <p>${postRetorno[0].conteudo}</p>
                </div>
            </article>
        `;
    }else{
        postSelecionado = `
            <article>
                <div class="article-info-principal">
                    <h2>OOOPS!</h2>
                    <h3 class="pb-3">Post não encontrado</h3>
                    <button class="btn" onclick="window.location='/pagina_inicial/index.html';">Voltar para a Home</button>
                </div>
            </article>
        `;
        
    }
    postAtual.insertAdjacentHTML('afterbegin', postSelecionado);
}

/*Mapeamento do array de objetos (para capa resumo)*/
Posts.map((post) => {
    let postContent = `
        <article class="card">
            <a href="/pagina-post/post.html?postId=${post.id}">
                <div class="article-img">
                    <img src="${post.img}" alt="">
                </div>
                <div class="article-info">
                    <h6>${post.data}</h6>
                    <h2>${post.titulo}</h2>
                    <p>${post.resumo}</p>
                </div>
            </a>
        </article>
    `;
    sessaoPost.insertAdjacentHTML('beforeend', postContent);
});




function init() {
    postSelecionado()
}

document.addEventListener('DOMContentLoaded' , () => {
    init()
} )