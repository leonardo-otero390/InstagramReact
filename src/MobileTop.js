import AnchorIcon from "./AnchorIcon";

export default function MobileTop() {
    return (
        <div class="mobile-top">
            <div class="icon">
                <AnchorIcon icon="logo-instagram"/>
            </div>
            <div class="icon"><a href="#"><img src="../content/images/logo.png"/></a></div>
                <div class="icon">
                    <AnchorIcon icon="paper-plane-outline"/>
                </div>
            </div>
            );

    }