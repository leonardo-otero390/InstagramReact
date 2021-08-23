import Stories from './Stories';
import Posts from "./Posts";
import Sidebar from "./Sidebar";

const userClient = { nickname: "user-name",
                        avatar: "../content/images/avatar.jpg",
                        name: "name-display" }
export default function Container() {
    return (
        <div class="container">
            <div class="conteudo">
                <Stories />
                <Posts />
            </div>
            <Sidebar user={userClient}/>
        </div>
    );
}
