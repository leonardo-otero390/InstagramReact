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
        data: new Date('August 23, 2021 5:25:00')
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
        data: new Date('December 17, 1995 03:24:00')
    }
];

const today = new Date();

export default function Posts() {
    return (
        <ul class="posts">
            {posts.map(post => <Post infos={post} />)}
        </ul>
    );
}
function timeCalculator(time) {
    if (time.getFullYear() !== today.getFullYear()) {
        return `Há ${today.getFullYear() - time.getFullYear()} anos`;
    }
    if (time.getMonth() !== today.getMonth()) {
        return `Há ${today.getMonth() - time.getMonth()} meses`;
    }
    if (time.getDate() !== today.getDate()) {
        return `Há ${today.getDate() - time.getDate()} dias`;
    }
    if (time.getHours() !== today.getHours()) {
        return `Há ${today.getHours() - time.getHours()} horas`;
    }
    if (time.getMinutes() - time.getMinutes()) {
        return `Há ${time.getMinutes() - time.getMinutes()} minutos`;
    }
    if (time.getSeconds() !== today.getSeconds) {
        return `${time.getMinutes() - time.getMinutes()} segundos`;
    }
}
function Post(props) {

    const time = props.infos.data;
    const timeText = timeCalculator(time);
    
    return (
        <li class="post">
            <Topbar user={props.infos.user} />
            <div class="content">
                {props.infos.content.isImg ? <img src={props.infos.content.imgSrc} /> : <video autoPlay={true} muted><source src={props.infos.content.videoSrc.src1.src} type={props.infos.content.videoSrc.src1.type} /><source src={props.infos.content.videoSrc.src2.src} type={props.infos.content.videoSrc.src2.type} />Seu navegador não suporta</video>}
            </div>
            <Footer interactions={props.infos.interactions} time={timeText} />
        </li>
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
        <ul class="comments">
            {props.comments.map(comment => <Comment user={comment.user} comment={comment.comment} />)}
        </ul>
    );
}
function Comment(props) {
    return (
        <li class="comment">
            <a href="#"><strong>{props.user}</strong></a>
            <p>{props.comment}</p>
            <div class="icon"><a href="#">
                <ion-icon name="heart-outline"></ion-icon>
            </a></div>
        </li>
    );
}