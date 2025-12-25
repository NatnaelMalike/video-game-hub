import { Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import PlatformMenu from "../components/PlatformMenu";
import SortMenu from "../components/SortMenu";
import GameGrid from "../components/GameGrid";
import FeaturedGame from "../components/FeaturedGame";
import TrendingSection from "../components/TrendingSection";
import TopRatedSection from "../components/TopRatedSection";
import UpcomingSection from "../components/UpcomingSection";
import StatsBar from "../components/StatsBar";
import useTopRatedGames from "../hooks/useTopRatedGames";
import useGameQueryStore from "../store";

const HomePage = () => {
  const { data: topRated, isLoading: topRatedLoading } = useTopRatedGames();
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  // Show featured section only when no filters are applied
  const showFeatured =
    !gameQuery.genreId && !gameQuery.platformId && !gameQuery.searchText;
  const featuredGame = topRated?.results[0];

  return (
    <VStack spacing={8} align="stretch">
      {/* Stats Bar */}
      {showFeatured && <StatsBar />}

      {/* Featured Game */}
      {showFeatured && (
        <FeaturedGame game={featuredGame!} isLoading={topRatedLoading} />
      )}

      {/* Upcoming Games */}
      {showFeatured && <UpcomingSection />}

      {/* Main Content Grid */}
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
          xl: `"aside main sidebar"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "220px 1fr",
          xl: "220px 1fr 300px",
        }}
        gap={6}
      >
        {/* Left Sidebar - Genres */}
        <Show above="lg">
          <GridItem area="aside">
            <GenreList />
          </GridItem>
        </Show>

        {/* Main Content */}
        <GridItem area="main">
          <GameHeading />
          <HStack spacing={3} mb={6} flexWrap="wrap">
            <PlatformMenu />
            <SortMenu />
          </HStack>
          <GameGrid />
        </GridItem>

        {/* Right Sidebar - Trending & Top Rated */}
        <Show above="xl">
          <GridItem area="sidebar">
            <VStack spacing={6} position="sticky" top="90px">
              <TrendingSection />
              <TopRatedSection />
            </VStack>
          </GridItem>
        </Show>
      </Grid>
    </VStack>
  );
};

export default HomePage;
