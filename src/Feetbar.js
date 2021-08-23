import AnchorIcon from "./AnchorIcon";

const icons = ["home", "search-outline", "add-circle-outline", "heart-outline", 'person-outline']

export default function Feetbar() {
    return (
        <ul class="feet-bar">
            {icons.map(icon => <li><AnchorIcon icon={icon} /></li> )}
        </ul>)
        ;
}