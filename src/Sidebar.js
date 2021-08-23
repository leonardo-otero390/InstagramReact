const sugerido = {
    name: "username",
    avatar: "../content/images/avatar.jpg",
    status: "status",
};
const sugeridos = [];

for (let i = 0; i <5;i++){
    sugeridos.push(sugerido);
}

export default function Sidebar(props) {
    return (
        <aside class="fixa-side-bar">
            <div class="side-bar">
                <div class="user">
                    <div class="avatar">
                        <a href="#"><img src={props.user.avatar}alt="foto de perfil" /></a>
                    </div>
                    <div class="user-name">
                        <div>
                            <a href="#"><strong>{props.user.nickname}</strong></a></div>
                        <div class="status"><em>{props.user.name}</em></div>
                    </div>
                </div>
                <div class="sugeridos">
                    <div class="inicio-sugeridos">
                        <em>Sugestões para você</em>
                        <a href=""> <strong> Ver tudo </strong></a>
                    </div>
                    {sugeridos.map(sugerido => <Sugerido user={sugerido.name} avatar={sugerido.avatar} status={sugerido.status}/>)}                 
                    <div class="sobre">
                        <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                            Termos • Localizações • Contas mais relevantes • Hashtags •
                            Idioma</p>
                        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
function Sugerido(props) {
    return (
        <li class="sugerido">
            <div class="user">
                <div class="avatar">
                    <a href="#"><img src={props.avatar} alt="foto de perfil" /></a>
                </div>
                <div class="user-name">
                    <div>
                        <a href="#"><strong>{props.user}</strong></a></div>
                    <div class="status"><em>{props.status}</em></div>
                </div>
            </div>
            <div class="seguir"><a href="#"> <strong>seguir</strong> </a></div>
        </li>
    );
}