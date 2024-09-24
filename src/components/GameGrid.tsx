import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
    const { error, games, loading } = useGames();

    return (
        <>
            {loading && <Text>Loading...</Text>}
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm:1, md: 2, lg: 3, xl: 5}} padding={'10px'} gap={10}>
                {games.map((game) => (
                    <GameCard key={game.id} game={game}/>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
