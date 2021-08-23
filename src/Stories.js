const story = {
    username: 'USERNAME',
    avatar: '../content/images/avatar.jpg'
};
const stories = [];
for (let i = 0; i < 10; i++) {
    stories.push(story);
}

export default function Stories() {
    return (
        <ul class="stories">
            <div class="setinha">
                <ion-icon name="chevron-forward-circle-sharp"></ion-icon>
            </div>
            {stories.map(story => <Story user={story.username} avatar={story.avatar} />)}
        </ul>
    );
}


function Story(props) {
return (
        <li class="story">
            <a href="#">
                <div class="avatar"><img src={props.avatar} alt="" /></div>
            </a>
            <a href="#">
                <div class="user-name">{props.user}</div>
            </a>
        </li>
    );
}