const posts = {
    user: { name: "user-name",
             avatar: "../content/images/avatar.jpg" },
    content: { src: "../content/memes/meme-war.jpg",
             isImg: true },
    interactions: {
                user: "user-name", 
                avatar: "../content/images/avatar.jpg",
                number: "###", 
                    comments: [{
                                user: "user-name", 
                                comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde deserun
                                            officia eos doloribus, voluptates saepe dolorum quisquam officiis illum, adipisci
                                            laboriosam corrupti eveniet nam consequuntur dolorem iure! Praesentium, magni?`}]
    },
}


export default function Posts() {
    return (
        <div class="posts">
            <Post infos={posts} />
        </div>
    );

}
function Post(props) {
    return (
        <div class="post">
            <Topbar user={props.infos.user} />
            <div class="content">
                {props.infos.content.isImg ? <img src={props.infos.content.src}/> : <video src={props.infos.content.src} />}
            </div>
            <Footer interactions={props.interactions}/>
        </div>
    );
}
function Topbar(props) {
    return (
        <div class="top-bar">
            <div class="user">
                <a href="#">
                    <div class="avatar"><img src={props.user.avatar} alt="" /></div>
                </a>
                <a href="#">
                    <div class="user-name">{props.user.name}</div>
                </a>
            </div>
            <div class="icon"><a href="#">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </a></div>

        </div>
    );
}
function Footer(props) {
    return (
        <div class="footer">
            <div class="icons">
                <div class="interagir">
                    <a href="#">
                        <ion-icon name="heart-outline"></ion-icon>
                    </a>
                    <a href="#">
                        <ion-icon name="chatbubble-outline"></ion-icon>
                    </a>
                    <a href="#">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </a>
                </div>
                <a href="#">
                    <ion-icon name="bookmark-outline"></ion-icon>
                </a>
            </div>
            <div class="interactions">
                <div class="avatar">
                    <a href="#"><img src={props.interactions} alt="" /></a>
                </div>
                <p>Curtido por <a href="#" class="hover-under"><strong>user-name</strong></a> e <a href="#"><strong>outras ### pessoas</strong></a></p>
            </div>
            <Comments />
            <div class="comment-box">
                <input type="text" placeholder="Adicione um comentário..." />
                <button type="submit">Publicar</button>
            </div>
        </div>

    );
}
function Comments() {
    return (
        <div class="comments">
            <Comment />
            <div class="time"><a href="#"><em>HÁ # HORA#</em></a></div>
        </div>
    );
}
function Comment() {
    return (
        <div class="comment">
            <a href="#"><strong>user-name</strong></a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde deserunt
                officia eos doloribus, voluptates saepe dolorum quisquam officiis illum, adipisci
                laboriosam corrupti eveniet nam consequuntur dolorem iure! Praesentium, magni?</p>
            <div class="icon"><a href="#">
                <ion-icon name="heart-outline"></ion-icon>
            </a></div>
        </div>
    );
}