const posts = [
    {
        user: {
            name: "user-name",
            avatar: "../content/images/avatar.jpg"
        },
        content: {
            imgSrc: "../content/memes/meme-war.jpg",
            videoSrc: false,
            isImg: true
        },
        interactions: {
            user: "user-name",
            avatar: "../content/images/avatar.jpg",
            number: "###",
            comments: [{
                user: "user-name",
                comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde deserun
                                            officia eos doloribus, voluptates saepe dolorum quisquam officiis illum, adipisci
                                            laboriosam corrupti eveniet nam consequuntur dolorem iure! Praesentium, magni?`
            },
            {
                user: "user-name",
                comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde deserun
                                                officia eos doloribus, voluptates saepe dolorum quisquam officiis illum, adipisci
                                                laboriosam corrupti eveniet nam consequuntur dolorem iure! Praesentium, magni?`
            },
            {
                user: "user-name",
                comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde deserun
                                                    officia eos doloribus, voluptates saepe dolorum quisquam officiis illum, adipisci
                                                    laboriosam corrupti eveniet nam consequuntur dolorem iure! Praesentium, magni?`
            }]
        },
        time: '00:00'
    },
    {
        user: {
            name: "user-name",
            avatar: "../content/images/avatar.jpg"
        },
        content: {
            imgSrc: "../content/video/video.mp4",
            videoSrc: {
                src1: { src: "../content/video/video.mp4", type: "video/mp4" },
                src2: { src: "../content/video/video.ogv", type: "video/ogv" },
            },
            isImg: false

        },
        interactions: {
            user: "user-name",
            avatar: "../content/images/avatar.jpg",
            number: "###",
            comments: [{
                user: "user-name",
                comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde deserun
                                            officia eos doloribus, voluptates saepe dolorum quisquam officiis illum, adipisci
                                            laboriosam corrupti eveniet nam consequuntur dolorem iure! Praesentium, magni?`
            },
            {
                user: "user-name",
                comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde deserun
                                                officia eos doloribus, voluptates saepe dolorum quisquam officiis illum, adipisci
                                                laboriosam corrupti eveniet nam consequuntur dolorem iure! Praesentium, magni?`
            },
            {
                user: "user-name",
                comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde deserun
                                                    officia eos doloribus, voluptates saepe dolorum quisquam officiis illum, adipisci
                                                    laboriosam corrupti eveniet nam consequuntur dolorem iure! Praesentium, magni?`
            }]
        },
        time: '00:00'
    }
];


export default function Posts() {

    return (
        <div class="posts">
            {posts.map(post => <Post infos={post} />)}
        </div>
    );

}
function Post(props) {
    return (
        <div class="post">
            <Topbar user={props.infos.user} />
            <div class="content">
                {props.infos.content.isImg ? <img src={props.infos.content.imgSrc} /> : <video autoPlay={true} muted><source src={props.infos.content.videoSrc.src1.src} type={props.infos.content.videoSrc.src1.type} /><source src={props.infos.content.videoSrc.src2.src} type={props.infos.content.videoSrc.src2.type} />Seu navegador não suporta</video>}
            </div>
            <Footer interactions={props.infos.interactions} time={props.infos.time} />
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
                    <a href="#"><img src={props.interactions.avatar} alt="" /></a>
                </div>
                <p>Curtido por <a href="#" class="hover-under"><strong>{props.interactions.user}</strong></a> e <a href="#"><strong>outras {props.interactions.number} pessoas</strong></a></p>
            </div>
            <Comments comments={props.interactions.comments} />
            <div class="time"><a href="#"><em>{props.time}</em></a></div>
            <div class="comment-box">
                <input type="text" placeholder="Adicione um comentário..." />
                <button type="submit">Publicar</button>
            </div>
        </div>

    );
}
function Comments(props) {
    return (
        <div class="comments">
            {props.comments.map(comment => <Comment user={comment.user} comment={comment.comment} />)}
        </div>
    );
}
function Comment(props) {
    return (
        <div class="comment">
            <a href="#"><strong>{props.user}</strong></a>
            <p>{props.comment}</p>
            <div class="icon"><a href="#">
                <ion-icon name="heart-outline"></ion-icon>
            </a></div>
        </div>
    );
}