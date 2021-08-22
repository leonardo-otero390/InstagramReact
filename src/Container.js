import Stories from './Stories';
import Posts from "./Posts";
import Sidebar from "./Sidebar";


export default function Container() {
    return (
        <div class="container">
            <div class="conteudo">
                <Stories />
                <Posts />
            </div>
            <Sidebar />
        </div>
    );
}
