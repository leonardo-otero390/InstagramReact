const icons = ['paper-plane-outline', 'compass-outline', 'heart-outline', 'person-outline'];

export default function TopContainer() {
    return (
        <div class="top">
            <div class="left-top">
                <div class="icon">
                    <a href="#">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </div>
                < a href="#"><img src="../content/images/logo.png" alt="instagram logo" /> </a>
            </div>
            <input type="text" placeholder="Pesquisar" />
            <ul class="right-top">
                {icons.map(icon => <li class="icon"><a href="#"><ion-icon name={icon}></ion-icon></a></li>)}
            </ul>
        </div>

    );
}