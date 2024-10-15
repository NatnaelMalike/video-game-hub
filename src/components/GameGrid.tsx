import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
    const { data, isLoading, error, hasNextPage, fetchNextPage } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    if (error) return <Text>{error.message}</Text>;
    const fetchedGamesCount =
        data?.pages.reduce(
            (total, page) => (total += page.results.length),
            0
        ) || 0;

    return (
        <Box padding={2}>
            <InfiniteScroll
                dataLength={fetchedGamesCount}
                next={fetchNextPage}
                hasMore={hasNextPage}
                loader={<Spinner />}>
                <SimpleGrid
                    columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                    spacing={6}
                    paddingTop={4}>
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
                {/* {hasNextPage && (
                    <Button marginY={5} onClick={() => fetchNextPage()}>
                        {" "}
                        {isFetchingNextPage ? "Loading more..." : "Load More"}
                    </Button>
                )} */}
            </InfiniteScroll>
        </Box>
    );
};

export default GameGrid;
