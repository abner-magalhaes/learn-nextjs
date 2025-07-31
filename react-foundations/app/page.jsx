import LikeButton from "./like-button";

function Header({ title }) {
    return <h1>{title}</h1>
}

export default function HomePage() {
    const names = ['Abner Magalhães', 'Thalita Figueiredo', 'Marli de Oliveira'];

    return (
        <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <LikeButton />
        </div>
    );
}