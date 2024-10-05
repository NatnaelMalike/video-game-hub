import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformMenu from "./components/PlatformMenu";
import { Platform } from "./hooks/usePlatforms";
import SortMenu from "./components/SortMenu";
import GameHeading from "./components/GameHeading";
export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder: string;
    searchText: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "250px 1fr",
            }}>
            <GridItem area={"nav"}>
                <Navbar onSearch={(searchText)=> setGameQuery({...gameQuery, searchText})}/>
            </GridItem>
            <Show above="lg">
                <GridItem area={"aside"} paddingX={5}>
                    <GenreList
                        onSelectGenre={(genre) =>
                            setGameQuery({ ...gameQuery, genreId: genre.id })
                        }
                        selectedGenreId={gameQuery.genreId}
                    />
                </GridItem>
            </Show>
            <GridItem area={"main"}>
                <Box paddingX={2}>
                    <GameHeading gameQuery={gameQuery}/>
                    <Flex marginBottom={5}>
                        <Box marginRight={5}>
                            <PlatformMenu
                                onSelectPlatform={(platform) =>
                                    setGameQuery({ ...gameQuery, platformId: platform.id })
                                }
                                selectedPlatformId={gameQuery.platformId}
                            />
                        </Box>
                        <SortMenu
                            sortOrder={gameQuery.sortOrder}
                            onSelectOrder={(sortOrder) =>
                                setGameQuery({ ...gameQuery, sortOrder })
                            }
                        />
                    </Flex>
                </Box>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    );
}

export default App;
