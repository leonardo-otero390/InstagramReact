import AnchorIcon from "./AnchorIcon";

const icons = ['paper-plane-outline', 'compass-outline', 'heart-outline', 'person-outline'];

export default function TopContainer() {
    return (
        <div class="top">
            <div class="left-top">
                <div class="icon">
                    <AnchorIcon icon="logo-instagram" />
                </div>
                < a href="#"><img src="../content/images/logo.png" alt="instagram logo" /> </a>
            </div>
            <input type="text" placeholder="Pesquisar" />
            <ul class="right-top">
                {icons.map(icon => <li class="icon"><AnchorIcon icon={icon} /></li>)}
            </ul>
        </div>

    );
}