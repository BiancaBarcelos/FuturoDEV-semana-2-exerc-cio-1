let ancorasMenu = document.querySelectorAll("a.ancora");

const sessaoPost = document.getElementById("posts");
const postDestaque = document.getElementById("postDestaque");
let qtdPosts = Posts.length;

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

    if(qtdPosts === post.id){
        ultimoPost(postContent);
    }
});

function ultimoPost(postContent) {
    postDestaque.insertAdjacentHTML('afterbegin', postContent);
}

/*Ancora Menu*/

function ancora() {
    ancorasMenu.forEach(ancoraMenu => {
        ancoraMenu.addEventListener('click', (event) => {
            event.preventDefault()
            let hrefMenu = ancoraMenu.href.split('#')
            let ancoraDestino = document.getElementById(hrefMenu[1])
            let header = document.querySelector('header')
            window.scroll({
                top: ancoraDestino.offsetTop - header.clientHeight,
                behavior: "smooth"
            })
            console.log(ancoraDestino)
        })
        
    });
}

function init() {
    ancora()
}

document.addEventListener('DOMContentLoaded' , () => {
    init()
} )