import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformMenu from "./components/PlatformMenu";
import { Platform } from "./hooks/usePlatforms";
export interface GameQuery{
    genre: Genre | null;
    platform: Platform | null;

}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "250px 1fr",
            }}
            >
            <GridItem area={"nav"}>
                <Navbar/>
            </GridItem>
            <Show above="lg">
                <GridItem area={"aside"} paddingX={5}>
                    <GenreList onSelectGenre={(genre)=>setGameQuery({...gameQuery, genre})} selectedGenre={gameQuery.genre}/>
                </GridItem>
            </Show>
            <GridItem area={"main"}>
                <PlatformMenu onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})} selectedPlatform={gameQuery.platform}/>
                <GameGrid gameQuery={gameQuery}/>
            </GridItem>
        </Grid>
    );
}

export default App;
