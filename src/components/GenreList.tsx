import useGenre from "../hooks/useGenres";

const GenreList = () => {
    const { data } = useGenre();
    return (
        <div>
            <ul>
                {data.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default GenreList;
