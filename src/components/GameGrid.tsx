import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
    const { error, games, loading } = useGames();
    const skeletons = [1,2,3,4,5,6,7,8,9,10]

    return (
        <>
            {loading && <Text>Loading...</Text>}
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm:1, md: 2, lg: 3, xl: 5}} padding={'10px'} gap={10}>
                {loading && skeletons.map(skeleton=> <GameCardSkeleton key={skeleton}/>)}
                {games.map((game) => (
                    <GameCard key={game.id} game={game}/>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
