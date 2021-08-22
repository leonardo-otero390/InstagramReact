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
                <input type="text" placeholder="Pesquisar"/>
                <div class="right-top">
                    <div class="icon"><a href="#">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </a>
                    </div>
                    <div class="icon"><a href="#">
                        <ion-icon name="compass-outline"></ion-icon>
                    </a>
                    </div>
                    <div class="icon"><a href="#">
                        <ion-icon name="heart-outline"></ion-icon>
                    </a>
                    </div>
                    <div class="icon"><a href="#">
                        <ion-icon name="person-outline"></ion-icon>
                    </a>
                    </div>
                </div>
            </div>
        
    );
}