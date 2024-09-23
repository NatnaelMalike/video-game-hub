import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
    const { error, games, loading } = useGames();

    return (
        <>
            {loading && <Text>Loading...</Text>}
            {error && <Text>{error}</Text>}
            <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </>
    );
};

export default GameGrid;
