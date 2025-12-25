import { Box, SimpleGrid, Spinner, Text, VStack } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const { data, isLoading, error, hasNextPage, fetchNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) {
    return (
      <VStack py={20}>
        <Text color="red.400" fontSize="lg">
          {error.message}
        </Text>
      </VStack>
    );
  }

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => (total += page.results.length), 0) || 0;

  return (
    <Box>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={
          <VStack py={8}>
            <Spinner color="gaming.accent" size="lg" thickness="3px" />
            <Text color="gray.500" fontSize="sm">
              Loading more games...
            </Text>
          </VStack>
        }
      >
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
          spacing={5}
        >
          {isLoading
            ? skeletons.map((skeleton) => (
                <GameCardContainer key={skeleton}>
                  <GameCardSkeleton />
                </GameCardContainer>
              ))
            : data?.pages.map((page, i) => (
                <React.Fragment key={i}>
                  {page.results.map((game) => (
                    <GameCardContainer key={game.id}>
                      <GameCard game={game} />
                    </GameCardContainer>
                  ))}
                </React.Fragment>
              ))}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
};

export default GameGrid;
