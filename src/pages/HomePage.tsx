import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import PlatformMenu from "../components/PlatformMenu";
import SortMenu from "../components/SortMenu";
import GameGrid from "../components/GameGrid";

const HomePage = () => {
  return (
    <Grid
            templateAreas={{
                base: `"main"`,
                lg: `"aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "250px 1fr",
            }}>
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
  )
}

export default HomePage
