import {
  Box,
  Heading,
  Spinner,
  VStack,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
  Icon,
  Badge,
  Button,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";
import {
  BsChevronRight,
  BsGlobe,
  BsReddit,
  BsCalendar3,
  BsClock,
  BsStarFill,
} from "react-icons/bs";
import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";
import GameAchievements from "../components/GameAchievements";
import GameStores from "../components/GameStores";
import GameRatings from "../components/GameRatings";
import GameTags from "../components/GameTags";
import getCroppedImgUrl from "../services/image-url";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) {
    return (
      <VStack py={20}>
        <Spinner color="gaming.accent" size="xl" thickness="4px" />
        <Text color="gray.500">Loading game details...</Text>
      </VStack>
    );
  }

  if (error || !game) throw error;

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "TBA";
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        position="relative"
        h={{ base: "300px", md: "400px" }}
        mb={8}
        borderRadius="2xl"
        overflow="hidden"
      >
        <Image
          src={getCroppedImgUrl(game.background_image)}
          alt={game.name}
          w="100%"
          h="100%"
          objectFit="cover"
        />
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-t, gaming.dark 0%, transparent 50%, rgba(10,10,15,0.7) 100%)"
        />

        {/* Breadcrumb */}
        <Breadcrumb
          position="absolute"
          top={4}
          left={4}
          spacing={2}
          separator={<BsChevronRight color="gray" />}
          fontSize="sm"
          color="gray.400"
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/" _hover={{ color: "neon.cyan" }}>
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="white">{game.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* Hero Content */}
        <VStack
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          p={{ base: 4, md: 8 }}
          align="flex-start"
          spacing={4}
        >
          {/* Badges */}
          <HStack spacing={2} flexWrap="wrap">
            {game.metacritic && (
              <Badge
                bg={
                  game.metacritic >= 75
                    ? "neon.green"
                    : game.metacritic >= 60
                    ? "neon.yellow"
                    : "gray.500"
                }
                color="gaming.dark"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
                fontWeight="bold"
              >
                {game.metacritic} Metascore
              </Badge>
            )}
            {game.esrb_rating && (
              <Badge
                bg="whiteAlpha.200"
                color="white"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
              >
                {game.esrb_rating.name}
              </Badge>
            )}
          </HStack>

          {/* Title */}
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
            fontFamily="heading"
            fontWeight="900"
            color="white"
            textShadow="0 4px 20px rgba(0,0,0,0.5)"
            lineHeight="1"
          >
            {game.name}
          </Heading>

          {/* Meta Info */}
          <HStack spacing={6} color="gray.300" fontSize="sm" flexWrap="wrap">
            {game.rating > 0 && (
              <HStack spacing={1}>
                <Icon as={BsStarFill} color="neon.yellow" />
                <Text fontWeight="600">{game.rating.toFixed(1)}</Text>
                <Text color="gray.500">
                  ({game.ratings_count?.toLocaleString()} ratings)
                </Text>
              </HStack>
            )}
            {game.released && (
              <HStack spacing={1}>
                <Icon as={BsCalendar3} />
                <Text>{formatDate(game.released)}</Text>
              </HStack>
            )}
            {game.playtime > 0 && (
              <HStack spacing={1}>
                <Icon as={BsClock} />
                <Text>{game.playtime} hours avg</Text>
              </HStack>
            )}
          </HStack>

          {/* External Links */}
          <HStack spacing={3}>
            {game.website && (
              <Button
                as="a"
                href={game.website}
                target="_blank"
                leftIcon={<BsGlobe />}
                size="sm"
                bg="whiteAlpha.200"
                color="white"
                borderRadius="full"
                _hover={{ bg: "gaming.accent" }}
              >
                Website
              </Button>
            )}
            {game.reddit_url && (
              <Button
                as="a"
                href={game.reddit_url}
                target="_blank"
                leftIcon={<BsReddit />}
                size="sm"
                bg="whiteAlpha.200"
                color="white"
                borderRadius="full"
                _hover={{ bg: "#ff4500" }}
              >
                Reddit
              </Button>
            )}
          </HStack>
        </VStack>
      </Box>

      {/* Main Content */}
      <Grid templateColumns={{ base: "1fr", lg: "1fr 350px" }} gap={8}>
        {/* Left Column */}
        <GridItem>
          <VStack spacing={8} align="stretch">
            {/* Description */}
            <Box
              bg="gaming.card"
              border="1px solid"
              borderColor="gaming.border"
              borderRadius="xl"
              p={6}
            >
              <Heading fontSize="lg" fontFamily="heading" mb={4} color="white">
                About
              </Heading>
              <ExpandableText>{game.description_raw}</ExpandableText>

              {/* Tags */}
              {game.tags && game.tags.length > 0 && (
                <Box mt={6}>
                  <GameTags tags={game.tags} />
                </Box>
              )}
            </Box>

            {/* Media */}
            <Box>
              <Heading fontSize="lg" fontFamily="heading" mb={4} color="white">
                Media
              </Heading>
              <GameTrailer gameId={game.id} />
              <GameScreenshots gameId={game.id} />
            </Box>

            {/* Achievements */}
            <GameAchievements gameId={game.id} />
          </VStack>
        </GridItem>

        {/* Right Column */}
        <GridItem>
          <VStack spacing={6} position="sticky" top="90px">
            {/* Ratings */}
            {game.ratings && game.ratings.length > 0 && (
              <GameRatings
                ratings={game.ratings}
                rating={game.rating}
                ratingsCount={game.ratings_count}
              />
            )}

            {/* Game Info */}
            <Box
              bg="gaming.card"
              border="1px solid"
              borderColor="gaming.border"
              borderRadius="xl"
              p={5}
              w="100%"
            >
              <Heading fontSize="lg" fontFamily="heading" mb={4} color="white">
                Game Info
              </Heading>
              <GameAttribute game={game} />
            </Box>

            {/* Stores */}
            {game.stores && game.stores.length > 0 && (
              <Box w="100%">
                <GameStores stores={game.stores} />
              </Box>
            )}
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default GameDetailPage;
