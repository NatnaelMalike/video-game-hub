import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformMenu from "./components/PlatformMenu";
import SortMenu from "./components/SortMenu";

function App() {
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
                <Navbar />
            </GridItem>
            <Show above="lg">
                <GridItem area={"aside"} paddingX={5}>
                    <GenreList />
                </GridItem>
            </Show>
            <GridItem area={"main"}>
                <Box paddingX={2}>
                    <GameHeading  />
                    <Flex marginBottom={5}>
                        <Box marginRight={5}>
                            <PlatformMenu />
                        </Box>
                        <SortMenu />
                    </Flex>
                </Box>
                <GameGrid />
            </GridItem>
        </Grid>
    );
}

export default App;
